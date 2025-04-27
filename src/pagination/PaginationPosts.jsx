import React, { useState, useEffect } from "react";

const PaginationPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const POSTS_PER_PAGE = 10;

  const fetchPosts = async page => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_PER_PAGE}&_page=${page}`
    );
    const data = await response.json();
    const totalCount = response.headers.get("x-total-count"); // Total posts = 100
    setPosts(data);
    setTotalPages(Math.ceil(totalCount / POSTS_PER_PAGE));
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const goToPage = page => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📄 Paginated Posts</h2>
      {posts.map(post => (
        <div
          key={post.id}
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            marginBottom: "10px"
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal"
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationPosts;
