"use client";

import { IconBrush } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function PaintbrushCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handlePointerLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      style={{ transform: `translate(${position.x}px, ${position.y}px) rotate(-18deg)` }}
    >
      <IconBrush
        className="h-7 w-7 text-gold drop-shadow-[0_0_5px_rgba(212,168,76,0.95)]"
        strokeWidth={1.6}
      />
    </div>
  );
}
