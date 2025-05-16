import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import useForm from "./useForm";

const initialFormState = [
  { name: "email", value: "" },
  { name: "password", value: "" }
];

const validate = values => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

const MyForm = () => {
  const [submittedValues, setSubmittedValues] = useState(null);
  const { values, handleChange, handleSubmit, errors } = useForm(
    initialFormState,
    validate
  );

  return (
    <Box
      component="form"
      onSubmit={e => handleSubmit(e, setSubmittedValues)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}
    >
      <TextField
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
        fullWidth
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        error={Boolean(errors.password)}
        helperText={errors.password}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

      {submittedValues && (
        <Box mt={2}>
          <pre>{JSON.stringify(submittedValues, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
};

export default MyForm;
