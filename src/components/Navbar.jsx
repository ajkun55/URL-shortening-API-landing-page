import { useState } from "react";
import styles from "./Navbar.module.css";
import Button from "./Button";

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <header className="header px-[5%] md:mx-auto md:w-11/12 md:max-w-[1110px] md:px-0">
      <nav className={`${styles.navbar}`}>
        <a href="#home" className={`${styles.logo}`}>
          <img src="/images/logo.svg" alt="" />
        </a>
        <ul
          className={`${styles.navMenu} ${isActive ? styles.active : ""} lg:ml-20`}
        >
          <li onClick={removeActive}>
            <a href="#home" className={`${styles.navLink}`}>
              Features
            </a>
          </li>
          <li onClick={removeActive}>
            <a href="#home" className={`${styles.navLink}`}>
              Pricing
            </a>
          </li>
          <li onClick={removeActive}>
            <a href="#home" className={`${styles.navLink}`}>
              Resources
            </a>
          </li>
          <div className="my-4 grid w-full grid-rows-2 border-t px-6 md:flex md:flex-row md:items-center md:gap-4 md:border-none">
            <li
              onClick={removeActive}
              className="!mx-auto w-min md:mx-0 md:max-w-[3rem]"
            >
              <a href="#home" className={`${styles.navLink} lg:ml-20`}>
                login
              </a>
            </li>
            <Button text={`Sign Up`} margin={false} />
          </div>
        </ul>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleActiveClass}
        >
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
