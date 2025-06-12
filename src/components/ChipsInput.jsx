import React, { useState } from "react";

function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [value, setValue] = useState("");

  const handleKeyDown = e => {
    if (e.key === "Enter" && value.trim()) {
      setChips(prev => [
        ...prev,
        {
          id: Date.now(),
          name: value.trim()
        }
      ]);
      setValue("");
    }
  };

  const handleDelete = id => {
    const updatedData = chips.filter(item => item.id !== id);
    setChips(updatedData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0"
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        value={value}
        placeholder="Type a chip and press Enter"
        style={{ padding: "8px", width: "200px" }}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10
        }}
      >
        {chips.map(item => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "1px 12px",
              borderRadius: "20px",
              backgroundColor: "#f4f4f4",
              fontSize: "14px",
              justifyContent: "space-between"
            }}
          >
            <span>{item.name}</span>
            <button
              onClick={() => handleDelete(item.id)}
              style={{
                background: "none",
                border: "none",
                color: "red",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              aria-label={`Remove ${item.name}`}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
