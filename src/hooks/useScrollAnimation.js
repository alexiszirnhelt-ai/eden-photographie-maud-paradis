import { useRef, useEffect } from "react";

/**
 * Shared scroll animation hook using IntersectionObserver.
 * @param {Object} options
 * @param {boolean} [options.enabled=true] - Whether to observe at all
 * @param {string}  [options.selector]     - CSS selector for children to animate; if omitted, animates the element itself
 * @param {number}  [options.threshold=0.2]
 * @returns {React.RefObject} ref to attach to the element to observe
 */
function useScrollAnimation({ enabled = true, selector, threshold = 0.2 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (selector) {
            entry.target.querySelectorAll(selector)
              .forEach((el) => el.classList.add("is-visible"));
          } else {
            entry.target.classList.add("is-visible");
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [enabled, selector, threshold]);

  return ref;
}

export default useScrollAnimation;
