import classes from "./Header.module.css";
import { headerNavItems } from "../../Utilities/navitems";
import HeaderSideNav from "../HeaderSideNav/HeaderSideNav";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef, useState, useEffect } from "react";

const isNearTop = (rect: DOMRect, tolerance = 80) => {
  return Math.abs(rect.top) <= tolerance;
};

const Header = () => {
  const sideNav = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  const openSideNav = () => {
    if (sideNav.current) sideNav.current.style.width = "100%";
  };

  const closeSideNav = () => {
    if (sideNav.current) sideNav.current.style.width = "0%";
  };

  const isProgrammaticScrollRef = useRef(false);
  const programmaticTargetRef = useRef<string | null>(null);
  const scrollDebounceRef = useRef<number | null>(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section-id]")
    );
    if (!sections.length) return;

    const lastSection = sections[sections.length - 1];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScrollRef.current) return;

        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topEntry = visible[0];
          const id = topEntry.target.getAttribute("data-section-id");
          if (id) setActiveSection(id);
          return;
        }

        let closest: { id: string | null; distance: number } = {
          id: null,
          distance: Infinity,
        };
        sections.forEach((s) => {
          const rect = s.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          const id = s.getAttribute("data-section-id");
          if (id && distance < closest.distance) {
            closest = { id, distance };
          }
        });
        if (closest.id) setActiveSection(closest.id);
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: [0, 0.01, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      if (scrollDebounceRef.current) {
        window.clearTimeout(scrollDebounceRef.current);
      }

      scrollDebounceRef.current = window.setTimeout(() => {
        if (isProgrammaticScrollRef.current && programmaticTargetRef.current) {
          const targetEl = document.getElementById(
            programmaticTargetRef.current
          );
          if (targetEl) {
            const rect = targetEl.getBoundingClientRect();
            if (isNearTop(rect, 100)) {
              setActiveSection(programmaticTargetRef.current);
              isProgrammaticScrollRef.current = false;
              programmaticTargetRef.current = null;
              return;
            }
          }
        }
      }, 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const handleScrollEnd = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
      if (nearBottom) {
        const lastId = lastSection.getAttribute("data-section-id");
        if (lastId) setActiveSection(lastId);
      }
    };
    window.addEventListener("scroll", handleScrollEnd, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", handleScrollEnd);
      if (scrollDebounceRef.current) {
        window.clearTimeout(scrollDebounceRef.current);
      }
    };
  }, []);

  return (
    <section className={classes.container}>
      <img src={"/images/logo.png"} alt="Giddaa Logo" />

      <div className={classes.routesSection}>
        {headerNavItems.map((navItem, i) => {
          const isActive = activeSection === navItem.sectionId;

          const handleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            const section = document.getElementById(
              navItem?.sectionId as string
            );
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          };

          return (
            <a
              href={`#${navItem.sectionId}`}
              key={i}
              className={isActive ? classes.active : classes.inActive}
              onClick={handleClick}
            >
              <span>{navItem.title}</span>
              <span></span>
            </a>
          );
        })}
      </div>

      <div className={classes.hamburgerMenu} onClick={openSideNav}>
        <MenuIcon />
      </div>

      <div className={classes.sideNav} ref={sideNav}>
        <HeaderSideNav closeSideNav={closeSideNav} isHome />
      </div>
    </section>
  );
};

export default Header;
