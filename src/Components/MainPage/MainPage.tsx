import React from "react";
import {
  inputArrayForUniversityInformation,
  inputsArrayForTopInformations,
} from "../../constants/constants";
import Input from "../Input/Input";

import styles from "./MainPage.module.css";

type MainPagePropsType = {
  textInputChangeHandler: Function;
  defaultImage: any;
  personImage: any;
};

const MainPage: React.FunctionComponent<MainPagePropsType> = ({
  textInputChangeHandler,
  defaultImage,
  personImage,
}) => {
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
            // console.log(e.target.files[0]);
            textInputChangeHandler(
              item.type === "file" ? e.target.files[0] : e.target.value,
              item.name
            );
          }}
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
        />
      ))}
    </div>
  );
};

export default MainPage;
