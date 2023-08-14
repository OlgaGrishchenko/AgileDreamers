import React from "react";

import Button, { ButtonTypes } from "../../Components/Button";

import classNames from "classnames";

import styles from "./StartUpsPage.module.css";
import { Line } from "../../Assets/StartUpsPage/Stage/Line";
import { Leaf } from "../../Assets/StartUpsPage/Stage/Leaf";
import { StepsEllipse } from "../../Assets/StartUpsPage/StepsEllipse";
import { FutureOne } from "../../Assets/StartUpsPage/Future/FutureOne";
import { FutureTwo } from "../../Assets/StartUpsPage/Future/FutureTwo";
import { FutureThree } from "../../Assets/StartUpsPage/Future/FutureThree";
import { FutureTwoLine } from "../../Assets/StartUpsPage/Future/FutureTwoLine";

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
                      <span
                        className={classNames(styles.area, {
                          [styles.bigSize]: size,
                        })}
                      >
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
              <div className={styles.stageDesk}>
                Junior developers will be provided as a free-of-charge part
                of service for MVP development — up to 20 developers and
                experts.
              </div>
              <div className={styles.stageSVG}>
                <Line />
              </div>
            </div>
            <div className={styles.stage}>
              <div className={styles.stageTitle}>AFTER-LAUNCHED STAGE</div>
              <div className={styles.stageDesk}>
                A startup will have a right to receive a full team or a picked
                part of the team on outstaff model basis
              </div>
              <div className={styles.stageSVG}>
                <Leaf />
              </div>
            </div>
            <div className={styles.stage}>
              <div className={styles.stageTitle}>GO-TO-MARKET</div>
              <div className={styles.stageDesk}>
                Strategy and tactics will be developed by the dedicated
                marketing experts and affiliate partners and part of the
                marketing team may become yours.
              </div>
              <div className={styles.stageSVG}>
                <Line />
              </div>
            </div>
          </div>

          <div className={styles.containerSteps}>
            <div className={styles.containerTitle}>
              What do you need so we can start?
            </div>
            <div className={styles.containerStepsGroup}>
              <div className={styles.stepsGroup}>
                <div className={styles.step}>
                  <span className={styles.stepsEllipse}>
                    <StepsEllipse />
                  </span>
                  You need to prepare all the necessary resources for the
                  website
                </div>
                <div className={styles.step}>
                  <span className={styles.stepsEllipse}>
                    <StepsEllipse />
                  </span>
                  Business requirements and one person to be in charge from your
                  side
                </div>
                <div className={styles.step}>
                  <span className={styles.stepsEllipse}>
                    <StepsEllipse />
                  </span>
                  Your early requirements will allow to prepare a for discovery
                  stage that will allow our product owners to create Product
                  Requirements Spefications and work on user stories
                </div>
              </div>
              <div className={styles.stepsComment}>
                If you don’t have specifications — don’t worry, our product
                manager will help you prepare before getting any development
              </div>
            </div>
          </div>

          <div className={styles.containerFutures}>
            <div className={styles.containerTitle}>Your Future</div>
            <div className={styles.futuresCards}>
              <div className={styles.card}>
                <div className={styles.futureOne}>
                  <FutureOne />
                </div>
                <div className={styles.futureOneText}>
                  <div className={styles.futureTitle}>
                    UNIQUE VALUABLE OPPORTUNITY{" "}
                  </div>
                  <div className={styles.futureDesc}>
                    Agile Dreamers provides startups with a unique valuable
                    opportunity to launch a new product and expand by getting
                    an MVP in the shortest period of time while investing in the
                    success of the talents of the future that will become
                    of your team.
                  </div>
                </div>
              </div>

              <div className={classNames(styles.card, styles.whiteCard)}>
                <div className={styles.futureTwo}>
                  <FutureTwo />
                </div>
                <div className={styles.futureTwoLine}>
                  <FutureTwoLine />
                </div>
                <div className={styles.futureTwoText}>
                  <div className={classNames(styles.futureDesc, styles.futureDescDark)}>
                  We help juniors developers to gain team development and
                  commercial project experience by leading our teams with
                  mentors and senior developers. We oversee their work to ensure
                  you will be thrilled with your new MVP and through ongoing
                  further stages.
                </div>
                <div className={classNames(styles.futureTitle, styles.futureTitleDark)}>
                  TEAM DEVELOPMENT AND COMMERCIAL PROJECT EXPERIENCE
                </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.futureThree}>
                  <FutureThree />
                </div>
                <div className={styles.futureThreeText}>
                <div className={styles.futureTitle}>
                  MINIMAL EFFORTS TO BRING YOUR VISION TO LIFE
                </div>
                <div className={styles.futureDesc}>
                  Our experienced teams require minimal efforts to bring your
                  vision to life. It guarantees modern professional architecture
                  and user friendly design.
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartUpsPage;
