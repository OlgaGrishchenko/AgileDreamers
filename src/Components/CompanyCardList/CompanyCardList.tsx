import React, { FC, useState } from "react";
import { CompanyCardListType } from "../../Constants/@types";
import CompanyCard from "../CompanyCard";

import styles from "./CompanyCardList.module.css";

type CardsListProps = {
  cardsList: CompanyCardListType;
};

const CompanyCardList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList && cardsList.length > 0 ? (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {cardsList.map((card) => {
          return <CompanyCard card={card} key={card.id} />;
        })}
      </div>
    </div>
  ) : null;
};

export default CompanyCardList;
