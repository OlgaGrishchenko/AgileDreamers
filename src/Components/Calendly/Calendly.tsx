import React, { useEffect, useState } from "react";
import { ArrowIcon } from "../../Assets/ContactBlock/ArrowIcon";
import { LineIcon } from "../../Assets/ContactBlock/LineIcon";
import Button, { ButtonTypes } from "../Button";
import Input from "../Input";
import { InputTypes } from "../Input/Input";
import Multiselect from "multiselect-react-dropdown";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

import styles from "./Calendly.module.css";

const Calendly = () => {
  /*useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });*/


  return (
    
    <div className={styles.wrap}>
      <div className={styles.container}> 
      <InlineWidget url="https://calendly.com/agiledreamers-com/30min" styles={{height: '700px' }}/>
      </div>
    </div>
  );
};

export default Calendly;
