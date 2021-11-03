import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { IStatementsState } from "../reducers/statementsReducer";
import { answerStatement } from "../actions/statementsActions";
import { useHistory } from "react-router-dom";
import GameplayStyles from "./GameplayStyles.module.scss";
import { CoolFiller } from "../components/CoolFiller";

const GameplayPage: React.FC<{}> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const statementsBox = useSelector(
        (state: { statements: IStatementsState }) => state.statements
    );
    const statements = statementsBox.statements;
    const len = statements.length;

    const [currStatementIndex, setCurrStatementIndex] = useState(0);

    const handleAnswer = (boo: boolean) => {
        if (currStatementIndex >= len - 1) {
            dispatch(answerStatement(currStatementIndex, boo));
            history.push("score");
        } else {
            dispatch(answerStatement(currStatementIndex, boo));
            setCurrStatementIndex((x) => x + 1);
        }
    };

    if (!statementsBox.loading && len === 0) {
        history.push("/");
    }

    if (len === 0) {
        return <span className={"spinner"}></span>; // spinner is meant to be global class
    }

    const currSM = statements[currStatementIndex];
    return (
        <div className={GameplayStyles.backgroundOfGameplay}>
            <div className={GameplayStyles.playBox}>
                <h1>{currSM.category}</h1>
                <div className={GameplayStyles.levelName}>Level 1</div>

                <CoolFiller len={len} currStatementIndex={currStatementIndex} />

                <div className={GameplayStyles.statement}>
                    {currSM.question}
                </div>

                <div className={GameplayStyles.answer}>
                    <div
                        className={GameplayStyles.buttonTrue}
                        onClick={() => handleAnswer(true)}
                    >
                        TRUE
                    </div>
                    <div
                        className={GameplayStyles.buttonFalse}
                        onClick={() => handleAnswer(false)}
                    >
                        FALSE
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameplayPage;
