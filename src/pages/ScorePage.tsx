import React from "react";


import { useDispatch, useSelector } from "react-redux";
import { IStatementsState } from "../reducers/statementsReducer";

import { GoButton } from "../components/GoButton";
import { emptyStatementsArray } from "../actions/statementsActions";
import { AnswerItem } from "../components/AnswerItem";
import { ScoreAsStars } from "../components/ScoreAsStars";
import { useHistory } from "react-router";
import ScoresStyles from "./ScoresStyles.module.scss";
import { ScoreBrief } from "../components/ScoreBrief";

const ScorePage: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const statementsBox = useSelector(
        (state: { statements: IStatementsState }) => state.statements
    );
    const statements = statementsBox.statements;

    const len = statements.length;

    if (len === 0) {
        history.push("/");
    }
    const correctItems = statements.filter(
        (x) => x.correct_answer === x.answerOfUser
    );
    const score = correctItems.length;

    return (
        <div className={ScoresStyles.backgroundOfScore}>
            <div className={ScoresStyles.columnBox}>
                <ScoreBrief score={score} len={len} />

                <ScoreAsStars percentage={(100 * score) / len} count={len} />

                <div className={ScoresStyles.allAnswers}>
                    {statements.map((statement, i) => {
                        const isCorrect =
                            statement.answerOfUser === statement.correct_answer;
                        return (
                            <AnswerItem
                                key={i}
                                text={statement.question}
                                isCorrect={isCorrect}
                            />
                        );
                    })}
                </div>
                <GoButton
                    text={"Play Again"}
                    myClass={"playAgainButton"}
                    myFn={() => {
                        dispatch(emptyStatementsArray());
                        history.push("/");
                    }}
                />
            </div>
        </div>
    );
};

export default ScorePage;
