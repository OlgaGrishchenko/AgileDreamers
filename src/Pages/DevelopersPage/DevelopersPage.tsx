import React from "react";
import { HeadlineImageDevelopers } from "../../Assets/DevelopersPage/HeadlineImageDevelopers";
import Button, { ButtonTypes } from "../../Components/Button";
import { StepsEllipse } from "../../Assets/StartUpsPage/StepsEllipse";

import styles from "./DevelopersPage.module.css";

const DevelopersPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.darkBlock}>
        <div className={styles.container}>
          <div className={styles.headline}>
            <div className={styles.headlineDesc}>
              <div className={styles.headlineTitle}>DEVELOPERS Program</div>
              <div className={styles.headlineText}>
                We believe that Agile Dreamers Platform is a great place to find
                job opportunities and interesting project, either on corporate
                client or vendors side.
              </div>
              <div className={styles.headlineText}>
                We are not trying to lower rates and stimulate inner competition
                among developers, we are helping talents to find interesting
                projects at the reasonable rates-base.
              </div>
            </div>
            <div className={styles.headlineButton}>
              <Button
                className={styles.button}
                title={"Become a Developer"}
                type={ButtonTypes.BigPrimary}
                onClick={() => {}}
              />
            </div>
            <div className={styles.headlineImage}>
              <HeadlineImageDevelopers />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.whiteBlock}>
        <div className={styles.container}>
          <div className={styles.containerPlatforms}>
            <div className={styles.platforms}>
              <div className={styles.platformsTitle}>
                Agile Dreamers Platforms
              </div>
              <div className={styles.platformsSubtitle}>
                connects software developers, designers and marketing experts
                with both business and vendors. Its a great opportunity to for
                us to build an ecosystem where freelance developers and digital
                experts in many areas can find
              </div>
            </div>
            <div className={styles.stepsGroup}>
              <div className={styles.step}>
                <span className={styles.stepsEllipse}>
                  <StepsEllipse />
                </span>
                A job in a brand new international project
              </div>
              <div className={styles.step}>
                <span className={styles.stepsEllipse}>
                  <StepsEllipse />
                </span>
                A team that is building project with a very specific expertise
                area of a digital business
              </div>
              <div className={styles.step}>
                <span className={styles.stepsEllipse}>
                  <StepsEllipse />
                </span>
                A course to upgrade the level of skills set
              </div>
              <div className={styles.step}>
                <span className={styles.stepsEllipse}>
                  <StepsEllipse />
                </span>
                An internship in an international company 
              </div>
              <div className={styles.step}>
                <span className={styles.stepsEllipse}>
                  <StepsEllipse />
                </span>
                Create your own project and find development opportunities
              </div>
              <div className={styles.step}>
                <span className={styles.stepsEllipse}>
                  <StepsEllipse />
                </span>
                Use project management tools to handle existing project at the highest performance level 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersPage;
