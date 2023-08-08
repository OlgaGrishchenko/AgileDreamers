import React, { useState } from "react";
import { AfterEffects } from "../../Assets/ToolsWeUse/AfterEffects";
import { Amazon } from "../../Assets/ToolsWeUse/Amazon";
import { Android } from "../../Assets/ToolsWeUse/Android";
import { Angular } from "../../Assets/ToolsWeUse/Angular";
import { Apple } from "../../Assets/ToolsWeUse/Apple";
import { AppleObjectivec } from "../../Assets/ToolsWeUse/AppleObjectivec";
import { Azure } from "../../Assets/ToolsWeUse/Azure";
import { Binance } from "../../Assets/ToolsWeUse/Binance";
import { Bitcoin } from "../../Assets/ToolsWeUse/Bitcoin";
import { Bootstrap } from "../../Assets/ToolsWeUse/Bootstrap";
import { Cardano } from "../../Assets/ToolsWeUse/Cardano";
import { Chainlink } from "../../Assets/ToolsWeUse/Chainlink";
import { Cosmos } from "../../Assets/ToolsWeUse/Cosmos";
import { CSharp } from "../../Assets/ToolsWeUse/CSharp";
import { Django } from "../../Assets/ToolsWeUse/Django";
import { Docker } from "../../Assets/ToolsWeUse/Docker";
import { DotNet } from "../../Assets/ToolsWeUse/DotNet";
import { Ethereum } from "../../Assets/ToolsWeUse/Ethereum";
import { Figma } from "../../Assets/ToolsWeUse/Figma";
import { Flask } from "../../Assets/ToolsWeUse/Flask";
import { Flutter } from "../../Assets/ToolsWeUse/Flutter";
import { GitHub } from "../../Assets/ToolsWeUse/GitHub";
import { GitLab } from "../../Assets/ToolsWeUse/GitLab";
import { HIVE } from "../../Assets/ToolsWeUse/HIVE";
import { Illustrator } from "../../Assets/ToolsWeUse/Illustrator";
import { Ionic } from "../../Assets/ToolsWeUse/Ionic";
import { ISOC } from "../../Assets/ToolsWeUse/ISOC";
import { ISOCPlus } from "../../Assets/ToolsWeUse/ISOCPlus";
import { Java } from "../../Assets/ToolsWeUse/Java";
import { Jira } from "../../Assets/ToolsWeUse/Jira";
import { Jquery } from "../../Assets/ToolsWeUse/Jquery";
import { JS } from "../../Assets/ToolsWeUse/JS";
import { Kotlin } from "../../Assets/ToolsWeUse/Kotlin";
import { Kubernetes } from "../../Assets/ToolsWeUse/Kubernetes";
import { Laravel } from "../../Assets/ToolsWeUse/Laravel";
import { MongoDB } from "../../Assets/ToolsWeUse/MongoDB";
import { Mysql } from "../../Assets/ToolsWeUse/Mysql";
import { NETcore } from "../../Assets/ToolsWeUse/NETcore";
import { NextJS } from "../../Assets/ToolsWeUse/NextJS";
import { NodeJS } from "../../Assets/ToolsWeUse/NodeJS";
import { NuxtJS } from "../../Assets/ToolsWeUse/NuxtJS";
import { Oracle } from "../../Assets/ToolsWeUse/Oracle";
import { Photoshop } from "../../Assets/ToolsWeUse/Photoshop";
import { PHP } from "../../Assets/ToolsWeUse/PHP";
import { PostgreSQL } from "../../Assets/ToolsWeUse/PostgreSQL";
import { Python } from "../../Assets/ToolsWeUse/Python";
import { ReactJS } from "../../Assets/ToolsWeUse/ReactJS";
import { Redis } from "../../Assets/ToolsWeUse/Redis";
import { Redux } from "../../Assets/ToolsWeUse/Redux";
import { ReduxSaga } from "../../Assets/ToolsWeUse/ReduxSaga";
import { Ruby } from "../../Assets/ToolsWeUse/Ruby";
import { Scala } from "../../Assets/ToolsWeUse/Scala";
import { Swagger } from "../../Assets/ToolsWeUse/Swagger";
import { Swift } from "../../Assets/ToolsWeUse/Swift";
import { TensorFlow } from "../../Assets/ToolsWeUse/TensorFlow";
import { Tron } from "../../Assets/ToolsWeUse/Tron";
import { VueJS } from "../../Assets/ToolsWeUse/VueJS";
import { TabsTools } from "../../Constants/@types";
import Tabs from "../Tabs";

import styles from "./ToolsWeUse.module.css";

const TABS_TOOLS_NAMES = [
  { name: "Front-end", key: TabsTools.Frontend },
  { name: "Back-end", key: TabsTools.Backend },
  { name: "Mobile", key: TabsTools.Mobile },
  { name: "Design", key: TabsTools.Design },
  { name: "Blockchain", key: TabsTools.Blockchain },
];

const ToolsWeUse = () => {
  const [activeTab, setActiveTab] = useState(TabsTools.Frontend);

  const onTabClick = (tab: TabsTools) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.title}>Tools we use</div>
        <div className={styles.tabslist}>
          <Tabs
            activeTab={activeTab}
            onClickedTab={onTabClick}
            TabsList={TABS_TOOLS_NAMES}
          />
          {activeTab === TabsTools.Frontend && (
            <div className={styles.icons}>
              <JS />
              <NuxtJS />
              <Bootstrap />
              <VueJS />
              <NextJS />
              <Angular />
              <Redux /> 
              <ReduxSaga /> 
              <ReactJS />
              <Swagger />
              <Jquery />
            </div>
          )}
          {activeTab === TabsTools.Backend && (
            <div className={styles.icons}>
              <DotNet />
              <NETcore />
              <Amazon />
              <Django />
              <Laravel />
              <Azure />
              <NodeJS />
              <PHP />
              <Ruby />
              <Scala />
              <GitLab />
              <GitHub />
              <TensorFlow />
              <CSharp />
              <ISOC />
              <ISOCPlus />
              <Kubernetes />
              <Docker />
              <PostgreSQL />
              <Mysql />
              <Python />
              <Jira />
              <MongoDB />
              <Redis />
              <Flask />
              <Java />
            </div>
          )}
          {activeTab === TabsTools.Mobile && (
            <div className={styles.icons}>
              <Android />
              <Flutter />
              <Ionic />
              <VueJS />
              <Apple />
              <Kotlin />
              <AppleObjectivec />
              <ReactJS />
              <Swift />
            </div>
          ) }
          {activeTab === TabsTools.Design && (
            <div className={styles.icons}>
              <AfterEffects />
              <Illustrator />
              <Photoshop />
              <Figma />
            </div>
          )}
          {activeTab === TabsTools.Blockchain && (
            <div className={styles.icons}>
              <Ethereum />
              <Bitcoin />
              <Binance />
              <Cardano />
              <Chainlink />
              <Oracle />
              <Cosmos />
              <Tron />
              <HIVE />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolsWeUse;