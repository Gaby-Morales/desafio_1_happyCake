import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container className="pt-5 w-50">
      <h1 className="mb-4">Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <ContactForm />
    </Container>
  );
};
export default ContactPage;
