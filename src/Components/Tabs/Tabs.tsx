import { FC } from "react";
import classNames from "classnames";

import { TabsTools} from '../../Constants/@types';

import styles from "./Tabs.module.css";

type TabsToolsProps = {
   activeTab: TabsTools,
   onClickedTab: (tab: TabsTools) => void,
   TabsList: Array<{ name: string; key: TabsTools }>
 }

const Tabs: FC<TabsToolsProps> = ({ activeTab, TabsList, onClickedTab }) => {
  return <div className={styles.container}>
   {TabsList.map((tab) => {
        return (
          <div
            key={tab.key}
            onClick={() => onClickedTab(tab.key)}
            className={classNames(styles.containerTab, {
              [styles.clicked]: tab.key === activeTab
            })}>
            {tab.name}
          </div>
        );
      })}
  </div>;
};

export default Tabs;
