import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowReturn } from "../../Assets/CompanyPage/ArrowReturn";
import Button, { ButtonTypes } from "../../Components/Button";
import { PathNames } from "../../Pages/Router/Router";

import styles from "./CompanyPage.module.css";
import { ArrowIcon } from "../../Assets/ContactBlock/ArrowIcon";
import classNames from "classnames";
import { PeoplesIcon } from "../../Assets/CompanyCard/PeoplesIcon";
import { BudgetIcon } from "../../Assets/CompanyCard/BudgetIcon";
import { ClockIcon } from "../../Assets/CompanyCard/ClockIcon";

const MOCK_CARD = {
  id: 1,
  companyName: "Artkai.ai",
  companyDescription:
    "Artkai is a Customer-centric digital product innovation. We help entrepreneurs, innovators, industry disruptors and established businesses shape and launch digital products using a human-centered and research-based approach (certified by NN/g)",
  budget: 8000,
  teamSize: 100,
  foundationDate: 2015,
  averageHourlyRate: "40-75",
  location: "Kyiv, Ukraine",
  fullCompanyDescription:
    "Kos and Art used to work in several digital agencies since 2009. Around 2015 they decided to launch their own company that would combine the knowledge of the digital world, design, and desires to be really customer-centric both with client service and the projects.With the support of our third partner Dmitry, who used to be a partner in a well-known law firm, they founded Artkai. The team started as a UX-focused design boutique.",
  softwareStack: [
    { name: "CI/CD - Github" },
    { name: "AWS" },
    { name: "Angular" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Swagger" },
    { name: "Koa 2" },
    { name: "Redis" },
    { name: "React Native" },
    { name: "vue.js" },
    { name: "Kubernetes" },
    { name: "Chai" },
    
    
    
    { name: "Docker" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: ".NET" },
    { name: "MS Azure services" },
  ],
  avatar:
    "https://media.licdn.com/dms/image/D4D0BAQEG_ww51jlBbw/company-logo_200_200/0/1685353409956?e=1699488000&v=beta&t=65JSbtc4ITWf1yQtdYWDf6XFN1lFU3OYMy9DhsytI30",
};

const CompanyPage = () => {
  const navigate = useNavigate();
  const onProvidersClick = () => {
    navigate(PathNames.Providers);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerButton}>
        <Button
          className={styles.button}
          title={
            <div className={styles.buttonName}>
              <ArrowReturn /> Back to providers
            </div>
          }
          type={ButtonTypes.SmallSecondary}
          onClick={onProvidersClick}
        />
      </div>

      <div className={classNames(styles.containerInfo, styles.containerTop)}>
        <div className={styles.card}>
          <div className={styles.cardAnswers}>
            <div>
              <img src={MOCK_CARD.avatar} className={styles.avatar} alt='avatar' />
            </div>

            <div>
              <div className={classNames(styles.data, styles.location)}>
                <div>{MOCK_CARD.location},</div>
                <div>{MOCK_CARD.foundationDate}</div>
              </div>
              <div className={styles.title}>{MOCK_CARD.companyName}</div>
              <div className={styles.data}>
                <div className={styles.answers}>
                  <PeoplesIcon /> <span>{MOCK_CARD.teamSize}</span>
                </div>
                <div className={styles.answers}>
                  <BudgetIcon /> <span>{MOCK_CARD.budget}</span>
                </div>
                <div className={styles.answers}>
                  <ClockIcon /> <span>{MOCK_CARD.averageHourlyRate} per/h</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.description}>
            {MOCK_CARD.companyDescription}
          </div>
        </div>

        <div className={styles.personalInfo}>
          <div className={styles.personalAvatar}></div>
          <div>
            <div className={styles.personalJob}>Program Manager</div>
            <div className={styles.subtitle}>Patrick Renteria</div>
          </div>
          <div>
            <Button
              title={<div className={styles.buttonName}>Open chat</div>}
              type={ButtonTypes.SmallPrimary}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>





      <div className={styles.containerInfo}>
        <div className={styles.desc}>
          <div className={styles.title}>The story behind</div>
          <div className={styles.description}>
            {MOCK_CARD.fullCompanyDescription}
          </div>
        </div>

        <div className={styles.containerAreas}>
        <div className={styles.subtitle}>Company specializes in</div>
        <div className={styles.areas}>
          {MOCK_CARD.softwareStack.map( ( {name}) => {
            return (
              <span className={styles.area}> {name} </span>
            )
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
