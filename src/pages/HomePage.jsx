import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/client.js";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPosts = async () => {
    let query = supabase
      .from("posts")
      .select("*")
      .order(sortBy, { ascending: false });

    if (searchTerm.trim()) {
      query = query.ilike("title", `%${searchTerm}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      setPosts(data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [sortBy, searchTerm]);

  return (
    <div>
      <h2>Recent Posts</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="created_at">Newest</option>
          <option value="upvotes">Most Upvoted</option>
        </select>

        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginLeft: "1rem", padding: "4px" }}
        />
      </div>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "1rem" }}>
              <Link to={`/post/${post.id}`} style={{ fontSize: "1.2rem" }}>
                {post.title}
              </Link>
              <div>📈 {post.upvotes} upvotes</div>
              <div>🕒 {new Date(post.created_at).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
