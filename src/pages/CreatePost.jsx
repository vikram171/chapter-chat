import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client.js";

function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("posts").insert([
      {
        title,
        content,
        image_url: imageUrl,
      },
    ]);

    setLoading(false);

    if (error) {
      alert("Error creating post: " + error.message);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: *</label>
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Content:</label>
          <textarea
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label>Image URL:</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
