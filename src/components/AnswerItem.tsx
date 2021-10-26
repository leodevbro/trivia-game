import React from "react";
import { ReactComponent as XIcon } from "../images/vector/i-x.svg";
import { ReactComponent as BirdIcon } from "../images/vector/i-bird.svg";

export const AnswerItem: React.FC<{ text: string; isCorrect: boolean }> = ({
    text,
    isCorrect,
}) => {
    return (
        <div className={`answerItem ${isCorrect ? "correct" : "incorrect"}`}>
            <div className={"text"}>{text}</div>
            <div className={`iconBox ${isCorrect ? "correct" : "incorrect"}`}>
                {isCorrect ? (
                    <BirdIcon className={"birdIcon"} />
                ) : (
                    <XIcon className={"xIcon"} />
                )}
            </div>
        </div>
    );
};
