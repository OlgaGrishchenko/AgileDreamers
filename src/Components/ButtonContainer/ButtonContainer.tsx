import styles from "../Headline/Headline.module.css";
import Button, {ButtonTypes} from "../Button";
import React from "react";

const ButtonContainer=()=>{
    return <div className={styles.buttons}>
        <div className={styles.topButtonContainer}>
            <Button
                className={styles.button}
                title={"Service Providers"}
                type={ButtonTypes.BigPrimary}
                onClick={() => {}}
            />
            <Button
                className={styles.button}
                title={"Become a Provider"}
                type={ButtonTypes.BigSecondary}
                onClick={() => {}}
            />
        </div>
        <Button
            className={styles.buttonBig}
            title={"Become a Freelance Developer"}
            type={ButtonTypes.BigSecondary}
            onClick={() => {}}
        />
    </div>
}

export default ButtonContainer