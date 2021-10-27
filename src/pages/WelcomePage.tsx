import React, { ChangeEventHandler, useState } from "react";

import triviaSrc from "../images/raster/trivia.png";
import { ReactComponent as WinCupIcon } from "../images/vector/win-cup.svg";
import { ReactComponent as StarIcon } from "../images/vector/star-circle.svg";
import { ReactComponent as ArrowDownIcon } from "../images/vector/arrow-down.svg";
import { useDispatch } from "react-redux";

import { fetchStatements } from "../actions/statementsActions";
import { GoButton } from "../components/GoButton";

export const difficultyLevels: ["easy", "hard"] = ["easy", "hard"];

const WelcomePage: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const [difficultyLevel, setDifficultyLevel] = useState(0);
    const [amount, setAmount] = useState(0);

    const onAmountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const val = e.target.value;
        const re = /^[0-9\b]+$/;
        if (val === "" || re.test(val)) {
            setAmount(Number(val));
        }
    };

    return (
        <div className={"backgroundOfWelcome"}>
            <div className={"introBox"}>
                <h1>Welcome to the</h1>
                <img
                    className={"superTitle"}
                    src={triviaSrc}
                    alt={"Game Title"}
                />
                <div className={"inputContainer"}>
                    <div className={"cont1"}>
                        <div className={"info"}>
                            <span>
                                <WinCupIcon className={"infoIcon winCupIcon"} />
                            </span>
                            <span className={"infoTitle"}>Difficulty</span>
                        </div>
                        <div className={"containerOfSelect"}>
                            <ArrowDownIcon className={"arrowDownIcon"} />
                            <select
                                className={"difficultySelect"}
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
                                        className={"opt"}
                                    >
                                        {renderValue}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={"cont2"}>
                        <div className={"info"}>
                            <div>
                                <StarIcon className={"infoIcon starIcon"} />
                            </div>
                            <div className={"infoTitle"}>Amount</div>
                        </div>
                        <input
                            className={"amountInput"}
                            type={"text"}
                            value={amount}
                            onChange={onAmountChange}
                        />
                    </div>
                </div>

                <GoButton
                    text={"Start"}
                    to={"/playing"}
                    myClass={"startButton"}
                    myFn={() => {
                        fetchStatements({
                            dispatch,
                            difficulty: difficultyLevels[difficultyLevel],
                            amount,
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default WelcomePage;
