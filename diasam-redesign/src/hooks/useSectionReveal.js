import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to detect when a section is in the viewport
 * and trigger the signature converging ingress animations.
 */
export function useSectionReveal(threshold = 0.25) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset so animation re-triggers upon scrolling back into the slide
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px"
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
