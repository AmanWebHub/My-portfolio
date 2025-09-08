import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal(targets = [], options = {}) {
  useEffect(() => {
    if (!targets.length) return;
    const sr = ScrollReveal(options);
    sr.reveal(targets.join(", "), { interval: 200 });
  }, [targets, options]);
}
