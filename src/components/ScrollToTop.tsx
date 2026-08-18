import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollWindowToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    scrollWindowToTop();

    // Run again after paint so mobile/tablet browsers keep the page at the top
    // once layout and nested components finish mounting.
    const frame = requestAnimationFrame(() => {
      scrollWindowToTop();
      requestAnimationFrame(scrollWindowToTop);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
