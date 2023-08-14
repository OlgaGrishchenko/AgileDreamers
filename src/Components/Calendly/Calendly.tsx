import React, { useEffect, useState } from "react";
import { ArrowIcon } from "../../Assets/ContactBlock/ArrowIcon";
import { LineIcon } from "../../Assets/ContactBlock/LineIcon";
import Button, { ButtonTypes } from "../Button";
import Input from "../Input";
import { InputTypes } from "../Input/Input";
import Multiselect from "multiselect-react-dropdown";
import { InlineWidget } from "react-calendly";

import styles from "./Calendly.module.css";

const Calendly = () => {
  const keyAreas = [
    { name: "Platform Development", id: 1 },
    { name: "Software Development", id: 2 },
    { name: "Mobile App Development", id: 3 },
    { name: "FinTech Development", id: 4 },
    { name: "AR/VR", id: 5 },
    { name: "AI - Artificial Intelligence", id: 6 },
    { name: "Blockchain Development", id: 7 },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.container}> 
      <InlineWidget url="https://calendly.com/agiledreamers-com" styles={{height: '700px'}}/>
      </div>
    </div>
  );
};

export default Calendly;
