import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

export enum ButtonTypes {
   BigPrimary = "bigPrimary",
   BigSecondary = "bigSecondary",
   SmallPrimary ="smallPrimary",
   SmallSecondary = "smallSecondary",
};

type ButtonProps = {
   title: string | ReactElement;
   type: ButtonTypes;
   onClick?: () => void;
   className?: string;
   disabled?: boolean;
   tablet?:boolean;
   tabletSignUp?:boolean;
   mobileLightColor?:boolean;
   mobileDarkColor?:boolean;
};

const Button: FC<ButtonProps> = (props) => {
   const { type, title, onClick, className, disabled,tablet ,tabletSignUp,mobileLightColor,mobileDarkColor} = props;

   const buttonClassName = styles[type];

   return (
      <div
         className={classNames(styles.button, buttonClassName, className, {[styles.disabled]: !!disabled},{[styles.responsiveBtn]:tablet},
             {[styles.responsiveSignUp]:tabletSignUp},{[styles.mobileLight]:mobileLightColor},{[styles.mobileDark]:mobileDarkColor})}
         onClick={onClick}
      >
      {title}
      </div>
   );
};

export default Button;