import React, { useState, useEffect } from "react";

import { Outlet, useParams } from "react-router-dom";
import Benefits from "../../Components/Benefits";
import CompanyCardList from "../../Components/CompanyCardList";
import Headline from "../../Components/Headline";
import SearchLine from "../../Components/SearchLine";
import ToolsWeUse from "../../Components/ToolsWeUse";

import styles from "./Home.module.css";

const MOCK_CARD = {
  id: 1,
  companyName: "Agile Dreamers",
  companyDescription:
    "Fintech professional with decades of experience in the capital and financial markets",
  budget: 10000,
  teamSize: 5,
  foundationDate: 1991,
  averageHourlyRate: "150",
  location: "Melbourne",
  fullCompanyDescription: "",
  softwareStack: [],
  avatar:
    "https://media.licdn.com/dms/image/D4D0BAQEG_ww51jlBbw/company-logo_200_200/0/1685353409956?e=1699488000&v=beta&t=65JSbtc4ITWf1yQtdYWDf6XFN1lFU3OYMy9DhsytI30",
};

const MOCK_CARD_LIST = [
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
];

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Headline />
          <SearchLine />
          <CompanyCardList cardsList={MOCK_CARD_LIST} />
        </div>
        <Benefits />
        <ToolsWeUse />
      </div>
    </>
  );
};

export default Home;
