import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import "./navbar.css";

const navItems = [
  {
    id: 0,
    displayName: "Me",
    sectionId: "home",
  },
  {
    id: 1,
    displayName: "Skills",
    sectionId: "skills",
  },
  {
    id: 2,
    displayName: "Projects",
    sectionId: "works",
  },
  {
    id: 3,
    displayName: "Experience",
    sectionId: "resume",
  },
  {
    id: 4,
    displayName: "Contact",
    sectionId: "contact",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNav = (sectionId) => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }

    setActiveIndex((prevIndex) => (prevIndex === sectionId ? null : sectionId));

    // Scroll to the section
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Dependency array is empty since we only want to run this effect once on mount

  return (
    <div id="navbar" className={`navbar ${scrollPosition > 0 ? "scrolled" : "transparent"}`}>
      <nav className="navbar-container">
        <div className="logo">
          <Link onClick={() => window.scrollTo(0, 0)} to="/" className="logo-text">
            Portfolio
          </Link>
        </div>
        <div className="nav-items">
          {windowWidth <= 768 && (
            <button
              onClick={() => toggleNav(isOpen ? null : "menu")}
              className="menu-icon"
              style={{ zIndex: 999 }}
            >
              {isOpen ? <RxCross2 size={25} /> : <HiMenu size={25} />}
            </button>
          )}

          <ul className={`nav-list ${isOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleNav(item.sectionId);
                  }}
                  className={`nav-link ${
                    item.sectionId === activeIndex ? "active" : ""
                  }`}
                >
                  {item.displayName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
