import React, { ChangeEventHandler, useState } from "react";

import triviaSrc from "../images/raster/trivia.png";

import { ReactComponent as Ve001 } from "../images/vector/ve001.svg";
import { ReactComponent as Ve002 } from "../images/vector/ve002.svg";
import { ReactComponent as Ve003 } from "../images/vector/ve003.svg";
import { ReactComponent as Ve004 } from "../images/vector/ve004.svg";
import { useDispatch } from "react-redux";

import { fetchStatements } from "../actions/statementsActions";
import { GoButton } from "../components/GoButton";
import { useHistory } from "react-router";

import WelcomeStyles from "./WelcomeStyles.module.scss";
import { IntroInput } from "../components/IntroInput";

export const difficultyLevels: ["easy", "hard"] = ["easy", "hard"];

const WelcomePage: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const [difficultyLevel, setDifficultyLevel] = useState(0);
    const [amount, setAmount] = useState(10);

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
                <IntroInput
                    amount={amount}
                    setAmount={setAmount}
                    difficultyLevel={difficultyLevel}
                    setDifficultyLevel={setDifficultyLevel}
                />

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
