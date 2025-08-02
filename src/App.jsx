import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Router>
      <div style={{ padding: "1rem" }}>
        <h1>📚 Chapter Chat</h1>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/create">Create Post</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
