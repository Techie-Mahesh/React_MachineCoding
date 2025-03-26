import React from "react";
import SingleTodoList from "./SingleTodoList";

const TodoLists = ({ lists, setLists }) => {
  return (
    <>
      <h1>Todo List</h1>
      {lists.length === 0 && <h1>No records</h1>}
      <ul style={{ listStyle: "none", textAlign: "start" }}>
        {lists.map(list => (
          <SingleTodoList key={list.id} list={list} setLists={setLists} />
        ))}
      </ul>
    </>
  );
};

export default TodoLists;
