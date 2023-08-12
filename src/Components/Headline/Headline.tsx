import React from "react";

import { Line } from "../../Assets/Headline/Line";
import { Puzzle } from "../../Assets/Headline/PuzzlePicture";
import Button, { ButtonTypes } from "../Button";

import Ukraine from "../Ukraine";

import styles from "./Headline.module.css";
import ButtonContainer from "../ButtonContainer";

const Headline = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.line}>
        <Line />
      </div>
      <div className={styles.container}>
        <div className={styles.ukraine}>
          <Ukraine />
        </div>

        <div className={styles.containerTop}>
          <div className={styles.text}>
            <div className={styles.title}>
              Dedicated digital{" "}
              <span className={styles.titleViolet}>solutions</span> <br /> with{" "}
              <span className={styles.titleViolet}>Agile Dreamers</span>
            </div>
            <div className={styles.subTitle}>
              Agile Dreamer Platform is a set of unique focused SaaS services
              and dedicated software development teams that are combined to
              build your new digital system in the most efficient way possible
              having a solid business sense of go-to-market-strategies and agile
              approach.
            </div>
          </div>
          <div className={styles.image}>
            <Puzzle />
          </div>
        </div>

        <div className={styles.containerBottom}>
          <ButtonContainer/>
        </div>
      </div>
    </div>
  );
};

export default Headline;
