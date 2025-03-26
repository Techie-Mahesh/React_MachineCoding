import React, { useState, useEffect } from "react";
import TodoLists from "./TodoLists";
import ListForm from "./ListForm";

const Form1 = () => {
  const [lists, setLists] = useState([]);

  console.log("lists", lists);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://66fa751fafc569e13a9bd714.mockapi.io/users"
      );
      const data = await response.json();
      setLists(data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <ListForm
        lists={lists}
        setLists={setLists}
      />
      <TodoLists lists={lists} setLists={setLists} />
    </>
  );
};

export default Form1;
