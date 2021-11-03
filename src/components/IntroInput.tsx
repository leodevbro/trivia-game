import React, { ChangeEventHandler } from "react";

import { ReactComponent as WinCupIcon } from "../images/vector/win-cup.svg";
import { ReactComponent as StarIcon } from "../images/vector/star-circle.svg";
import { ReactComponent as ArrowDownIcon } from "../images/vector/arrow-down.svg";

import IntroInputStyles from "./IntroInputStyles.module.scss";

export const difficultyLevels: ["easy", "hard"] = ["easy", "hard"];

export const IntroInput: React.FC<{
    difficultyLevel: number;
    setDifficultyLevel: React.Dispatch<React.SetStateAction<number>>;
    amount: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ difficultyLevel, setDifficultyLevel, amount, setAmount }) => {
    const onAmountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const val = e.target.value;
        const re = /^[0-9\b]+$/;
        if (val === "") {
            setAmount(Number(val));
        } else if (re.test(val)) {
            let nVal = Number(val);
            nVal = Math.max(nVal, 1);
            nVal = Math.min(nVal, 10);
            setAmount(nVal);
        }
    };

    return (
        <div className={IntroInputStyles.inputContainer}>
            <div className={IntroInputStyles.cont1}>
                <div className={IntroInputStyles.info}>
                    <span>
                        <WinCupIcon
                            className={`${IntroInputStyles.infoIcon} ${IntroInputStyles.winCupIcon}`}
                        />
                    </span>
                    <span className={IntroInputStyles.infoTitle}>
                        Difficulty
                    </span>
                </div>
                <div className={IntroInputStyles.containerOfSelect}>
                    <ArrowDownIcon className={IntroInputStyles.arrowDownIcon} />
                    <select
                        className={IntroInputStyles.difficultySelect}
                        value={difficultyLevel}
                        id={"selectLevel"}
                        onChange={(e) => {
                            const val = e.target.value;
                            setDifficultyLevel(Number(val));
                        }}
                    >
                        {difficultyLevels.map((renderValue, i) => (
                            <option
                                key={i}
                                value={String(i)}
                                className={IntroInputStyles.opt}
                            >
                                {renderValue}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={IntroInputStyles.cont2}>
                <div className={IntroInputStyles.info}>
                    <div>
                        <StarIcon
                            className={`${IntroInputStyles.infoIcon} ${IntroInputStyles.starIcon}`}
                        />
                    </div>
                    <div className={IntroInputStyles.infoTitle}>Amount</div>
                </div>
                <input
                    className={IntroInputStyles.amountInput}
                    type={"text"}
                    value={amount}
                    onChange={onAmountChange}
                />
            </div>
        </div>
    );
};
