import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Card,
  CardContainer,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import dropItems from "./dropitems";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_pfdof3b",
        "template_190xna5",
        form.current,
        "V4LfiJXQpntQcTATn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormValues = { ...formValues, [name]: value };
    setFormValues(newFormValues);

    const newErrors = validate(name, value);
    setFormErrors({ ...formErrors, [name]: newErrors[name] });
  };

  const validate = (name, value) => {
    let errors = {};
    switch (name) {
      case "email":
        if (!value) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errors.email = "Email address is invalid";
        }
        break;
      case "name":
      case "message":
        if (!value) {
          errors[name] = "This field is required";
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = validate(name, value);
    setFormErrors({ ...formErrors, ...newErrors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation on submit
    let errors = {};
    Object.keys(formValues).forEach((name) => {
      errors = { ...errors, ...validate(name, formValues[name]) };
    });
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      sendEmail();
      setFormValues({ name: "", email: "", type: "", message: "" });
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  }, [formValues]);

  return (
    <form className="contact-form" ref={form} onSubmit={handleSubmit} noValidate>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        onBlur={handleBlur}
        error={!!formErrors.name}
        helperText={formErrors.name}
        fullWidth
        margin="normal"
        className=""
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        onBlur={handleBlur}
        error={!!formErrors.email}
        helperText={formErrors.email}
        fullWidth
        margin="normal"
      />
      {/* Dropdown implementation */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Inquiry Type</InputLabel>
        <Select
          value={formValues.dropdown}
          onChange={handleInputChange}
          onBlur={handleBlur}
          name="type"
        >
          {dropItems.contactUs.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Message"
        variant="outlined"
        name="message"
        multiline
        rows={4}
        value={formValues.message}
        onChange={handleInputChange}
        onBlur={handleBlur}
        error={!!formErrors.message}
        helperText={formErrors.message}
        fullWidth
        margin="normal"
        className="contact-message"
      />
      <Button type="submit" value="Send" variant="contained" color="primary">
        Submit
      </Button>
      {isSubmitted && (
        <div className="formAlert" role="alert" aria-live="assertive">
          Your message has been successfully sent!
        </div>
      )}
    </form>
  );
};

export default ContactForm;
