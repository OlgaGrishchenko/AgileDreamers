import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import styles from "./RoadMap.module.css";

const RoadMap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>Roadmap</div>
      <VerticalTimeline lineColor={"#5B7CFE"} className={styles.verticalTimeline}>

        <VerticalTimelineElement
          className={styles.verticalTimelineElementWork}
          iconStyle={{ background: "#5B7CFE", top: "64px" }}
        >
          <div className={styles.point}>
          <div className={styles.title}>Q3 2023</div>
          <div className={styles.data}>
            <li className={styles.description}>Official Platform launch</li>
            <li className={styles.description}>Accelerator/Incubator partnership program</li>
          </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.verticalTimelineElementWork}
          iconStyle={{ background: "#5B7CFE" }}
        >
          <div className={styles.point}>
          <div className={styles.title}>Q4 2023</div>
          <div className={styles.data}>
            <li className={styles.description}>Freelance and Outstaffing functionality will be added</li>
            <li className={styles.description}>First eLearning coding courses will take place at Agile Dreamers Platform</li>
          </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.verticalTimelineElementWork}
          iconStyle={{ background: "#5B7CFE" }}
        >
          <div className={styles.point}>
          <div className={styles.title}>Q1 2024</div>
          <div className={styles.data}>
            <li className={styles.description}>Fiat and crypto payments are supported to fulfil transfers between clients, providers and partners</li>
            <li className={styles.description}>Agile Dreamers - Hackathon programs will be launched</li>
          </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={styles.verticalTimelineElementWork}
          iconStyle={{ background: "#5B7CFE" }}
        >
          <div className={styles.point}>
          <h3 className={styles.title}>November 2024</h3>
          <div className={styles.data}>
            <li className={styles.description}>AI freelancer search will be implemented to clients providers needs</li>
            <li className={styles.description}>Adaptive certification internship program for global clients and partners</li>
          </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={styles.verticalTimelineElementWork}
          iconStyle={{ background: "#5B7CFE" }}
        >
          <div className={styles.point}>
          <div className={styles.title}>June 2024</div>
          <div className={styles.data}>
            <li className={styles.description}>Private cryptocurrency is published and supported as a utility token for the Agile Dreamers Platform</li>
            <li className={styles.description}>Learn-to-earn program</li>
          </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default RoadMap;
