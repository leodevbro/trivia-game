import React from "react";

import ButtonFalseStyles from "./ButtonFalseStyles.module.scss";

export const ButtonFalse: React.FC<{
    fn: (...args: any[]) => any;
    text: string;
}> = ({ fn, text }) => {
    return (
        <div className={ButtonFalseStyles.buttonFalse} onClick={(e) => fn()}>
            {text}
        </div>
    );
};
