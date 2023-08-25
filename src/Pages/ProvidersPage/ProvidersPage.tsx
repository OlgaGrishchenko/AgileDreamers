import classNames from "classnames";
import React from "react";
import { ProvidersImgHeadline } from "../../Assets/ProvidersPage/ProvidersImgHeadline";
import CompanyCardList from "../../Components/CompanyCardList";
import SearchLine from "../../Components/SearchLine";

import styles from "./ProvidersPage.module.css";

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
  softwareStack: [],
  avatar:
    "https://media.licdn.com/dms/image/D4D0BAQEG_ww51jlBbw/company-logo_200_200/0/1685353409956?e=1699488000&v=beta&t=65JSbtc4ITWf1yQtdYWDf6XFN1lFU3OYMy9DhsytI30",
  fullCompanyDescription:
    "Kos and Art used to work in several digital agencies since 2009. Around 2015 they decided to launch their own company that would combine the knowledge of the digital world, design, and desires to be really customer-centric both with client service and the projects.With the support of our third partner Dmitry, who used to be a partner in a well-known law firm, they founded Artkai. The team started as a UX-focused design boutique.",
};

const MOCK_CARD_LIST = [MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD];

const ProvidersPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.darkBlock}>
        <div className={styles.container}>
          <div className={styles.headline}>
            <div className={styles.headlineDesc}>
              <div className={styles.headlineTitle}>
                SELECT YOUR DEVELOPMENT TEAM
              </div>
              <ul className={styles.headlineText}>
                <li className={styles.li}>Filter to find several software development or SaaS vendor</li>
                <li className={styles.li}>Talk directly to the C-Level to discuss your project</li>
                <li className={styles.li}>Get the most attractive proposals from different vendors</li>
                <li className={styles.li}>Compare to choose the most dedicated service</li>
                <li className={styles.smallLi}>Launch your software development PROJECT on Agile Dreamers Platform</li>
                <li className={styles.li}>Request Client Supervision service for FREE!</li>
              </ul>
            </div>

            <div className={classNames(styles.headlineImage,styles.hideImage)}>
              <ProvidersImgHeadline />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <SearchLine />
        <CompanyCardList cardsList={MOCK_CARD_LIST} />
      </div>
    </div>
  );
};

export default ProvidersPage;
