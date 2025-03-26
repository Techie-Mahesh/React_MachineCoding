import React, { useState } from "react";

const SingleTodoList = ({ list, setLists }) => {
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState(list.name);
  const handleChange = e => {
    setTodo(e.target.value);
  };
  const handleClick = () => {
    if (edit) {
      const updateUser = async () => {
        await fetch(
          `https://66fa751fafc569e13a9bd714.mockapi.io/users/${list.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: todo })
          }
        );
      };
      updateUser();
      setLists(prev =>
        prev.map(item => (item.id === list.id ? { ...item, name: todo } : item))
      );
    }
    setEdit(!edit);
  };

  const handleDelete = () => {
    const deleteUser = async () => {
      await fetch(
        `https://66fa751fafc569e13a9bd714.mockapi.io/users/${list.id}`,
        {
          method: "DELETE"
        }
      );
    };
    deleteUser();
    setLists(prev => prev.filter(item => item.id !== list.id));
  };
  return (
    <>
      <li>
        {edit ? (
          <input id="name" name="name" value={todo} onChange={handleChange} />
        ) : (
          <p>
            {" "}
            {list.id} {list.name}
          </p>
        )}
      </li>
      <li>
        <button style={{ margin: 5 }} onClick={handleClick}>
          {edit ? "update" : "Edit"}
        </button>
        <button tyle={{ margin: 5 }} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

export default SingleTodoList;
