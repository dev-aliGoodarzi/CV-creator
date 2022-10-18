import React from "react";
// Models
import { I_InputsData, I_resultData } from "../../Interfaces/Interfaces";
import Hr from "../Hr/Hr";
import ResultCard from "../ResultCard/ResultCard";
import ResultPageAdvantageCard from "../ResultPageAdvantageCard/ResultPageAdvantageCard";
// Models
// CSS
import styles from "./ResultPage.module.css";
// CSS

type ResultPageProps = {
  data: I_InputsData;
  defaultImage: MediaSource | any;
};
const ResultPage: React.FunctionComponent<ResultPageProps> = ({
  data: {
    advantages,
    age,
    birthDay,
    city,
    job,
    license,
    licenseImage,
    name,
    personImage,
    province,
    score,
    university,
  },
  defaultImage,
}) => {
  const resultData: I_resultData[] = [
    {
      nameForShow: "نام",
      data: name,
      dataType: "t",
    },
    {
      nameForShow: "  تاریخ تولد ",
      data: birthDay,
      dataType: "t",
    },
    {
      nameForShow: "سن",
      data: age,
      dataType: "t",
    },
    {
      nameForShow: "شغل",
      data: job,
      dataType: "t",
    },
    {
      nameForShow: "   استان محل زندگی ",
      data: province,
      dataType: "t",
    },
    {
      nameForShow: "شهر محل زندگی ",
      data: city,
      dataType: "t",
    },

    {
      nameForShow: "آخرین مدرک تحصیلی",
      data: license,
      dataType: "t",
    },
    {
      nameForShow: "معدل",
      data: score,
      dataType: "t",
    },
    {
      nameForShow: "دانشگاه محل تحصیل",
      data: university,
      dataType: "t",
    },
    {
      nameForShow: "تصویر آخرین مدرک تحصیلی",
      data: licenseImage,
      dataType: "i",
    },
  ];
  return (
    <div
      className={`flex flex-col items-center justify-start box-border py-2  ${styles.resultPageContainer}`}
    >
      <img
        className={`w-48 h-48 flex items-center justify-center rounded-full ${styles.personImg}`}
        src={URL.createObjectURL(personImage || new Blob())}
        alt={"personImg"}
      />
      <Hr text="اطلاعات شخصی" />
      {resultData.map((item) => {
        return <ResultCard key={item.nameForShow} data={item} />;
      })}
      <Hr text="تخصص ها " />
      {advantages.map((item) => {
        return <ResultPageAdvantageCard key={item.advantageName} data={item} />;
      })}
      <button
        className={`w-3/12 h-14
          flex items-center justify-center
          rounded-full
        bg-blue-600
          mt-5
        text-white text-3xl
          font-serif font-bold ${styles.printBtn}`}
        onClick={() => {
          window.print();
        }}
      >
        چاپ اطلاعات
      </button>
    </div>
  );
};

export default ResultPage;
