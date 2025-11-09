import React from "react";
import PostProvider from "./context/PostProvider";
import BlogHome from "./pages/BlogHome";

function App() {
  return (
    <PostProvider>
      <BlogHome />
    </PostProvider>
  );
}

export default App;
