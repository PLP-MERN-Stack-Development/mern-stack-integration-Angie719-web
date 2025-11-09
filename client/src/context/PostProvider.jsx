import React, { useState, useEffect } from "react";
import PostContext from "./PostContext";
import { postService, categoryService } from "../api";

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postsData, categoriesData] = await Promise.all([
          postService.getAllPosts(),
          categoryService.getAllCategories(),
        ]);
        setPosts(postsData?.data || postsData || []);
        setCategories(categoriesData?.data || categoriesData || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addPost = async (newPost) => {
    const tempPost = { ...newPost, _id: Date.now().toString() };
    setPosts((prev) => [tempPost, ...prev]);
    try {
      const created = await postService.createPost(newPost);
      setPosts((prev) =>
        prev.map((p) => (p._id === tempPost._id ? created : p))
      );
    } catch (err) {
      console.error(err);
      setPosts((prev) => prev.filter((p) => p._id !== tempPost._id));
      alert("Failed to create post: " + err.message);
    }
  };

  const deletePost = async (id) => {
    const backup = posts;
    setPosts((prev) => prev.filter((p) => p._id !== id));
    try {
      await postService.deletePost(id);
    } catch (err) {
      console.error(err);
      setPosts(backup);
      alert("Failed to delete post: " + err.message);
    }
  };

  return (
    <PostContext.Provider
      value={{ posts, categories, addPost, deletePost, loading, error }}
    >
      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
