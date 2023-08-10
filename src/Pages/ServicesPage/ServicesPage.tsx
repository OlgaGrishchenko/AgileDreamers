import classNames from "classnames";
import React from "react";
import { ArrowDown } from "../../Assets/ServicesPage/ArrowDown";
import { Eight } from "../../Assets/ServicesPage/Eight";
import { Five } from "../../Assets/ServicesPage/Five";
import { Four } from "../../Assets/ServicesPage/Four";
import { One } from "../../Assets/ServicesPage/One";
import { Seven } from "../../Assets/ServicesPage/Seven";
import { Six } from "../../Assets/ServicesPage/Six";
import { Three } from "../../Assets/ServicesPage/Three";
import { Two } from "../../Assets/ServicesPage/Two";

import styles from "./ServicesPage.module.css";

const StrongExpertise = [
  { name: "EduTech" },
  { name: "Project Management" },
  { name: "Classica Dating" },
  { name: "Fintech" },
  { name: "Logistics" },
  { name: "Artificial Intellegence" },
  { name: "MarkTech" },
  { name: "Startup Development" },
  { name: "Supply Chain" },
  { name: "Investment" },
  { name: "Artificial Intellegence" },
  { name: "MarkTech" },
];

const saasSolutions = [
  { icon: <One />, name: "Project Management Software" },
  { icon: <Two />, name: "Customer Relationship Management (CRM)" },
  { icon: <Three />, name: "Enterprise Resource Planning (ERP)" },
  { icon: <Four />, name: "Content Management System (CMS)" },
  { icon: <Five />, name: "Sales CRM"},
  { icon: <Six />, name: "Marketing analytics"},
  { icon: <Seven />, name: "BI SaaS"},
  { icon: <Eight />, name: "AI Data Science"},
];

const ServicesPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.whiteBlock}>
          <div className={styles.title}>Our core Services</div>
          <div className={styles.cardsBlock}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                Ongoing supervision Service
              </div>
              <div className={styles.description}>
                <li className={styles.cardDescription}>Search</li>
                <li className={styles.cardDescription}>Matching</li>
                <li className={styles.cardDescription}>Project development</li>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                Consulting on digital product development
              </div>
              <div className={styles.description}>
                <li className={styles.cardDescription}>
                  Documentation & user stories development
                </li>
                <li className={styles.cardDescription}>CTO as a service</li>
                <li className={styles.cardDescription}>
                  Remote software development team
                </li>
              </div>
              <div className={styles.cardArrow}>
                <ArrowDown />
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                Strategic and affiliate marketing
              </div>
              <div className={styles.description}>
                <li className={styles.cardDescription}>
                  Select the right affiliates
                </li>
                <li className={styles.cardDescription}>
                  Optimize your platforms
                </li>
                <li className={styles.cardDescription}>
                  Diversify your affiliate program
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.whiteBlock}>
          <div className={styles.title}>Strong Expertise in</div>
          <div className={styles.areas}>
            <span className={styles.areaBlue}>
              Areas <ArrowDown/>
            </span>
            {StrongExpertise.map(({ name }) => {
              return <span className={styles.area}> {name} </span>;
            })}
          </div>
        </div>
      </div>
      <div className={styles.darkBlock}>
        <div className={styles.block}>
          <div className={classNames(styles.title, styles.darkTitle)}>
            SaaS Solutions
          </div>
          <div className={styles.containerSolutions}>
            {saasSolutions.map(({ icon, name }) => {
              return (
                <div className={styles.solutions}>
                  <span className={styles.solutionsIcon}>{icon}</span>{" "}
                  <span className={styles.solutionsName}>{name}</span>{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
