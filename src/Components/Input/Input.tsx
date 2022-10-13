import React, { forwardRef } from "react";

import "./Input.css";
type InputPropsTypes = {
  onChangeInputHandler: Function;
  content: string;
  type: string;
  validation: {
    length: number;
    regEx?: RegExp | string;
  };
};

const Input: React.FunctionComponent<InputPropsTypes> = ({
  onChangeInputHandler,
  content,
  type,
  validation: { length, regEx },
}) => {
  return (
    <div className="inputContainer">
      <input
        type={type}
        onChange={(e) => onChangeInputHandler(e)}
        onFocus={(e) => {
          e.currentTarget.parentElement?.children[1].classList.add("active");
          if (e.currentTarget.value.length <= length)
            return e.currentTarget.parentElement?.children[1].classList.remove(
              "done"
            );
        }}
        onBlur={(e) => {
          if (e.currentTarget.value.length >= length) {
            e.currentTarget.parentElement?.children[1].classList.add("done");
            return;
          } else {
            e.currentTarget.parentElement?.children[1].classList.remove(
              "active"
            );
            return e.currentTarget.parentElement?.children[1].classList.remove(
              "done"
            );
          }
        }}
      />
      <p className="inputHelper w-max h-4  flex items-center justify-center absolute ">
        {content}
      </p>
    </div>
  );
};

export default Input;
