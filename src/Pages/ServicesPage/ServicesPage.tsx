import classNames from "classnames";
import React from "react";
import { HeadlineImage } from "../../Assets/ServicesPage/HeadlineImage";
import { ImageBottom } from "../../Assets/ServicesPage/ImageBottom";
import { ImageTop } from "../../Assets/ServicesPage/ImageTop";

import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
  const StrongExpertise = [
    { name: "EduTech" },
    { name: "Project Management" },
    { name: "Classica Dating" },
    { name: "Fintech" },
    { name: "Logistics" },
    { name: "Artificial Intellegence" },
    { name: "MarkTech" },
    { name: "RedStartup Developmentis" },
    { name: "Investment" },
  ];

  const SaasSolutions = [
    { name: "Project Management Software" },
    { name: "Customer Relationship Management (CRM)", width: true},
    { name: "Enterprise Resource Planning (ERP)" },
    { name: "Content Management System (CMS)" },
    { name: "Sales CRM" },
    { name: "Marketing analytics" },
    { name: "BI SaaS" },
    { name: "AI Data Science" },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.darkBlock}>
        <div className={styles.container}>
          <div className={styles.headline}>
            <div className={styles.headlineDesc}>
              <div className={styles.headlineTitle}>our core services</div>
              <div className={styles.description}>
                <div className={styles.subTitle}>
                  Ongoing supervision service
                </div>
                <div className={styles.text}>
                  Search, Matching, Project Development
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.subTitle}>
                  Consulting on digital product development
                </div>
                <div className={styles.text}>
                  Documentation & User Stories development;
                </div>
                <div className={styles.text}>CTO as a service;</div>
                <div className={styles.text}>
                  Remote software development team;
                </div>
                <div className={styles.text}>
                  Backoffice/Dashboard/CMS/CRM development;
                </div>
                <div className={styles.text}>Strartup MVP Development;</div>
                <div className={styles.text}>
                  Cross-applications system development;
                </div>
                <div className={styles.text}>Custom integrations.</div>
              </div>
              <div className={styles.subTitle}>
                Strategic and affiliate marketing
              </div>
            </div>
            <div className={classNames(styles.headlineImage,styles.hideImage)}>
              <HeadlineImage />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whiteBlock}>
        <div className={styles.container}>
          <div className={styles.containerLists}>
            <div className={classNames(styles.containerList,styles.topContainerList)}>
              <div className={classNames(styles.listImage,styles.hideListImage)}>
                <ImageTop />
              </div>
              <div className={classNames(styles.cardList,styles.topCardList)}>
                <div className={styles.cardListTitle}>Strong Expertise in</div>
                <ul className={styles.list}>
                  {StrongExpertise.map(({ name }) => {
                    return <li className={styles.li} key={name}> {name} </li>;
                  })}
                </ul>
              </div>
            </div>
            <div className={classNames(styles.containerList,styles.bottomContainerList)}>
              <div className={styles.cardList}>
              <div className={styles.cardListTitle}>Saas Solutions</div>
                <ul className={styles.list}>
                  {SaasSolutions.map(({ name, width }) => {
                    return <li className={classNames(styles.li, {[styles.smallLi]: width}) } key={name}> {name} </li>;
                  })}
                </ul>
              </div>
              <div className={classNames(styles.listImage,styles.hideListImage)}>
                <ImageBottom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
