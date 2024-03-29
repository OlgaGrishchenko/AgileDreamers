import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./CompanyCard.module.css";
import { CompanyCardType } from "../../Constants/@types";
import { BudgetIcon } from "../../Assets/CompanyCard/BudgetIcon";
import { PeoplesIcon } from "../../Assets/CompanyCard/PeoplesIcon";
import { ClockIcon } from "../../Assets/CompanyCard/ClockIcon";

import Button, { ButtonTypes } from "../Button";
import classNames from "classnames";
import {PathNames} from "../../Pages/Router/Router";


type CompanyCardProps = {
  card: CompanyCardType;
};

const CompanyCard: FC<CompanyCardProps> = ({ card }) => {
  const {
    id,
    company_name,
    short_description,
    full_description,
    minimum_project_budget,
    team_size,
    foundation_date,
    average_hourly_rate,
    location,
    logo,
  } = card;


  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={classNames(styles.title, styles.hideTitleTablet)}>
          {company_name}
        </div>
        <div className={styles.first}>
          <div className={styles.avatar}>
            <img src={`https://api.agiledreamers.com${logo}`} className={styles.avatar} alt={''}/>
          </div>
          <div className={styles.info}>
            <div>
              <div className={classNames(styles.data, styles.firstInfo)}>
                <div className={styles.data}>{location},</div>
                <div className={styles.data}>{foundation_date}</div>
              </div>
              <div className={classNames(styles.title, styles.hideTitle)}>
                {company_name}
              </div>
            </div>
            <div className={classNames(styles.data, styles.secondInfo)}>
              <div className={styles.containerAnswers}>
                <div className={styles.answers}>
                  <PeoplesIcon /> <span>{team_size}</span>
                </div>
                <div className={styles.answers}>
                  <BudgetIcon /> <span>{minimum_project_budget}</span>
                </div>
                <div className={styles.answers}>
                  <ClockIcon />{" "}
                  <div className={styles.timeBlock}>
                    {average_hourly_rate}
                    <div>per/h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text}>{short_description}</div>
      </div>

      <div className={styles.third}>
        <Button
          className={styles.button}
          title={"Open chat"}
          type={ButtonTypes.SmallPrimary}
          onClick={() => {}}
        />

        <Link  to={PathNames.CompanyPage}
               reloadDocument
               className={classNames(styles.link, styles.blackColor)}
               type={ButtonTypes.SmallSecondary}>{"More info"}
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard
