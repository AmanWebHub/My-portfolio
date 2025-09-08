import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = e => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    };
    anchors.forEach(a => a.addEventListener("click", handleClick));
    return () => anchors.forEach(a => a.removeEventListener("click", handleClick));
  }, []);
}
