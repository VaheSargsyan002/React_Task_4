import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Article: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/");
    }
  }, [navigate]);

  const handleSave = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/");
      return;
    }

    if (!title.trim() || !content.trim()) return;

    const article = { title, content, id: Date.now().toString() };
    const key = `articles_${userId}`;

    let existingArticles = [];
    try {
      existingArticles = JSON.parse(localStorage.getItem(key) || "[]");
    } catch {
      existingArticles = [];
    }

    existingArticles.push(article);
    localStorage.setItem(key, JSON.stringify(existingArticles));

    setTitle("");
    setContent("");

    navigate(`/user/${userId}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Write Article</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={10}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <button type="submit">Save Article</button>
      </form>
    </div>
  );
};

export default Article;
