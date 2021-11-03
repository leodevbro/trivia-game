import React from "react";

import ButtonTrueStyles from "./ButtonTrueStyles.module.scss";

export const ButtonTrue: React.FC<{
    fn: (...args: any[]) => any;
    text: string;
}> = ({ fn, text }) => {
    return (
        <div className={ButtonTrueStyles.buttonTrue} onClick={(e) => fn()}>
            {text}
        </div>
    );
};
