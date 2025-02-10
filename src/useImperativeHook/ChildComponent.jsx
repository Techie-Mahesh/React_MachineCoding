import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ChildComponent = React.forwardRef(({ fields, onRegionChange }, ref) => {
  const [formState, setFormState] = React.useState({
    region: "",
    market: "",
    rupees: ""
  });

  const handleChange = (event, fieldId) => {
    const value = event.target.value;
    setFormState(prevState => {
      const newState = { ...prevState, [fieldId]: value };

      // Reset dependent fields when the region changes
      if (fieldId === "region") {
        newState.market = ""; // Reset market
        newState.rupees = ""; // Reset rupees
        onRegionChange(event); // Notify parent about the region change
      }

      return newState;
    });
  };

  React.useImperativeHandle(
    ref,
    () => ({
      getState: () => formState
    }),
    [formState]
  );

  return (
    <>
      {fields.map(field => (
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
          key={field.id}
        >
          <InputLabel id={`${field.id}-label`}>{field.label}</InputLabel>
          <Select
            labelId={`${field.id}-label`}
            id={`${field.id}-select`}
            value={formState[field.id] || ""}
            onChange={e => handleChange(e, field.id)}
            label={field.label}
          >
            {field.options.map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </>
  );
});

export default ChildComponent;
