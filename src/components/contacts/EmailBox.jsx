import { useRef, useState } from "react";
import { Button, Col, Form, Row, Spinner, Toast } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../../utils/emailJsConfig";

function EmailBox() {
  const { t } = useTranslation();

  const [validated, setValidated] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  const form = useRef();

  const [fData, setFData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const checkFilled = () => {
    if (!fData.from_name || !fData.from_email || !fData.message || !fData.terms)
      return false;
    return true;
  };

  const handleSumit = async (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    setValidated(true);

    const isValid = form.current.checkValidity(); 
    if (!isValid || !fData.terms) return; 

    setIsSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus(t("contacts.email.status.ok"));
      form.current.reset();
    } catch (error) {
      setStatus(t("contacts.email.status.nok"));
      console.log(error);
    } finally {
      setIsSending(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  return (
    <Form ref={form} noValidate validated={validated} onSubmit={handleSumit}>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group as={Col} className="mb-2">
            <Form.Label className="fw-bold">
              {t("contacts.email.fields.name")}
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="from_name"
              placeholder="Daenerys Targaryen"
              value={fData.from_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label className="fw-bold">
              {t("contacts.email.fields.email")}
            </Form.Label>
            <Form.Control
              required
              type="email"
              name="from_email"
              placeholder="daeT@gmail.com"
              value={fData.from_email}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {t("contacts.email.fields.invalid")}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Form.Group as={Col}>
          <Form.Label className="fw-bold">
            {t("contacts.email.fields.message")}
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            required
            className="noResize"
            type="text"
            name="message"
            placeholder="💬"
            value={fData.message}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          name="terms"
          checked={fData.terms}
          onChange={handleChange}
          label={t("contacts.email.terms.label")}
          feedback={t("contacts.email.terms.feedback")}
          feedbackType="invalid"
        />
      </Form.Group>
      <Button
        type="submit"
        disabled={!checkFilled()}
        style={{ backgroundColor: "var(--text-dark-color)", border: "none" }}
      >
        {isSending ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <i className="bi bi-envelope-at" />
        )}{" "}
        {t("contacts.email.submit")}
      </Button>

      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={4000}
        autohide
        bg={status === t("contacts.email.status.ok") ? "success" : "danger"}
        style={{
          position: "fixed",
          bottom: "3em",
          left: "20em",
          zIndex: 9999,
          textAlign: "center",
        }}
      >
        <Toast.Body className="text-white">{status}</Toast.Body>
      </Toast>
    </Form>
  );
}

export default EmailBox;
