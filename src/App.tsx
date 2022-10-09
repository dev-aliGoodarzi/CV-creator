import React, { useEffect, useState } from "react";
import MainPage from "./Components/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import ResultPage from "./Components/ResultPage/ResultPage";
import { I_InputsData } from "./Interfaces/Interfaces";

import img1 from "./images/personIMG.png";
function App() {
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
  };
  const [inputsData, setInputsData] = useState<I_InputsData>(inputData);
  const textInputChangeHandler = (
    valueToSet: string,
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
      }
      return copy;
    });
  };

  useEffect(() => {
    console.log(inputsData);
  }, [inputsData]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              textInputChangeHandler={textInputChangeHandler}
              defaultImage={img1}
              personImage={inputsData.personImage}
            />
          }
        />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
