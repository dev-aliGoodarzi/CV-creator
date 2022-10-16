// React
import React from "react";
// React
// CSS
import styles from "./Home.module.css";
// CSS
// Modules
import { Link } from "react-router-dom";
// Modules
// Components
import { Fade, Bounce } from "react-awesome-reveal";
import Hr from "../Hr/Hr";
import ResumeCard from "./ResumeCard/ResumeCard";
// Components

type HomeProps = {
  localStorageItems: any[];
};
const Home: React.FunctionComponent<HomeProps> = ({ localStorageItems }) => {
  return (
    <Fade>
      <div
        className={`w-screen h-screen flex flex-col items-center justify-start box-border p-5 ${styles.homeContainer}`}
      >
        <Fade direction="left">
          <Link
            to="/new-resume-maker"
            className={`flex flex-row items-center justify-center rounded-lg ${styles.createNewBtn}`}
          >
            ساخت رزومه جدید
          </Link>
        </Fade>
        <Hr text={`رزومه های ساخته شده قبلی (${localStorageItems.length})`} />
        {localStorageItems.map((item) => {
          return (
            <ResumeCard
              key={item.name}
              name={item.name}
              birthDay={item.birthDay}
              job={item.job}
            />
          );
        })}
      </div>
    </Fade>
  );
};

export default Home;
