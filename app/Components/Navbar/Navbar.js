"use client";

import "./style.css";
import Logo from "../Logo/Logo";
import { navLeftLinks, navRightLinks } from "./links";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  return (
    <div className="navbar mainPadding">
      <div className="rightSection">
        <Logo />
        <ul>
          {navRightLinks?.length > 0 &&
            navRightLinks.map((item, index) => {
              return (
                <li key={index}>
                  {item.title} {item.afterIcon}
                </li>
              );
            })}
        </ul>
      </div>
      <DesctopView />
      <MobileView />
    </div>
  );
}

function DesctopView() {
  return (
    <div className="leftSection desctopView">
      <ul>
        {navLeftLinks?.length > 0 &&
          navLeftLinks.map((item, index) => {
            return (
              <li key={index}>
                {item.beforeIcon} {item.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

// function MobileView() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const combinedLinks = [...navLeftLinks, ...navRightLinks].filter(
//     (item) => !item.title.includes("بحث...")
//   );

//   const handleOverlayClick = (e) => {
//     if (e.target.classList.contains("mobileMenuOverlay")) {
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <div className="leftSection mobileView">
//       <IoMenu size={24} onClick={toggleMenu} color="var(--backgroundColor)" />

//       {menuOpen && (
//         <div className="mobileMenuOverlay" onClick={handleOverlayClick}>
//           <div className="mobileMenu">
//             <ul>
//               {combinedLinks.length > 0 &&
//                 combinedLinks.map((item, index) => (
//                   <li key={index}>
//                     {item.beforeIcon} {item.title} {item.afterIcon}
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

function MobileView() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const combinedLinks = [...navLeftLinks, ...navRightLinks].filter(
    (item) => !item.title.includes("بحث...")
  );

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("mobileMenuOverlay")) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="leftSection mobileView">
      <IoMenu size={24} onClick={toggleMenu} color="var(--backgroundColor)" />

      <div
        className={`mobileMenuOverlay ${menuOpen ? "open" : "closed"}`}
        onClick={handleOverlayClick}
      >
        <div className="mobileMenu">
          <ul>
            {combinedLinks.length > 0 &&
              combinedLinks.map((item, index) => (
                <li key={index}>
                  <span>{item.mobileIcon}</span> {item.title} {item.afterIcon}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
