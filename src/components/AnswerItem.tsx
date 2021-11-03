import React from "react";
import { ReactComponent as XIcon } from "../images/vector/i-x.svg";
import { ReactComponent as BirdIcon } from "../images/vector/i-bird.svg";
import AnswerItemStyles from "./AnswerItemStyles.module.scss";

export const AnswerItem: React.FC<{ text: string; isCorrect: boolean }> = ({
    text,
    isCorrect,
}) => {
    const correctnessClass = isCorrect
        ? AnswerItemStyles.correct
        : AnswerItemStyles.incorrect;
    return (
        <div className={`${AnswerItemStyles.answerItem} ${correctnessClass}`}>
            <div className={AnswerItemStyles.text}>{text}</div>
            <div className={`${AnswerItemStyles.iconBox} ${correctnessClass}`}>
                {isCorrect ? (
                    <BirdIcon className={AnswerItemStyles.birdIcon} />
                ) : (
                    <XIcon className={AnswerItemStyles.xIcon} />
                )}
            </div>
        </div>
    );
};
