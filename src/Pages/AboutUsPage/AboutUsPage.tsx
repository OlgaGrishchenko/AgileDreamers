import React from "react";
import { AboutUsLogo } from "../../Assets/AboutUs/AboutUsLogo";

import { Line } from "../../Assets/Headline/Line";
import Benefits from "../../Components/Benefits";
import Button, { ButtonTypes } from "../../Components/Button";
import RoadMap from "../../Components/RoadMap";

import styles from "./AboutUsPage.module.css";
import ButtonContainer from "../../Components/ButtonContainer";

const AboutUsPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.darkBlock}>
        <div className={styles.container}>
          <div className={styles.headLine}>
            <div className={styles.title}>We are Agile Dreamers</div>
            <div className={styles.headLineDescription}>
              <div className={styles.headLineText}>
                Agile Dreamers Platform is a cross-functional matching
                aggregator that includes fully functional Project Planner and
                C-Level contact book messenger with software development
                providers. We are supporting Agile Manifesto and building
                synenergy around teams to apply the most efficient technics for
                creating complex tech solutions and digital products.
              </div>
              <div className={styles.headLineText}>
                We match you with the most experienced and trustworthy service
                providers in your niche of business and form development teams
                in accordance with your current needs. We are building a brand
                new ecosystem for new tech market requirements as we grow
                developers for service providers and product companies.
              </div>
            </div>
            <ButtonContainer/>
            <div className={styles.logo}><AboutUsLogo /></div>
          </div>
        </div>
      </div>

      <div className={styles.whiteBlock}>
        <RoadMap />
        <Benefits />
      </div>
    </div>
  );
};

export default AboutUsPage;
