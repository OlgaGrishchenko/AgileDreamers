import React, {useState} from "react";
import { LogoIconHeader } from "../../Assets/Logo/LogoIconHeader";
import { NavLink, useLocation } from "react-router-dom";
import { PathNames } from '../../Pages/Router/Router';
import classNames from "classnames";
import styles from "./Header.module.css";
import Button, { ButtonTypes } from "../Button";
import Ukraine from "../Ukraine";
import {BurgerIcon} from "../../Assets/Header/BurgerIcon";
import {CloseBurgerIcon} from "../../Assets/Header/CloseBurgerIcon";
import MenuMobile from "./MenuMobile";

export const CATEGORIES = [
    { name: "Providers", link: "/providers" },
    { name: "For StartUps", link: "/startups" },
    { name: "Services", link: "/services" },
    { name: "Developers", link: "/developers" },
    { name: "About Us", link: "/about" },
];

const Header = () => {
  const { pathname } = useLocation();

  const [isOpened,setIsOpened]=useState(false)

  const onBurgerClick=()=>{
    setIsOpened(!isOpened)
  }


  return (
    <div className={classNames(styles.wrap,{[styles.openMenu]:isOpened})}>
        <MenuMobile isOpened={isOpened} pathname={pathname}/>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
        <NavLink to={PathNames.Home}> <LogoIconHeader /> </NavLink>
        </div>
        <div className={styles.logoMobile}>  <Ukraine /></div>
        <div className={styles.burger} onClick={onBurgerClick}>{isOpened ? <CloseBurgerIcon/>:<BurgerIcon/> } </div>
        <div className={classNames(styles.containerSidebar,styles.hideSidebar)}>
          {CATEGORIES.map(({ link, name }) => {
            return (
              <NavLink
                key={link}
                to={link}
                className={classNames(styles.categories, {
                  [styles.activeСategories]: pathname === link,
                })}
              >
                {name}
              </NavLink>
            );
          })}
        </div>

        <div className={classNames(styles.containerButtons,styles.hideBtn)}>
          <Button
            className={styles.button}
            title={"Sign In"}
            type={ButtonTypes.BigPrimary}
            onClick={() => {}}
            tablet={true}
          />
          <Button
            className={styles.button}
            title={"Sign up"}
            type={ButtonTypes.BigSecondary}
            onClick={() => {}}
            tablet={true}
            tabletSignUp={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
