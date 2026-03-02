// import styles from './Navbar.module.css';

// const Navbar = () => {
//     return (
//         <div className={styles.navbar}>
//             <div className={styles.logo}>
//             </div>
//             <div className={styles.right}>
//                 <div className={styles.title}>
//                     <h2>NORTH EAST STUDENTS' FORUM</h2>
//                     <p>Indian Institute of Technology Kharagpur</p>
//                 </div>
//                 <div className={styles.links}>
//                     <p>Home</p>
//                     <p>About Us</p>
//                     <p>Team</p>
//                     <p>Events</p>
//                     <p>Alumni</p>
//                     <p>Contact Us</p>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useRef, useEffect } from "react";

const navLinks = {
  desktop: [
    { name: "Home", link: "/home" },
    // {name: "About Us", link: "/about-us"},
    { name: "Team", link: "/teams", hasDropdown: true },
    { name: "Events", link: "/events" },
    { name: "Partnerships", link: "/partnerships" },
  ],
  mobile: [
    { name: "Home", link: "/home" },
    // {name: "About Us", link: "/about-us"},
    { name: "Team", link: "/teams", hasDropdown: true },
    { name: "Events", link: "/events" },
    { name: "Partnerships", link: "/partnerships" },
  ],
};

// Define available years/tenures
const AVAILABLE_YEARS = [
  { label: "2025-26", value: "2025-26" },
  { label: "2024-25", value: "2024-25" },
  { label: "2023-24", value: "2023-24" },
  { label: "2022-23", value: "2022-23" },
  // { label: "2021-22", value: "2021-22" },
  // Add more years as needed
];

const CURRENT_TENURE = "2025-26"; // Set your current tenure

const Navbar = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [showMobileTeamDropdown, setShowMobileTeamDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowTeamDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleYearSelect = (year) => {
    navigate(`/teams?year=${year}`);
    setShowTeamDropdown(false);
    setShowMenuItems(false);
    setShowMobileTeamDropdown(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}></div>
        <div className={styles.title}>
          <h2>NORTH-EAST STUDENTS' FORUM</h2>
          <p>Indian Institute of Technology Kharagpur</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.links}>
          {navLinks.desktop.map((link, index) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={index}
                  className={styles.dropdownContainer}
                  ref={dropdownRef}
                >
                  <div
                    className={styles.link}
                    onClick={() => setShowTeamDropdown(!showTeamDropdown)}
                  >
                    <p>{link.name} ▾</p>
                  </div>
                  {showTeamDropdown && (
                    <div className={styles.dropdown}>
                      {AVAILABLE_YEARS.map((year) => (
                        <div
                          key={year.value}
                          className={styles.dropdownItem}
                          onClick={() => handleYearSelect(year.value)}
                        >
                          {year.label}
                          {/* {year.value === CURRENT_TENURE && (
                            <span className={styles.currentBadge}>Current</span>
                          )} */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <div key={index}>
                <Link className={styles.link} to={link.link}>
                  <p>{link.name}</p>
                </Link>
              </div>
            );
          })}
          {/* <div>
            <Link className={styles.link} to="/home">
              <p>Home</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/#about-us">
              <p>About Us</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/teams">
              <p>Team</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/events">
              <p>Events</p>
            </Link>
          </div> */}
          {/* <div>
            <Link className={styles.link} to="/Alumni">
              <p>Alumni</p>
            </Link>
          </div> */}
          {/* <div>
            <Link className={styles.link} to="/Articles">
              <p>Articles</p>
            </Link>
          </div> */}
          <div></div>
        </div>
        <div className={styles.hamburgerMenu}>
          <a href="#" onClick={() => setShowMenuItems(!showMenuItems)}>
            <GiHamburgerMenu />
          </a>
        </div>
        <div
          className={`${styles.mobileMenu} ${showMenuItems && styles.opened}`}
        >
          {navLinks.mobile.map((link, index) => {
            if (link.hasDropdown) {
              return (
                <div key={index} className={styles.mobileDropdownContainer}>
                  <div
                    className={styles.mobilelinks}
                    onClick={() =>
                      setShowMobileTeamDropdown(!showMobileTeamDropdown)
                    }
                  >
                    {link.name} {showMobileTeamDropdown ? "▴" : "▾"}
                  </div>
                  {showMobileTeamDropdown && (
                    <div className={styles.mobileDropdownItems}>
                      {AVAILABLE_YEARS.map((year) => (
                        <div
                          key={year.value}
                          className={styles.mobileDropdownItem}
                          onClick={() => handleYearSelect(year.value)}
                        >
                          {year.label}
                          {/* {year.value === CURRENT_TENURE && " (Current)"} */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={index}
                className={styles.mobilelinks}
                onClick={() => setShowMenuItems(false)}
                to={link.link}
              >
                {link.name}
              </Link>
            );
          })}
          {/* <Link className={styles.mobilelinks} onClick={()=>setShowMenuItems(false)} to="/">Home</Link>
          <Link className={styles.mobilelinks} onClick={()=>setShowMenuItems(false)} to="/AboutUs">About Us</Link>
          <Link className={styles.mobilelinks} onClick={()=>setShowMenuItems(false)} to="/Teams">Team</Link>
          <Link className={styles.mobilelinks} onClick={()=>setShowMenuItems(false)} to="/Events">Events</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
