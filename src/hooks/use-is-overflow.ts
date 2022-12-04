import { useState, useCallback, useLayoutEffect, MutableRefObject } from "react";

export const useIsOverflow = <T extends HTMLElement = HTMLElement>(
  ref: MutableRefObject<T | null>
) => {
  const [isOverflow, setIsOverflow] = useState(false);

  const resizeHandler = useCallback(() => {
    const { current } = ref;

    if (current) {
      const hasOverflow = current.offsetWidth < current.scrollWidth;
      setIsOverflow(hasOverflow);
    }
  }, [ref]);

  const handleResize = useCallback(
    (ref: MutableRefObject<T | null>) => {
      const { current } = ref;

      if (current) {
        if ("ResizeObserver" in window) {
          new ResizeObserver(resizeHandler).observe(current);
        }

        resizeHandler();
      }
    },
    [resizeHandler]
  );

  useLayoutEffect(() => {
    handleResize(ref);
  }, [ref, handleResize]);

  return isOverflow;
};
