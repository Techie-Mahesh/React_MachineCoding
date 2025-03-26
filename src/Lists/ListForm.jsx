import React, { useState } from "react";

const ListForm = ({ lists, setLists }) => {
  const [formFields, setFormFields] = useState({
    id: "",
    name: ""
  });
  const handleChange = e => {
    console.log(e.target.value, e.target.name);
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const nextId =
      lists.length > 0
        ? Math.max(...lists.map(item => parseInt(item.id, 10))) + 1
        : 1;

    const newUser = { ...formFields, id: nextId.toString() };
    const addUser = async () => {
      try {
        const response = await fetch(
          "https://66fa751fafc569e13a9bd714.mockapi.io/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
          }
        );
        const addedUser = await response.json();
        setLists([...lists, addedUser]);
        setFormFields({
          id: "",
          name: ""
        });
      } catch (error) {
        console.log(error);
      }
    };
    addUser();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        name="name"
        placeholder="name"
        value={formFields.name}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ListForm;
