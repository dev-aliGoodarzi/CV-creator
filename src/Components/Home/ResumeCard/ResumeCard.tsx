// React
import React from "react";
// React
// CSS
import styles from "./ResumeCard.module.css";
// CSS
type ResumeCardProps = {
  name: string;
  job: string;
  birthDay: string;
};

const ResumeCard: React.FunctionComponent<ResumeCardProps> = ({
  name,
  job,
  birthDay,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-between rounded-xl box-border p-5 mt-3 ${styles.resumeCard}`}
    >
      <span>{name}</span>
      <span>{job}</span>
      <span>{birthDay}</span>
    </div>
  );
};

export default ResumeCard;
