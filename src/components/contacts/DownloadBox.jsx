import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function DownloadBox() {
  const { t } = useTranslation();

  return (
    <Container
      className="cursorPointer text-center"
      onClick={() => {
        const link = document.createElement("a");
        link.href = "/public/CV_PomaViola.pdf";
        link.download = "CV_PomaViola.pdf";
        link.click();
      }}
    >
      <h2 className="fsMedium">{t("contacts.cv")}</h2>
      <motion.div
        animate={{ y: [0, -5, 0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <i className="bi bi-download fs-1"></i>
      </motion.div>
    </Container>
  );
}

export default DownloadBox;
