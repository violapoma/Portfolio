import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const socials = [
  {
    id: 1,
    icon: <i className="bi bi-github" />,
    text: "https://github.com/violapoma",
    socName: "GITHUB",
  },
  {
    id: 2,
    icon: <i className="bi bi-linkedin" />,
    text: "https://www.linkedin.com/in/viola-poma",
    socName: "LINKEDIN",
  },
];

function SocialBox() {
  const { t } = useTranslation();

  return (
    <Container>
      <Row className="g-5">
        <Col xs={6} className="d-flex align-items-center justify-content-end">
          <h2>{t("contacts.social")}</h2>
        </Col>
        <Col xs={6}>
          {socials.map((soc) => (
            <Row key={soc.id} className="align-items-center">
              <Col xs={2} className="fs-1 text-end">
                {soc.icon}
              </Col>
              <Col xs={9}>
                <a
                  href={soc.text}
                  alt={soc.socName}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {soc.socName}
                </a>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default SocialBox;
