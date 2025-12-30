import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cross-browser smooth scroll to top
    const scrollToTop = () => {
      // Check if smooth scroll is supported
      if ("scrollBehavior" in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Fallback for older browsers (e.g., Safari < 15.4)
        const scrollStep = -window.scrollY / 20;
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
      }
    };

    scrollToTop();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
