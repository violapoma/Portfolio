import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SocialBox from "../components/contacts/SocialBox";
import BetweenBox from "../components/contacts/BetweenBox";
import DownloadBox from "../components/contacts/DownloadBox";
import EmailBox from "../components/contacts/EmailBox";

function Contacts() {
  const { t } = useTranslation();

  const boxes = [
    { id: 1, bg: "var(--contacts-first-bg)", content: <SocialBox /> },
    { id: 2, bg: null, content: <BetweenBox text={t("contacts.between")} /> },
    { id: 3, bg: null, content: <BetweenBox text={t("contacts.between")} /> },
    { id: 4, bg: "var(--contacts-second-bg)", content: <DownloadBox /> },
    {
      id: 5,
      bg: "var(--contacts-third-bg)",
      textColor: "var(--text-dark-color)",
      content: <EmailBox />,
    },
    { id: 6, bg: null, content: <BetweenBox text={t("contacts.email.title")} /> },
  ];

  return (
    <div className="contacts-grid">
      {boxes.map((box, index) => {
        const isInteractiveForm = box.id === 5;

        return (
          <motion.div
            key={box.id}
            className="contacts-box"
            style={{
              backgroundColor: box.bg || "transparent",
              color: box.textColor || "white",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            {...(!isInteractiveForm && {
              whileHover: {
                scale: 1.05,
                transition: { duration: 0.1 },
              },
              whileTap: {
                scale: 0.97,
                transition: { duration: 0.05 },
              },
            })}
            transition={{ delay: index * 0.2, duration: 1 }}
          >
            {box.content}
          </motion.div>
        );
      })}
    </div>
  );
}


export default Contacts;
