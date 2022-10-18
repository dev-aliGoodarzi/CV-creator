import React, { useState, useEffect } from "react";
import MainPage from "./Components/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import ResultPage from "./Components/ResultPage/ResultPage";
import { I_InputsData } from "./Interfaces/Interfaces";

import img1 from "./images/personIMG.png";
import Home from "./Components/Home/Home";

import { Fade } from "react-awesome-reveal";
import { ResumeCardProps } from "./Components/Home/ResumeCard/ResumeCard";
// const INITIALSTATE: I_InputsData = {
//   name: "",
//   birthDay: "",
//   age: "",
//   job: "",
//   personImage: "",
//   university: "",
//   province: "",
//   city: "",
//   license: "",
//   score: "",
//   licenseImage: "",
//   advantages: [],
// };

const inputData: I_InputsData = {
  name: "",
  birthDay: "",
  age: "",
  job: "",
  personImage: "",
  university: "",
  province: "",
  city: "",
  license: "",
  score: "",
  licenseImage: "",
  advantages: [],
};
function App() {
  //methods
  const textInputChangeHandler = (
    valueToSet: string | object | any,
    selectedItemName: any
  ): void => {
    setInputsData((prevState: I_InputsData): I_InputsData => {
      const copy = { ...prevState };
      switch (selectedItemName) {
        case "name":
          copy.name = valueToSet;
          return copy;
        case "birthDay":
          copy.birthDay = valueToSet;
          return copy;
        case "age":
          copy.age = valueToSet;
          return copy;
        case "job":
          copy.job = valueToSet;
          return copy;
        case "personImage":
          copy.personImage = valueToSet;
          return copy;
        case "university":
          copy.university = valueToSet;
          return copy;
        case "province":
          copy.province = valueToSet;
          return copy;
        case "city":
          copy.city = valueToSet;
          return copy;
        case "license":
          copy.license = valueToSet;
          return copy;
        case "score":
          copy.score = valueToSet;
          return copy;
        case "licenseImage":
          copy.licenseImage = valueToSet;
          return copy;
        case "advantages":
          copy.advantages.push(valueToSet);
          return copy;
        case "advantageRemove":
          const selectedItems = copy.advantages.filter(
            (item) => item.advantageName !== valueToSet
          );
          copy.advantages = selectedItems;
          return copy;
      }
      return copy;
    });
  };
  const getItemsFromLocalStorage = (
    localStorageIndex: string
  ): I_InputsData[] => {
    const localStorageIndexChecker = localStorage.getItem(localStorageIndex);
    const jsonFormater = JSON.parse(localStorageIndexChecker || "[]");
    if (jsonFormater) return jsonFormater;
    else return [];
  };
  const addItemsToLocalStorage = (
    localStorageKey: string,
    localStorageItems: I_InputsData[]
  ): void => {
    const makeDataToString = JSON.stringify(localStorageItems);
    localStorage.setItem(localStorageKey, makeDataToString);
    return;
  };
  const addToLocalStorageAndState = () => {
    setSavedItems((prevState: any): any => {
      return [...prevState, inputsData];
    });
    console.log(forceUpdateHeader);
  };

  //methods

  //states
  const [inputsData, setInputsData] = useState<I_InputsData>(inputData);
  const [savedItems, setSavedItems] = useState<I_InputsData[]>(
    getItemsFromLocalStorage("lastResumes")
  );
  const [forceUpdateHeader, setForceUpdateHeader] = useState(true);
  //states

  useEffect(() => {
    addItemsToLocalStorage("lastResumes", savedItems);
    setForceUpdateHeader((prev) => !prev);
  }, [savedItems]);
  const resumeItemSetter = ({ name, job, birthDay }: ResumeCardProps): void => {
    const copyOfAllStates = [...savedItems];
    const selectedItemIndex = copyOfAllStates.findIndex((item) => {
      return (
        item.name === name && item.job === job && item.birthDay === birthDay
      );
    });
    setInputsData(copyOfAllStates[selectedItemIndex]);
    setInputsData((prevState: I_InputsData): any => {
      return { ...prevState, personImage: "", licenseImage: "" };
    });
    return;
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              localStorageItems={savedItems}
              resumeItemSetter={resumeItemSetter}
            />
          }
        />
        <Route
          path="/new-resume-maker"
          element={
            <Fade>
              <MainPage
                textInputChangeHandler={textInputChangeHandler}
                defaultImage={img1}
                inputsData={inputsData}
                personImage={inputsData.personImage}
                advantages={inputsData.advantages}
                addItemsToLocalStorage={() => {
                  addToLocalStorageAndState();
                }}
              />
            </Fade>
          }
        />
        <Route
          path="/result"
          element={
            <Fade>
              <ResultPage data={inputsData} defaultImage={img1} />
            </Fade>
          }
        />
      </Routes>
    </>
  );
}

export default App;
