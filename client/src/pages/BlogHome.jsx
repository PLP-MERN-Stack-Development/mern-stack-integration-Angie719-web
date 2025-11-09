import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

const BlogHome = () => {
  const { posts, loading, error } = useContext(PostContext);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
};

export default BlogHome;
