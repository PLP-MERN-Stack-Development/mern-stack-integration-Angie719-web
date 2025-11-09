import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { posts, loading, error, deletePost } = useContext(PostContext);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post._id} className="border-b pb-2">
              <Link
                to={`/posts/${post._id}`}
                className="text-lg text-blue-600 font-semibold"
              >
                {post.title}
              </Link>
              <p className="text-gray-600 text-sm">{post.author}</p>
              <button
                onClick={() => deletePost(post._id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
