import React, { ChangeEventHandler, useState } from "react";

import triviaSrc from "../images/raster/trivia.png";
import { ReactComponent as WinCupIcon } from "../images/vector/win-cup.svg";
import { ReactComponent as StarIcon } from "../images/vector/star-circle.svg";
import { ReactComponent as ArrowDownIcon } from "../images/vector/arrow-down.svg";

import { ReactComponent as Ve001 } from "../images/vector/ve001.svg";
import { ReactComponent as Ve002 } from "../images/vector/ve002.svg";
import { ReactComponent as Ve003 } from "../images/vector/ve003.svg";
import { ReactComponent as Ve004 } from "../images/vector/ve004.svg";
import { useDispatch } from "react-redux";

import { fetchStatements } from "../actions/statementsActions";
import { GoButton } from "../components/GoButton";
import { useHistory } from "react-router";

import WelcomeStyles from "./WelcomeStyles.module.scss";

export const difficultyLevels: ["easy", "hard"] = ["easy", "hard"];

const WelcomePage: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const [difficultyLevel, setDifficultyLevel] = useState(0);
    const [amount, setAmount] = useState(10);

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

    const history = useHistory();

    return (
        <div className={WelcomeStyles.backgroundOfWelcome}>
            <div className={WelcomeStyles.veLeft}>
                <Ve001 className={WelcomeStyles.ve001} />
                <Ve002 className={WelcomeStyles.ve002} />
            </div>
            <div className={WelcomeStyles.veRight}>
                <Ve003 className={WelcomeStyles.ve003} />
                <Ve004 className={WelcomeStyles.ve004} />
            </div>

            <div className={WelcomeStyles.introBox}>
                <h1>Welcome to the</h1>
                <img
                    className={WelcomeStyles.superTitle}
                    src={triviaSrc}
                    alt={"Game Title"}
                />
                <div className={WelcomeStyles.inputContainer}>
                    <div className={WelcomeStyles.cont1}>
                        <div className={WelcomeStyles.info}>
                            <span>
                                <WinCupIcon
                                    className={`${WelcomeStyles.infoIcon} ${WelcomeStyles.winCupIcon}`}
                                />
                            </span>
                            <span className={WelcomeStyles.infoTitle}>
                                Difficulty
                            </span>
                        </div>
                        <div className={WelcomeStyles.containerOfSelect}>
                            <ArrowDownIcon
                                className={WelcomeStyles.arrowDownIcon}
                            />
                            <select
                                className={WelcomeStyles.difficultySelect}
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
                                        className={WelcomeStyles.opt}
                                    >
                                        {renderValue}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={WelcomeStyles.cont2}>
                        <div className={WelcomeStyles.info}>
                            <div>
                                <StarIcon
                                    className={`${WelcomeStyles.infoIcon} ${WelcomeStyles.starIcon}`}
                                />
                            </div>
                            <div className={WelcomeStyles.infoTitle}>
                                Amount
                            </div>
                        </div>
                        <input
                            className={WelcomeStyles.amountInput}
                            type={"text"}
                            value={amount}
                            onChange={onAmountChange}
                        />
                    </div>
                </div>

                <GoButton
                    text={"Start"}
                    myClass={"startButton"}
                    myFn={() => {
                        if (amount < 1 || amount > 10) {
                            alert("Please enter amount between 1 and 10");
                        } else {
                            fetchStatements({
                                dispatch,
                                difficulty: difficultyLevels[difficultyLevel],
                                amount,
                            });
                            history.push("/playing");
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default WelcomePage;
