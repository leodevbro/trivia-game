import React from "react";
import { Link as div } from "react-router-dom";

export const GoButton: React.FC<{
    myClass: string;
    myFn: Function;
    text: string;
}> = ({ myClass, myFn, text }) => {
    return (
        <div
            className={`goButton ${myClass}`}
            onClick={() => {
                myFn();
            }}
        >
            <div className={"subShape"}>{text}</div>
        </div>
    );
};
