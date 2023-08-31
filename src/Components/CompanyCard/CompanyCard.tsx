import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./CompanyCard.module.css";
import { CompanyCardType } from "../../Constants/@types";
import { BudgetIcon } from "../../Assets/CompanyCard/BudgetIcon";
import { PeoplesIcon } from "../../Assets/CompanyCard/PeoplesIcon";
import { ClockIcon } from "../../Assets/CompanyCard/ClockIcon";

import Button, { ButtonTypes } from "../Button";
import { PathNames } from "../../Pages/Router/Router";
import classNames from "classnames";
import ProvidersPage from "../../Pages/ProvidersPage";

type CompanyCardProps = {
  card: CompanyCardType;
};

const CompanyCard: FC<CompanyCardProps> = ({ card }) => {
  const {
    id,
    companyName,
    companyDescription,
    fullCompanyDescription,
    budget,
    teamSize,
    foundationDate,
    averageHourlyRate,
    location,
    avatar,
  } = card;

  const navigate = useNavigate();
  const onMoreClick = () => {
    navigate(`/company-page`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={classNames(styles.title, styles.hideTitleTablet)}>
          {companyName}
        </div>
        <div className={styles.first}>
          <div className={styles.avatar}>
            <img src={avatar} className={styles.avatar} />
          </div>
          <div className={styles.info}>
            <div>
              <div className={classNames(styles.data, styles.firstInfo)}>
                <div className={styles.data}>{location},</div>
                <div className={styles.data}>{foundationDate}</div>
              </div>
              <div className={classNames(styles.title, styles.hideTitle)}>
                {companyName}
              </div>
            </div>
            <div className={classNames(styles.data, styles.secondInfo)}>
              <div className={styles.containerAnswers}>
                <div className={styles.answers}>
                  <PeoplesIcon /> <span>{teamSize}</span>
                </div>
                <div className={styles.answers}>
                  <BudgetIcon /> <span>{budget}</span>
                </div>
                <div className={styles.answers}>
                  <ClockIcon />{" "}
                  <div className={styles.timeBlock}>
                    {averageHourlyRate}
                    <div>per/h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text}>{companyDescription}</div>
      </div>

      <div className={styles.third}>
        <Button
          className={styles.button}
          title={"Open chat"}
          type={ButtonTypes.SmallPrimary}
          onClick={() => {}}
        />

        <Button
          className={classNames(styles.button, styles.blackColor)}
          title={"More info"}
          type={ButtonTypes.SmallSecondary}
          onClick={onMoreClick} 
        />
      </div>
    </div>
  );
};

export default CompanyCard;
