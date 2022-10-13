import React, { useState } from "react";
import {
  inputArrayForUniversityInformation,
  inputsArrayForTopInformations,
} from "../../constants/constants";
import { I_advantage } from "../../Interfaces/Interfaces";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
import Input from "../Input/Input";

import styles from "./MainPage.module.css";

type MainPagePropsType = {
  textInputChangeHandler: Function;
  defaultImage: any;
  personImage: any;
  advantages: any[];
};

const MainPage: React.FunctionComponent<MainPagePropsType> = ({
  textInputChangeHandler,
  defaultImage,
  personImage,
  advantages,
}) => {
  const [advantageData, setAdvantageData] = useState({});
  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justify-start ${styles.mainPage}`}
    >
      <img
        src={
          personImage === "" ? defaultImage : URL.createObjectURL(personImage)
        }
        alt=""
      />
      {inputsArrayForTopInformations.map((item) => (
        <Input
          key={item.nameForShow}
          content={item.nameForShow}
          type={item.type}
          onChangeInputHandler={(e: any) => {
            textInputChangeHandler(
              item.type === "file" ? e.target.files[0] : e.target.value,
              item.name
            );
          }}
          validation={item.validation}
        />
      ))}
      <br />
      {inputArrayForUniversityInformation.map((item) => (
        <Input
          key={item.name}
          onChangeInputHandler={(e: any) => {
            textInputChangeHandler(
              item.type === "file" ? e.target.files[0] : e.target.value,
              item.name
            );
          }}
          content={item.nameForShow}
          type={item.type}
          validation={item.validation}
        />
      ))}
      <br />
      <div className={styles.advantages}>
        <Input
          content="نوع تخصص"
          onChangeInputHandler={(e: any) => {
            setAdvantageData((prevState) => {
              return { ...prevState, advantageName: e.target.value };
            });
          }}
          type={"text"}
          validation={{ length: 2 }}
        />{" "}
        <Input
          content="درصد پیشرفت"
          onChangeInputHandler={(e: any) => {
            setAdvantageData((prevState) => {
              return { ...prevState, advantageValue: e.target.value };
            });
          }}
          type={"text"}
          validation={{ length: 2 }}
        />
        <button
          onClick={() => {
            setAdvantageData((prevState) => {
              return {
                ...prevState,
                key: `${Math.random() * 10000} - ${Math.random() * 80000}`,
              };
            });
            textInputChangeHandler(advantageData, "advantages");
          }}
        >
          Add
        </button>
      </div>
      {advantages.map((item) => (
        <AdvantageCard
          key={item.key || Math.random() * 100000}
          advantageName={item.advantageName}
          advantageValue={item.advantageValue}
        />
      ))}
    </div>
  );
};

export default MainPage;
