import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import AlertComponent from "./Alert";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState({ text: "", color: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponse({ text: "", color: "" });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulación de envío del formulario
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({
          email: "",
          description: "",
        });
        setResponse({
          text: "Formulario enviado con éxito",
          color: "success",
        });
      }, 1000);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.email) {
      errors.email = "Debe ingresar un correo electrónico";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Debe ingresar un correo electrónico válido";
    }
    if (!data.description) {
      errors.description = "Debe ingresar una descripción";
    }
    return errors;
  };

  return (
    <Container className="text-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-4">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="description" className="mb-4">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            isInvalid={!!errors.description}
          />
          <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="danger" type="submit" disabled={isSubmitting} className="mb-4">
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </Form>
      <AlertComponent text={response.text} color={response.color} setResponse={setResponse} />
    </Container>
  );
};

export default ContactForm;
