import React, { useEffect, useState, useRef } from "react";

const SimpleInfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const pageRef = useRef(1); // Keep track of current page without stale closure

  const fetchPosts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageRef.current}`
    );
    const data = await res.json();

    if (data.length > 0) {
      setPosts(prev => [...prev, ...data]);
      pageRef.current += 1;
    } else {
      setHasMore(false);
    }
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && hasMore) {
      fetchPosts();
    }
  };

  useEffect(() => {
    fetchPosts(); // Load initial data
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // No dependency on pageRef here

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌀 Infinite Scroll (Page Controlled)</h2>
      {posts.map(post => (
        <div
          key={post.id}
          style={{
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc"
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      {!hasMore && <p style={{ textAlign: "center" }}>✅ All posts loaded</p>}
    </div>
  );
};

export default SimpleInfiniteScroll;
