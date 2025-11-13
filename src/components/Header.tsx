import React, { useMemo, useRef, useState } from "react";
import { useMegaPosition } from "../lib/useMegaPosition";

type MegaColumn = {
  title?: string;
  links: Array<{ label: string; href: string }>;
};

type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "mega"; label: string; columns: MegaColumn[] };

type HeaderProps = {
  brand: { name: string; href?: string };
  items: NavItem[];
  cta?: { label: string; href: string };
  containerClassName?: string; // e.g. "container", "container-fluid"
};

const Header: React.FC<HeaderProps> = ({
  brand,
  items,
  cta,
  containerClassName = "container",
}) => {
  const [expanded, setExpanded] = useState(false);
  const [openMega, setOpenMega] = useState<number | null>(null);

  // Refs and positioning for the active mega
  const triggerRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeTrigger = openMega != null ? triggerRefs.current[openMega] : null;
  const activeMenu = openMega != null ? menuRefs.current[openMega] : null;
  const megaStyle = useMegaPosition(activeTrigger, activeMenu);

  // Close when switching from desktop to mobile (or vice versa)
  const isDesktop = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 768px)").matches;
  }, [expanded]); // recompute on state changes that likely follow breakpoints

  const handleEnter = (idx: number) => {
    if (isDesktop) setOpenMega(idx);
  };
  const handleLeave = () => {
    if (isDesktop) setOpenMega(null);
  };
  const handleClick = (idx: number) => {
    // On mobile, toggle by click
    if (!isDesktop) setOpenMega(openMega === idx ? null : idx);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className={containerClassName}>
        {/* Brand */}
        <a className="navbar-brand" href={brand.href || "#"}>{brand.name}</a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={() => setExpanded((s) => !s)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Collapse */}
        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="mainNavbar">
          <ul className="navbar-nav me-auto">
            {items.map((item, idx) => {
              if (item.type === "link") {
                return (
                  <li className="nav-item" key={`nav-${idx}`}>
                    <a className="nav-link" href={item.href}>{item.label}</a>
                  </li>
                );
              }

              // Mega item
              return (
                <li
                  className={`nav-item dropdown position-static ${openMega === idx ? "show" : ""}`}
                  key={`nav-${idx}`}
                  onMouseEnter={() => handleEnter(idx)}
                  onMouseLeave={handleLeave}
                >
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle ${openMega === idx ? "show" : ""}`}
                    role="button"
                    aria-expanded={openMega === idx}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(idx);
                    }}
                    ref={(el) => (triggerRefs.current[idx] = el)}
                  >
                    {item.label}
                  </a>

                  {/* Mega dropdown */}
                  <div
                    className={`dropdown-menu border-0 shadow ${openMega === idx ? "show" : ""}`}
                    ref={(el) => (menuRefs.current[idx] = el)}
                    style={{
                      ...megaStyle,
                      // Base look for mega area
                      width: "min(100vw - 2rem, 960px)",
                      padding: "1rem",
                      borderRadius: "0.75rem",
                    }}
                  >
                    <div className="row g-3">
                      {item.columns.map((col, cIdx) => (
                        <div className="col-12 col-md-4" key={`col-${idx}-${cIdx}`}>
                          {col.title && <div className="mb-2 fw-bold text-uppercase small">{col.title}</div>}
                          <ul className="list-unstyled mb-0">
                            {col.links.map((l, lIdx) => (
                              <li key={`link-${idx}-${cIdx}-${lIdx}`} className="mb-1">
                                <a className="text-decoration-none d-block py-1" href={l.href}>
                                  {l.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {cta && (
            <div className="d-flex">
              <a className="btn btn-primary" href={cta.href}>{cta.label}</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
