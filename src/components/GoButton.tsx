import React from "react";
import { Link } from "react-router-dom";

export const GoButton: React.FC<{
    to: string;
    myClass: string;
    myFn: Function;
    text: string;
}> = ({ to, myClass, myFn, text }) => {
    return (
        <Link
            to={to}
            className={`goButton ${myClass}`}
            onClick={() => {
                myFn();
            }}
        >
            <div className={"subShape"}>{text}</div>
        </Link>
    );
};
