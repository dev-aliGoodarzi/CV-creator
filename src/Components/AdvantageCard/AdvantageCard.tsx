import React from "react";
import { I_advantage } from "../../Interfaces/Interfaces";
import styles from "./AdvantageCard.module.css";
type AdvantageCardPropsType = {
  advantageName: string;
  advantageValue: number;
};

const AdvantageCard: React.FunctionComponent<AdvantageCardPropsType> = ({
  advantageName,
  advantageValue,
}) => {
  function between(x: number, min: number, max: number): boolean {
    return x >= min && x <= max;
  }
  return (
    <div
      className={`flex flex-row-reverse items-center justify-between ${styles.advantageCardItem}`}
    >
      <div
        className={`flex flex-row-reverse items-center justify-between ${styles.left}`}
      >
        <span> : نام تخصص </span>
        <span>{advantageName}</span>
      </div>

      <div
        className={` flex flex-col items-start justify-between ${styles.right}`}
      >
        <div
          className={`flex flex-row-reverse items-center justify-between  ${styles.top}`}
        >
          <span> : مقدار تخصص </span>
          <span>
            {between(advantageValue, 0, 25) && "مقدماتی"}
            {between(advantageValue, 26, 50) && "متوسط"}
            {between(advantageValue, 51, 70) && "پیشرفته"}
            {between(advantageValue, 71, 100) && "حرفه ای"}
          </span>
        </div>
        <div
          className={`flex flex-row items-center justify-start ${styles.bottom}`}
        >
          <div
            className={`${styles.inner}`}
            style={{ width: `${advantageValue}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;
