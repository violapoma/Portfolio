import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();
  const skills = {
    "Front End": ["React", "JavaScript", "HTML", "CSS"],
    "Back End": ["Node.js", "Express.js", "RESTful APIs"],
    UI: ["Bootstrap"],
    Libraries: ["i18next"],
    Database: ["MongoDB"],
  };

  const educationContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const skillsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const educationItemVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 10,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const skillsItemVariants = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="content aboutBg d-flex"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <Row className="m-5 px-5">
        <Col className="">
          <h2 className="mb-5 bree-serif-regular glow text-white fs-1">
            {t("about.education.title")}
          </h2>
          <motion.div
            variants={educationContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="fs-5" variants={educationItemVariants}>
              <Trans
                i18nKey="about.education.university"
                components={{ strong: <strong /> }}
              />
            </motion.div>
            <motion.div
              className="fs-5 pt-5 text-center"
              variants={educationItemVariants}
            >
              <Trans
                i18nKey="about.education.EPICODE"
                components={{ strong: <strong /> }}
              />
            </motion.div>
            <motion.div
              className="fs-5 pt-5 text-end"
              variants={educationItemVariants}
            >
              <Trans
                i18nKey="about.education.WIP"
                components={{ strong: <strong /> }}
              />
            </motion.div>
          </motion.div>
        </Col>
        <Col className="d-flex align-items-end justify-content-end">
          <motion.div
            className="tech-skills-container "
            variants={skillsContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {Object.entries(skills).map(([key, value], index, array) => {
              const isBig = index === 0 || index === 3;
              const isXXL = index === 4;
              let skillWidth;
              if (index === 0 || index === 3) skillWidth = "skill-wide";
              else if (index === 4) skillWidth = "skill-xxl";
              else skillWidth = "skill-small";
              const skillAlign = index % 2 === 0 && "text-end";
              const bg = `skill-bg-${index}`;
              return (
                <motion.div
                  key={key}
                  className={`tech-skills-item ${skillWidth} ${skillAlign} ${bg}`}
                  variants={skillsItemVariants}
                >
                  <h3 className="fs-2 bree-serif-regular">{key}</h3>
                  <ul
                    className={`custom-list ${
                      index === 4 && "d-flex align-items-center"
                    }`}
                  >
                    {value.map((skill) => (
                      <li key={skill} className={`fs-4 `}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
}

export default AboutMe;
