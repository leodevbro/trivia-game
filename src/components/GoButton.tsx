import React from "react";
import { Link as div } from "react-router-dom";
import GoButtonStyles from "./GoButtonStyles.module.scss";

export const GoButton: React.FC<{
    myClass: string;
    myFn: Function;
    text: string;
}> = ({ myClass, myFn, text }) => {
    return (
        <div
            className={`${GoButtonStyles.goButton} ${GoButtonStyles[myClass]}`}
            onClick={() => {
                myFn();
            }}
        >
            <div className={GoButtonStyles.subShape}>{text}</div>
        </div>
    );
};
