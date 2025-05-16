import { useState } from "react";

const useForm = (initialFormState, validate) => {
  const initialValues = initialFormState.reduce((acc, item) => {
    acc[item.name] = item.value;
    return acc;
  }, {});

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    // Validate on change if needed
    if (validate) {
      const validationErrors = validate({ ...values, [name]: value });
      setErrors(validationErrors);
    }
  };

  const handleSubmit = (event, setFinalValues) => {
    event.preventDefault();

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);

      // Only submit if no errors
      if (Object.keys(validationErrors).length === 0) {
        setFinalValues(values);
      }
    } else {
      setFinalValues(values);
    }
  };

  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
