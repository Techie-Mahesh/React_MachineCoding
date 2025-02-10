import React from "react";

const AddForm = ({ handleSubmit, handleChange, formFields, edit }) => {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={formFields.title}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          onChange={handleChange}
          value={formFields.body}
        />
      </div>
      <button type="submit" onClick={e => handleSubmit(e, formFields, edit)}>
        {edit ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default AddForm;
