import React from "react";

import { ReactComponent as ProfileIcon } from "../images/vector/profile.svg";

import { useDispatch, useSelector } from "react-redux";
import { IStatementsState } from "../reducers/statementsReducer";

import { GoButton } from "../components/GoButton";
import { emptyStatementsArray } from "../actions/statementsActions";
import { AnswerItem } from "../components/AnswerItem";
import { ScoreAsStars } from "../components/ScoreAsStars";
import { useHistory } from "react-router";
import ScoresStyles from "./ScoresStyles.module.scss";

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
                <div className={ScoresStyles.scoreBriefInfo}>
                    <div className={ScoresStyles.profileIconFrame}>
                        <ProfileIcon className={ScoresStyles.profileIcon} />
                    </div>
                    <div className={ScoresStyles.numbering}>
                        <div className={ScoresStyles.youScored}>You scored</div>
                        <div className={ScoresStyles.numbers}>
                            <span className={ScoresStyles.score}>{score}</span>/
                            <span className={ScoresStyles.len}>{len}</span>
                        </div>
                    </div>
                </div>
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
