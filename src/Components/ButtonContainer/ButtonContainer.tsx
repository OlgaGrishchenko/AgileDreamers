import styles from "../ButtonContainer/ButtonContainer.module.css";
import Button, { ButtonTypes } from "../Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PathNames } from "../../Pages/Router/Router";

const ButtonContainer = () => {
  const navigate = useNavigate();

  const navigateToProvidersPage = () => {
    navigate(PathNames.Providers);
  };

  return (
    <div className={styles.buttons}>
      <div className={styles.topButtonContainer}>
        <Button
          className={styles.button}
          title={"Service Providers"}
          type={ButtonTypes.BigPrimary}
          onClick={navigateToProvidersPage}
        />
        <Button
          className={styles.button}
          title={"Become a Provider"}
          type={ButtonTypes.BigSecondary}
          onClick={() => {
            navigate("//dashboard.agiledreamers.com/sign-up");
          }}
        />
      </div>
      <Button
        className={styles.buttonBig}
        title={"Become a Freelance Developer"}
        type={ButtonTypes.BigSecondary}
        onClick={() => {
          navigate("//dashboard.agiledreamers.com/sign-up");
        }}
      />
    </div>
  );
};

export default ButtonContainer;
