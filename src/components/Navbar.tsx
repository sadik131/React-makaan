import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaAngleDownSolid } from "react-icons/lia";
import { desktopLinks, mobileLinks } from "../consts";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [openedSubMenuIndex, setOpenedSubMenuIndex] = useState(null);
  const [isScroll, setIsScroll] = useState(false)


  const toggleSubMenu = (index) => {
    setOpenedSubMenuIndex(openedSubMenuIndex === index ? null : index);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  // handle scroll
  function handleScroll() {
    if (window.scrollY > 75) {
      return setIsScroll(true)
    }
    setIsScroll(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // clear event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])


  return (
    <nav className={`${isScroll ? "fixed top-0" : "absolute"} mx-auto w-full z-50`}>
      <div className={`container flex justify-between items-center ${isScroll ? "lg:mt-0 lg:w-full" : "lg:mt-11 lg:w-[93%]"} h-[75px] shadow-custom bg-white transition-transform transform`}>
        {/* Logo */}
        <div className="flex items-center">
          <div className="border mr-2 p-2 border-dashed border-primary rounded-full">
            <img className="h-[30px] w-[30px]" src={"/img/logo.png"} alt="Logo" />
          </div>
          <h1 className="lg:text-[40px] text-[30px] font-inter font-bold text-primary">
            Makaan
          </h1>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden border py-1 px-4 rounded-md border-[#0000001a] text-[#0000008c] text-2xl"
          onClick={toggleMobileNav}
        >
          <GiHamburgerMenu />
        </button>

        {/* Desktop Links */}
        <ul
          id="nav-links"
          className="hidden lg:flex justify-between text-[15px] font-medium text-accent items-center font-hebbo"
        >
          {desktopLinks.map((link, index) => (
            <li key={index} className={`ml-[30px] ${link.subMenu ? "group" : ""} flex items-center gap-1 cursor-pointer py-[25px] relative`}>
              <a href={link.path}>{link.name}</a>
              {link.subMenu && (
                <>
                  <LiaAngleDownSolid />
                  <ul className="absolute hidden bg-white group-hover:block top-[72px] w-40 border py-2 whitespace-nowrap">
                    {link.subMenu.map((subLink, subIndex) => (
                      <li key={subIndex} className="py-1 hover:bg-slate-100 cursor-pointer px-4">
                        <a href={subLink.path}>{subLink.name}</a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
          <button className="px-4 ml-[30px] bg-primary text-white rounded-md py-[6px]">
            Add Property
          </button>
        </ul>
      </div>

      {/* Mobile Links */}
      {isMobileNavOpen && mobileLinks.map((link, index) => (
        <li key={index} className="lg:hidden bg-white text-accent py-[10px] text-[15px] font-medium px-6 cursor-pointer w-full relative group font-hebbo list-none">
          <div className="flex items-center w-full" onClick={() => toggleSubMenu(index)}>
            <span>{link.name}</span>
            {link.subMenu && (
              <span
                className={`ml-[5px] transition-transform transform ${openedSubMenuIndex === index ? "rotate-180" : ""
                  }`}
              >
                <FaAngleDown />
              </span>
            )}
          </div>
          {link.subMenu && (
            <ul
              className={`border border-[#00000026] py-2 mt-2 space-y-1 ${openedSubMenuIndex === index ? "block" : "hidden"
                }`}
            >
              {link.subMenu.map((subLink, subIndex) => (
                <li key={subIndex} className="py-1 pl-4 cursor-pointer hover:bg-slate-100 list-none">
                  <a href={subLink.path}>{subLink.name}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </nav>
  );
};

export default Navbar;
