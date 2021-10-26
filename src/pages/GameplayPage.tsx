import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { IStatementsState } from "../reducers/statementsReducer";
import { answerStatement } from "../actions/statementsActions";
import { useHistory } from "react-router-dom";

const GameplayPage: React.FC<{}> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const statements = useSelector(
        (state: { statements: IStatementsState }) => state.statements.statements
    );
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

    if (len === 0) return <span className={"spinner"}></span>;

    const percentage = ((currStatementIndex + 1) / len) * 100;

    const currSM = statements[currStatementIndex];
    return (
        <div className={"backgroundOfGameplay"}>
            <div className={"playBox"}>
                <h1>{currSM.category}</h1>
                <div className={"levelName"}>Level 1</div>

                <div className={"coolFiller"}>
                    <div className={"numbers"}>
                        <span className={"score"}>
                            {currStatementIndex + 1}
                        </span>
                        <span className={"slash"}>/</span>
                        <span className={"len"}>{len}</span>
                    </div>

                    <div className={"fullLine"}>
                        <div
                            style={{ width: `${percentage}%` }}
                            className={"fillerLine"}
                        ></div>
                    </div>
                </div>

                <div className={"statement"}>{currSM.question}</div>

                <div className={"answer"}>
                    <div
                        className={"buttonTrue"}
                        onClick={() => handleAnswer(true)}
                    >
                        TRUE
                    </div>
                    <div
                        className={"buttonFalse"}
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
