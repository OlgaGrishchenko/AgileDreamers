import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./CompanyCard.module.css";
import { CompanyCardType } from "../../Constants/@types";
import { BudgetIcon } from "../../Assets/CompanyCard/BudgetIcon";
import { PeoplesIcon } from "../../Assets/CompanyCard/PeoplesIcon";
import { ClockIcon } from "../../Assets/CompanyCard/ClockIcon";

import Button, { ButtonTypes } from "../Button";
import classNames from "classnames";


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


  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={classNames(styles.title, styles.hideTitleTablet)}>
          {companyName}
        </div>
        <div className={styles.first}>
          <div className={styles.avatar}>
            <img src={avatar} className={styles.avatar} alt={''}/>
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

        <Link  to={'/company-page'}
               reloadDocument
               className={classNames(styles.link, styles.blackColor)}
               type={ButtonTypes.SmallSecondary}>{"More info"}
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard
