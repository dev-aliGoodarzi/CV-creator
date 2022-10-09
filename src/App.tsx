import React, { useEffect, useState } from "react";
import MainPage from "./Components/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import ResultPage from "./Components/ResultPage/ResultPage";
import { I_InputsData } from "./Interfaces/Interfaces";

import img1 from "./images/personIMG.png";
function App() {
  const inputData = {
    name: "",
    birthDay: "",
    age: "",
    job: "",
    image: "",
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
        case "image":
          copy.image = valueToSet;
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
              personImage={inputData.image}
            />
          }
        />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
