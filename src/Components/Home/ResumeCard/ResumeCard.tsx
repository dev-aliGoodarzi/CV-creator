// React
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// React
// CSS
import styles from "./ResumeCard.module.css";
// CSS
export type ResumeCardProps = {
  name: string;
  job: string;
  birthDay: string;
  resumeItemSetter: Function;
};

const ResumeCard: React.FunctionComponent<ResumeCardProps> = ({
  name,
  job,
  birthDay,
  resumeItemSetter,
}) => {
  return (
    <Link
      className={`flex flex-row items-center justify-between rounded-xl box-border p-5 mt-3 ${styles.resumeCard}`}
      onClick={() => {
        resumeItemSetter({ name, job, birthDay });
        Swal.fire({
          icon: "info",
          title: "لطفا عکس خود را دوباره بارگذاری کنید",
          timer: 2000,
        });
      }}
      to="/new-resume-maker"
    >
      <span>{name}</span>
      <span>{job}</span>
      <span>{birthDay}</span>
    </Link>
  );
};

export default ResumeCard;
