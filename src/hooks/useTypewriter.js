import { useEffect, useState } from "react";

export function useTypewriter(text, speed = 80, enabled = true) {
  const [displayedText, setDisplayedText] = useState(enabled ? "" : text);
  const [isDone, setIsDone] = useState(!enabled);

  useEffect(() => {
    if (!enabled || !text) {
      return;
    }

    setDisplayedText("");
    setIsDone(false);

    let idx = 0;

    const interval = setInterval(() => {
      const char = text.charAt(idx);

      setDisplayedText((prev) => (char === "\n" ? prev + "\n" : prev + char));

      idx++;

      if (idx >= text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, enabled]);

  return { displayedText, isDone };
}
