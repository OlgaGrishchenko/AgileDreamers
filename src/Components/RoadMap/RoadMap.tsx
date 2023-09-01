import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import styles from "./RoadMap.module.css";
import {Eclipse} from "../../Assets/RoadMap/Eclipse";

const RoadMap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>Roadmap</div>
      <VerticalTimeline lineColor={"#5B7CFE"} className={styles.verticalTimeline} layout={'2-columns'}>

        <VerticalTimelineElement
          className={styles.verticalTimelineElementWork}
          iconClassName={styles.eclipse}
          icon={<Eclipse/>}
          contentStyle={{boxShadow:"none",padding:0}}
          contentArrowStyle={{position:'static'}}
          onTimelineElementClick={()=>{}}
          intersectionObserverProps={{rootMargin:'0px 0px -50% 0px', threshold: 0.5}} 
        >
          <div className={styles.point}>
          <div className={styles.title}>Q3 2023</div>
          <ul className={styles.data}>
            <li className={styles.description}>Official Platform launch</li>
            <li className={styles.description}>Accelerator/Incubator partnership program</li>
          </ul>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.verticalTimelineElementWork}
          iconClassName={styles.eclipse}
          icon={<Eclipse/>}
          contentStyle={{boxShadow:"none",padding:0,float:'right'}}
          contentArrowStyle={{position:'static'}}
          intersectionObserverProps={{rootMargin:'0px 0px -50% 0px', threshold: 0.5}}
        >
          <div className={styles.point}>
          <div className={styles.title}>Q4 2023</div>
          <ul className={styles.data}>
            <li className={styles.description}>Freelance and Outstaffing functionality will be added</li>
            <li className={styles.description}>First eLearning coding courses will take place at Agile Dreamers Platform</li>
          </ul>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.verticalTimelineElementWork}
          iconClassName={styles.eclipse}
          icon={<Eclipse/>}
          contentStyle={{boxShadow:"none",padding:0}}
          contentArrowStyle={{position:'static'}}
          intersectionObserverProps={{rootMargin:'0px 0px -50% 0px', threshold: 0.5}}
        >
          <div className={styles.point}>
          <div className={styles.title}>Q1 2024</div>
          <ul className={styles.data}>
            <li className={styles.description}>Fiat and crypto payments are supported to fulfil transfers between clients, providers and partners</li>
            <li className={styles.description}>Agile Dreamers - Hackathon programs will be launched</li>
          </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={styles.verticalTimelineElementWork}
          iconClassName={styles.eclipse}
          icon={<Eclipse/>}
          contentStyle={{boxShadow:"none",padding:0,float:'right'}}
          contentArrowStyle={{position:'static'}}
          intersectionObserverProps={{rootMargin:'0px 0px -50% 0px', threshold: 0.5}}
        >
          <div className={styles.point}>
          <div className={styles.title}>November 2024</div>
          <ul className={styles.data}>
            <li className={styles.description}>AI freelancer search will be implemented to clients providers needs</li>
            <li className={styles.description}>Adaptive certification internship program for global clients and partners</li>
          </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={styles.verticalTimelineElementWork}
          iconClassName={styles.eclipse}
          icon={<Eclipse/>}
          contentStyle={{boxShadow:"none",padding:0}}
          contentArrowStyle={{position:'static'}}
          intersectionObserverProps={{rootMargin:'0px 0px -50% 0px', threshold: 0.5}}
        >
          <div className={styles.point}>
          <div className={styles.title}>June 2024</div>
          <ul className={styles.data}>
            <li className={styles.description}>Private cryptocurrency is published and supported as a utility token for the Agile Dreamers Platform</li>
            <li className={styles.description}>Learn-to-earn program</li>
          </ul>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default RoadMap;
