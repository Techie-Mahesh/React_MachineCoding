import React, { useEffect, useState } from "react";

const FormList = ({ posts, handleDelete, handleEdit }) => {
  return (
    <>
      <h1>Form List</h1>
      {posts.length === 0 && <h1>No records</h1>}
      <ul>
        {" "}
        {posts.map(post => (
          <li key={post.id}>
            <h5>
              {post.id} {post.title}
            </h5>
            <p key={post.id}> {post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <button onClick={() => handleEdit(post.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FormList;
