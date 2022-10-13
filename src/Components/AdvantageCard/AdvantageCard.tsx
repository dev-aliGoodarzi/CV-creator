import React from "react";
import { I_advantage } from "../../Interfaces/Interfaces";
import styles from "./AdvantageCard.module.css";
type AdvantageCardPropsType = {
  data: I_advantage;
};

const AdvantageCard: React.FunctionComponent<AdvantageCardPropsType> = ({
  data: { name, nameForShow, currentValueOfAdvantage },
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-between ${styles.advantageCardItem}`}
    >
      <div className={`w-2/6 ${styles.left}`}>{nameForShow}</div>
      <div
        className={`w-3/6 flex flex-col items-start justify-between ${styles.right}`}
      >
        <div
          className={`w-full h-1/2 flex flex-row items-center justify-center  ${styles.top}`}
        >
          درصد پیشرفت فعلی
        </div>
        <div
          className={`w-full h-1/2 flex flex-row items-center justify-center ${styles.bottom}`}
        >
          <div
            className={` ${styles.inner}`}
            style={{ width: currentValueOfAdvantage }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;
