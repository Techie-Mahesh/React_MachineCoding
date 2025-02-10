import React, { useEffect, useState } from "react";
import FormList from "./FormList";
import AddForm from "./AddForm";

const Form = () => {
  const [posts, setPosts] = useState([]);
  const [formFields, setFormFields] = useState({
    title: "",
    body: "",
    id: Math.floor(Math.random() * 1000)
  });
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then(response => response.json());
      setPosts(data);
    };

    fetchData();
  }, []);
  const handleSubmit = async (e, formFields, isEdit) => {
    e.preventDefault();
    if (isEdit) {
      const updatedItems = posts.map(post =>
        post.id === formFields.id ? formFields : post
      );
      setPosts(updatedItems);
      setEdit(false);
    } else if (formFields.title && formFields.body) {
      setPosts([formFields, ...posts]);
    }
    setFormFields({
      title: "",
      body: "",
      id: ""
    });
    const request = new Request("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formFields),
      headers: {
        "Content-Type": "application/json"
      }
    });
    // console.log(response1.status);
  };
  const handleDelete = id => {
    const deletedItems = posts.filter(post => post.id !== id);
    setPosts(deletedItems);
    fetch("https://example.com/delete-item/" + id, {
      method: "DELETE"
    });
  };
  const handleEdit = id => {
    setEdit(true);
    const editedItems = posts.filter(post => post.id === id);
    setFormFields({
      ...formFields,
      id: editedItems[0].id,
      title: editedItems[0].title,
      body: editedItems[0].body
    });
  };
  const handleChange = event => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <AddForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formFields={formFields}
        edit={edit}
      />
      <FormList
        posts={posts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default Form;
