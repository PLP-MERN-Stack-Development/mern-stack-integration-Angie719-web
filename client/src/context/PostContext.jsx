import React, { createContext, useState, useEffect } from "react";
import { postService, categoryService } from "../api";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts + categories when app starts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postsData, categoriesData] = await Promise.all([
          postService.getAllPosts(),
          categoryService.getAllCategories(),
        ]);

        // Handle cases where API returns nested data
        setPosts(postsData?.data || postsData || []);
        setCategories(categoriesData?.data || categoriesData || []);
      } catch (fetchError) {
        console.error("Error fetching data:", fetchError);
        setError(fetchError.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Optimistic post creation
  const addPost = async (newPost) => {
    const tempPost = { ...newPost, _id: Date.now().toString() };
    setPosts((prev) => [tempPost, ...prev]);

    try {
      const created = await postService.createPost(newPost);
      setPosts((prev) =>
        prev.map((p) => (p._id === tempPost._id ? created : p))
      );
    } catch (createError) {
      console.error("Failed to create post:", createError);
      setPosts((prev) => prev.filter((p) => p._id !== tempPost._id));
      alert("Failed to create post");
    }
  };

  // Delete post
  const deletePost = async (id) => {
    const backup = posts;
    setPosts((prev) => prev.filter((p) => p._id !== id));

    try {
      await postService.deletePost(id);
    } catch (deleteError) {
      console.error("Failed to delete post:", deleteError);
      setPosts(backup);
      alert("Failed to delete post");
    }
  };

  return (
    <PostContext.Provider
      value={{ posts, categories, addPost, deletePost, loading, error }}
    >
      {children}
    </PostContext.Provider>
  );
};
