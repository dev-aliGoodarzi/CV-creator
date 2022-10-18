import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  inputArrayForUniversityInformation,
  inputsArrayForTopInformations,
} from "../../constants/constants";
import { I_advantage, I_InputsData } from "../../Interfaces/Interfaces";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
import Hr from "../Hr/Hr";
import Input from "../Input/Input";

import styles from "./MainPage.module.css";

type MainPagePropsType = {
  textInputChangeHandler: Function;
  defaultImage: any;
  inputsData: any;
  personImage: any;
  advantages: I_advantage[];
  addItemsToLocalStorage: Function;
};

const MainPage: React.FunctionComponent<MainPagePropsType> = ({
  textInputChangeHandler,
  defaultImage,
  inputsData,
  personImage,
  advantages,
  addItemsToLocalStorage,
}) => {
  const [advantageData, setAdvantageData] = useState<I_advantage>({
    advantageName: "",
    advantageValue: 0,
  });
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
      <Hr text="اطلاعات اولیه" />
      {inputsArrayForTopInformations.map((item) => (
        <Input
          key={item.nameForShow}
          content={item.nameForShow}
          type={item.type}
          inputData={item.type === "text" ? inputsData[item.name] : undefined}
          onChangeInputHandler={(e: any) => {
            textInputChangeHandler(
              item.type === "file" ? e.target.files[0] : e.target.value,
              item.name
            );
          }}
          validation={item.validation}
        />
      ))}
      <Hr text="اطلاعات تحصیلی" />
      {inputArrayForUniversityInformation.map((item) => (
        <Input
          key={item.name}
          onChangeInputHandler={(e: any) => {
            textInputChangeHandler(
              item.type === "file" ? e.target.files[0] : e.target.value,
              item.name
            );
          }}
          inputData={item.type === "text" ? inputsData[item.name] : undefined}
          content={item.nameForShow}
          type={item.type}
          validation={item.validation}
        />
      ))}
      <Hr text="تخصص ها" />
      <div className={styles.advantages}>
        <Input
          content="نوع تخصص"
          onChangeInputHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAdvantageData((prevState: I_advantage) => {
              return {
                ...prevState,
                advantageName: e.target.value,
                key: `${Math.random() * 10000} - ${Math.random() * 80000}`,
              };
            });
          }}
          type={"text"}
          validation={{ length: 2 }}
          inputData={advantageData.advantageName}
        />{" "}
        <Input
          content="درصد پیشرفت"
          onChangeInputHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAdvantageData((prevState: any) => {
              return {
                ...prevState,
                advantageValue: e.target.value,
                key: `${Math.random() * 10000} - ${Math.random() * 80000}`,
              };
            });
          }}
          type={"text"}
          validation={{ length: 2 }}
          inputData={advantageData.advantageValue}
        />
        <button
          className={`w-full h-max mt-2 rounded-2xl flex flex-row items-center justify-center ${styles.addBtn}`}
          onClick={() => {
            if (
              advantageData?.advantageName !== "" &&
              advantageData?.advantageValue !== 0
            ) {
              setAdvantageData((prevState: any) => {
                return {
                  ...prevState,
                  key: `${Math.random() * 10000} - ${Math.random() * 80000}`,
                };
              });
              textInputChangeHandler(advantageData, "advantages");
              setAdvantageData({ advantageName: "", advantageValue: 0 });
            } else {
              return Swal.fire({
                icon: "error",
                title: "ورودی های خود را کنترل کنید",
                text: "تخصص های حود را درست وارد کنید",
              });
            }
          }}
        >
          Add
        </button>
      </div>
      <Hr text="تخصص های وارد شده" />
      {advantages.map((item) => (
        <AdvantageCard
          key={item.key}
          advantageName={item.advantageName}
          advantageValue={item.advantageValue}
          onClickHandler={() => {
            textInputChangeHandler(item.advantageName, "advantageRemove");
          }}
        />
      ))}
      <Hr text="مرحله ی پایانی" />
      <Link
        to="/result"
        onClick={() => {
          addItemsToLocalStorage();
        }}
      >
        اتمام ساخت
      </Link>
    </div>
  );
};

export default MainPage;
