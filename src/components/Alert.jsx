import { Alert } from "react-bootstrap";

const AlertComponent = ({ text, color, setResponse }) => {
  return (
    <>
      {text && (
        <Alert onClose={() => setResponse({ text: "", color: "" })} variant={color} dismissible>
          {text}
        </Alert>
      )}
    </>
  );
};

export default AlertComponent;
