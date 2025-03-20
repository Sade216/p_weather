'use client'
import { useRef, useEffect, RefObject } from "react";

export function useHorizontalScroll(): RefObject<HTMLDivElement | null> {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log('1')
    const el = elRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", onWheel);
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return elRef;
}