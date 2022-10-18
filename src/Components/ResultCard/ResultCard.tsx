import React from "react";
import { I_resultData } from "../../Interfaces/Interfaces";
type ResultPageProps = {
  data: I_resultData;
};
const ResultCard: React.FunctionComponent<ResultPageProps> = ({
  data: { nameForShow, data, dataType },
}) => {
  return (
    <div className="w-6/12 flex items-center justify-start mt-2">
      {dataType === "t" && (
        <>
          <span>{nameForShow} : </span>
          <span className="mr-2">{data}</span>
        </>
      )}
      {dataType === "i" && (
        <div className="flex flex-col items-start justify-between">
          <span>{nameForShow} : </span>
          <div className="w-full flex flex-row items-center justify-center relative right-64">
            <img
              className="w-64 h-80 "
              src={URL.createObjectURL(data || new Blob())}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
