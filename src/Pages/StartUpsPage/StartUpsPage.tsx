import React from "react";

import Button, { ButtonTypes } from "../../Components/Button";

import classNames from "classnames";

import styles from "./StartUpsPage.module.css";

const StartUpsPage = () => {
  const Team = [
    { name: "Project Manager" },
    { name: "CTO-as-a-service" },
    { name: "Front-end developers" },
    { name: "UX/UI designers" },
    { name: "Back-end developers" },
    { name: "AI developers" },
    { name: "Mobile developers" },
    { name: "QA" },
    { name: "Product Owners/Business Analysts", size: true },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.darkBlock}>
        <div className={styles.container}>
          <div className={styles.headline}>
            <div className={styles.about}>
              <div className={styles.text}>
                <div className={styles.title}>Startup Program</div>
                <div className={styles.containerDescription}>
                  <div className={styles.description}>
                    Agile Dreamers has created a unique AD Startup Program that
                    simply provides new startups with a dedicated development
                    team to set the easiest path to build an MVP with a
                    successful GO-TO-MARKET STRATEGY.
                  </div>
                  <div className={styles.description}>
                    We combine a team of ambitious professionals with a team
                    of ambitious junior developers, working together to deliver
                    the maximum possible results to the startup.
                  </div>
                </div>
              </div>
              <div>
                <Button
                  className={styles.button}
                  title={"Become a Startup Program"}
                  type={ButtonTypes.BigPrimary}
                  onClick={() => {}}
                />
              </div>
            </div>

            <div className={styles.fullTeam}>
              <div className={styles.team}>
                <div className={styles.teamTitle}>
                  Full team adopted to the existing needs may consist from
                </div>
                <div className={styles.teamStructure}>
                  {Team.map(({ name, size }) => {
                    return (
                      <span className={classNames(styles.area, {[styles.bigSize]: size})}>
                        {name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className={styles.teamDescription}>
                Excellent solution for creating a complex Digital Product.
                We go one step further and offer the ambition that sets us apart
                from other offers on the market.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.whiteBlock}>

          <div className={styles.stages}>
            <div className={styles.stage}>
              <div className={styles.stageTitle}>MVP STAGE</div>
              <div className={styles.stageDesk}>Junior developers will be provided as a free-of-charge part of service for MVP development — up to 20 developers and experts.</div>
            </div>
            <div className={styles.stage}>
            <div className={styles.stageTitle}>AFTER-LAUNCHED STAGE</div>
              <div className={styles.stageDesk}>A startup will have a right to receive a full team or a picked part of the team on outstaff model basis</div>
            </div>
            <div className={styles.stage}>
            <div className={styles.stageTitle}>GO-TO-MARKET</div>
              <div className={styles.stageDesk}>Strategy and tactics will be developed by the dedicated marketing experts and affiliate partners and part of the marketing team may become yours.</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StartUpsPage;
