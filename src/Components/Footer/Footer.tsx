import React from "react";
import classnames from "classnames";

import styles from "./Footer.module.css";
import { LogoIcon } from "../../Assets/Footer/LogoIcon";
import { LinkedinIcon } from "../../Assets/Footer/LinkedinIcon";
import { TelegramIcon } from "../../Assets/Footer/TelegramIcon";
import { GmailIcon } from "../../Assets/Footer/GmailIcon";
import { Logo } from "../../Assets/Footer/Logo";

const Footer = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.logo}><Logo /></div>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div>
            <LogoIcon />
          </div>

          <div className={styles.topLinks}>
            <div className={styles.containerTopLinks}>
              <div className={styles.title}>Contacts</div>
              <div className={styles.text}>Tbilisi, Georgia</div>
              <div className={styles.icons}>
                <div className={styles.link}>
                  <LinkedinIcon />
                </div>
                <div className={styles.link}>
                  <TelegramIcon />
                </div>
                <div className={styles.link}>
                  <GmailIcon />
                </div>
              </div>
            </div>

            <div className={styles.containerTopLinks}>
              <div className={styles.title}>Sitemap</div>
              <div className={classnames(styles.text, styles.links)}>
                <div className={styles.link}>SaaS Service Providers</div>
                <div className={styles.link}>Outsourcing Software Teams</div>
                <div className={styles.link}>Outstaffing Service</div>
                <div className={styles.link}>Software Developers</div>
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
