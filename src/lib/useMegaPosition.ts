import { useEffect, useState } from "react";

/**
 * Keeps a dropdown/mega menu inside the viewport.
 * Returns inline styles to apply on the menu element.
 */
export function useMegaPosition(
  triggerEl: HTMLAnchorElement | null,
  menuEl: HTMLDivElement | null
) {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    function update() {
      if (!triggerEl || !menuEl) return;

      const tRect = triggerEl.getBoundingClientRect();
      const mRect = menuEl.getBoundingClientRect();

      const viewportW = window.innerWidth;
      const desiredLeft = tRect.left; // align start with trigger
      const maxLeft = viewportW - mRect.width - 16; // 8px gutter on both sides
      const minLeft = 8;

      let left = Math.max(minLeft, Math.min(desiredLeft, maxLeft));

      // If the menu would overflow, clamp it.
      // Position the menu aligned to the viewport, not the parent.
      const computed: React.CSSProperties = {
        position: "absolute",
        left: `${left}px`,
        right: "auto",
        top: "100%",
        transform: "translateY(0)",
      };

      // If the navbar container is centered (e.g. .container),
      // ensure the menu is positioned relative to the viewport.
      // We rely on position: static for .position-static parent (Bootstrap pattern).
      setStyle(computed);
    }

    update();
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [triggerEl, menuEl]);

  return style;
}
