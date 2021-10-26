import React from "react";

import { ReactComponent as ProfileIcon } from "../images/vector/profile.svg";

import { useDispatch, useSelector } from "react-redux";
import { IStatementsState } from "../reducers/statementsReducer";

import { GoButton } from "../components/GoButton";
import { emptyStatementsArray } from "../actions/statementsActions";
import { AnswerItem } from "../components/AnswerItem";
import { ScoreAsStars } from "../components/ScoreAsStars";

const ScorePage: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const statements = useSelector(
        (state: { statements: IStatementsState }) => state.statements.statements
    );

    const len = statements.length;
    const correctItems = statements.filter(
        (x) => x.correct_answer === x.answerOfUser
    );
    const score = correctItems.length;

    return (
        <div className={"backgroundOfScore"}>
            <div className={"columnBox"}>
                <div className={"scoreBriefInfo"}>
                    <div className={"profileIconFrame"}>
                        <ProfileIcon className={"profileIcon"} />
                    </div>
                    <div className={"numbering"}>
                        <div className={"youScored"}>You scored</div>
                        <div className={"numbers"}>
                            <span className={"score"}>{score}</span>/
                            <span className={"len"}>{len}</span>
                        </div>
                    </div>
                </div>
                <ScoreAsStars percentage={(100 * score) / len} count={len} />

                <div className={"allAnswers"}>
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
                    to={"/"}
                    myClass={"playAgainButton"}
                    myFn={() => dispatch(emptyStatementsArray())}
                />
            </div>
        </div>
    );
};

export default ScorePage;
