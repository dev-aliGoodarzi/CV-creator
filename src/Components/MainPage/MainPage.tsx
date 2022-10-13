import React from "react";
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
  advantages: I_advantage[];
};

const MainPage: React.FunctionComponent<MainPagePropsType> = ({
  textInputChangeHandler,
  defaultImage,
  personImage,
  advantages,
}) => {
  const firstAdvantageInput = React.createRef();
  const secondAdvantageInput = React.createRef();
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
          onChangeInputHandler={() => {}}
          type={"text"}
          validation={{ length: 2 }}
          ref={firstAdvantageInput}
        />{" "}
        <Input
          content="درصد پیشرفت"
          onChangeInputHandler={() => {}}
          type={"text"}
          validation={{ length: 2 }}
          ref={secondAdvantageInput}
        />
        <button
          onClick={() => {
            console.log(firstAdvantageInput?.current);
          }}
        >
          Add
        </button>
      </div>
      {advantages.map((item) => (
        <AdvantageCard key={item.name} data={item} />
      ))}
    </div>
  );
};

export default MainPage;
