import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch post and comments
  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching post:", error.message);
      } else {
        setPost(data);
      }
    }

    async function fetchComments() {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching comments:", error.message);
      } else {
        setComments(data);
      }
    }

    fetchPost();
    fetchComments();
  }, [id]);

  // Upvote logic
  const handleUpvote = async () => {
    if (!post) return;

    const newUpvotes = (post.upvotes || 0) + 1;

    const { error } = await supabase
      .from("posts")
      .update({ upvotes: newUpvotes })
      .eq("id", id);

    if (error) {
      console.error("Error updating upvotes:", error.message);
    } else {
      setPost({ ...post, upvotes: newUpvotes });
    }
  };

  // Add comment logic
  const handleAddComment = async () => {
    if (!commentText.trim()) return;

    const { error } = await supabase.from("comments").insert([
      {
        post_id: id,
        content: commentText.trim(),
      },
    ]);

    if (error) {
      console.error("Error adding comment:", error.message);
    } else {
      setComments([{ content: commentText.trim() }, ...comments]);
      setCommentText("");
    }
  };

  // Edit logic
  const handleEdit = async () => {
    const newTitle = prompt("Enter new title:", post.title);
    const newContent = prompt("Enter new content:", post.content);

    if (newTitle !== null && newContent !== null) {
      const { error } = await supabase
        .from("posts")
        .update({ title: newTitle, content: newContent })
        .eq("id", id);

      if (error) {
        console.error("Error updating post:", error.message);
      } else {
        setPost({ ...post, title: newTitle, content: newContent });
      }
    }
  };

  // Delete logic
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;
  
    const { error } = await supabase
      .from("posts")
      .delete()
      .eq("id", id);
  
    if (error) {
      console.error("Error deleting post:", error.message);
    } else {
      // Redirect back to home page after deletion
      window.location.href = "/";
    }
  };
  

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>🕒 {new Date(post.created_at).toLocaleString()}</p>
      <p>🔥 {post.upvotes} upvotes</p>

      <button onClick={handleUpvote} style={{ marginBottom: "1rem" }}>
        Upvote 🔼
      </button>

      <p>{post.content}</p>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleEdit}>✏️ Edit Post</button>
        <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>
          🗑️ Delete Post
        </button>
      </div>

      <hr />

      <h3>Comments</h3>
      <ul>
        {comments.map((c, idx) => (
          <li key={idx}>{c.content}</li>
        ))}
      </ul>

      <textarea
        rows="3"
        style={{ width: "100%", marginTop: "1rem" }}
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />

      <button onClick={handleAddComment} style={{ marginTop: "0.5rem" }}>
        Add Comment
      </button>
    </div>
  );
}

export default PostPage;
