import { ReactNode } from "react";

type HeroProps = {
  /** Background image path (e.g. /img/hero.jpg). Put the file in /public/img */
  bg: string;
  /** Alt text for the background image */
  alt: string;
  /** Overlay strength from your theme (as in data-overlay="1") */
  overlay?: number | string;
  /** Height utility class from your CSS framework */
  heightClass?: "height-50" | "height-60" | "height-70" | "height-80" | "height-100" | "auto";
  /** Enable ken-burns class */
  kenBurns?: boolean;
  /** Optional gradient background from your theme (data-gradient-bg="...") */
  gradientBg?: string;
  /** Extra classes to append to <section> */
  className?: string;
  /** Optional foreground content inside the hero */
  children?: ReactNode;
};

export default function Hero({
  bg,
  alt,
  overlay = 0,
  heightClass = "height-50",
  kenBurns = true,
  gradientBg,
  className = "",
  children,
}: HeroProps) {
  const sectionClasses = [
    heightClass,
    "imagebg",
    "switchable",
    kenBurns ? "section--ken-burns" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Build extra attributes for optional gradient/overlay
  const extraAttrs: Record<string, string | number> = {};
  if (overlay) extraAttrs["data-overlay"] = overlay;
  if (gradientBg) extraAttrs["data-gradient-bg"] = gradientBg;

  return (
    <section className={sectionClasses} {...extraAttrs}>
      <div className="background-image-holder">
        <img alt={alt} src={bg} />
      </div>

      {/* If you pass children, they’ll appear as foreground content */}
      {children ? <div className="hero__content container">{children}</div> : null}
    </section>
  );
}
