"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "@studio-freight/lenis/dist/lenis.css"; 

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // @ts-ignore
      lenis.destroy?.();
    };
  }, []);

  return <>{children}</>;
}
