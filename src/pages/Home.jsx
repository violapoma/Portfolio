import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Home() {
  const { t, i18n } = useTranslation();

  const STAGGER = 0.05;
  const LETTER_DURATION = 0.1;
  const text = t("home.title") + t("home.desctiption");

  const typingDuration = text.length * STAGGER + LETTER_DURATION + 1;
  const firstlineDuration = t("home.title").length * STAGGER + LETTER_DURATION;

  const textContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER,
      },
    },
  };
  const letter = {
    hidden: {
      opacity: 0,
      y: `0em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: LETTER_DURATION,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const visited = sessionStorage.getItem("homeVisited");
    if (!visited) {
      sessionStorage.setItem("homeVisited", "true");
    }
  }, []);

  return (
    <div className="content homeBg ">
      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="visible"
        style={{ display: "inline-block", margin: "8em" }}
      >
        <div style={{ display: "block" }}>
          {t("home.title")
            .split("")
            .map((char, i) => (
              <motion.span
                key={`title-${i}`}
                variants={letter}
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  fontSize: "3em",
                }}
              >
                {char}
              </motion.span>
            ))}
          <motion.span
            className="mx-5 emoji"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{
              opacity: 1,
              rotate: [0, 14, -8, 14, -4, 0],
            }}
            transition={{
              opacity: { delay: firstlineDuration },
              rotate: {
                delay: firstlineDuration,
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{ fontSize: "3em", display: "inline-block" }}
          >
            👋
          </motion.span>
        </div>

        <div style={{ display: "inline-flex", alignItems: "baseline" }}>
          {t("home.description")
            .split("")
            .map((char, i) => (
              <motion.span
                key={`desc-${i}`}
                variants={letter}
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  fontSize: "6em",
                }}
              >
                {char}
              </motion.span>
            ))}

          <span
            className="cursor fsBig"
            style={{
              animationDelay: `${typingDuration}s`,
            }}
          >
            _
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
