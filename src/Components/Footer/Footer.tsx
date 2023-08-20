import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classnames from "classnames";

import styles from "./Footer.module.css";
import { LogoIcon } from "../../Assets/Footer/LogoIcon";
import { LinkedinIcon } from "../../Assets/Footer/LinkedinIcon";
import { TelegramIcon } from "../../Assets/Footer/TelegramIcon";
import { GmailIcon } from "../../Assets/Footer/GmailIcon";
import { Logo } from "../../Assets/Footer/Logo";
import { PathNames } from "../../Pages/Router/Router";
import {LogoMobile} from "../../Assets/Footer/LogoMobile";

const Footer = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.logoMobile}><LogoMobile /></div>
      <div className={styles.logo}><Logo /></div>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.logoContainer}>
            <LogoIcon />
          </div>

          <div className={styles.topLinks}>
            <div className={styles.containerTopLinks}>
              <div className={styles.title}>Contacts</div>
              <div className={styles.text}>Tbilisi, Georgia</div>
              <div className={styles.icons}>
                <div className={styles.link}>
                <a href="https://www.linkedin.com/company/agiledreamers/" target="_blank"><LinkedinIcon /></a>
                </div>
                <div className={styles.link}>
                <a href="https://www.t.me/AgileDreamers" target="_blank"><TelegramIcon /></a>
                </div>
                <div className={styles.link}> 
                <a href="mailto:сontact@agiledreamers.com" target="_blank"><GmailIcon /></a>
                </div>
              </div>
            </div>

            <div className={styles.containerTopLinks}>
              <div className={styles.title}>Sitemap</div>
              <div className={classnames(styles.text, styles.links)}>
                <div className={styles.link}>SaaS Service Providers</div>
                <NavLink to={PathNames.Developers} className={styles.link}>Outsourcing Software Teams</NavLink>
                <NavLink to={PathNames.Services} className={styles.link}>Outstaffing Service</NavLink>
                <NavLink to={PathNames.Developers} className={styles.link}>Software Developers</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className={classnames(styles.text, styles.containerBottom)}>
          <div>© 2023 All rights reserved</div>
          <div className={styles.bottomLinks}>
            <div className={styles.link}>Privacy policy</div>
            <div className={styles.link}>Terms and conditions</div>
            <div className={styles.link}>Media Kit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
