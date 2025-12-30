import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTypewriter } from "../hooks/useTypewriter";

function Home() {
  const { t, i18n } = useTranslation();

  const [fullText, setFullText] = useState("");
  const [animate, setAnimate] = useState(false);

  const title = t("home.title");
  const description = t("home.description");

  useEffect(() => {
    setFullText(`${t("home.title")}\n${t("home.description")}`);
  }, [i18n.language, title, description]);

  useEffect(() => {
    const visited = sessionStorage.getItem("homeVisited");
    if (!visited) {
      setAnimate(true);
      sessionStorage.setItem("homeVisited", "true");
    }
  }, []);

  const { displayedText, isDone } = useTypewriter(fullText, 60, animate);

  const displayedLines = displayedText.split("\n");
  const titleDone = displayedLines[0]?.length === title.length;

  return (
    <h1 className="typewriter fsBig m-5">
      {animate ? (
        <>
          {/* Prima riga */}
          {displayedLines[0]}
          {titleDone && <span className="mx-5 emoji wave"> 👋</span>}

          {/* Seconda riga */}
          {displayedLines.length > 1 && (
            <>
              <br />
              {displayedLines[1]}
              {isDone && <span className="mx-5 emoji pulse"> 💻</span>}
            </>
          )}
        </>
      ) : (
        <>
          {title} <span className="mx-5 emoji wave">👋</span>
          <br />
          {description} <span className="mx-5 emoji pulse">💻</span>
        </>
      )}

      {animate && !isDone && <span className="cursor">|</span>}
    </h1>
  );
}

export default Home;
