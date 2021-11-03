import React from "react";

import { AnswerItem } from "../components/AnswerItem";
import { IStatement } from "../reducers/statementsReducer";

import AllResultsStyles from "./AllResultsStyles.module.scss";

export const AllResults: React.FC<{ statements: IStatement[] }> = ({
    statements,
}) => {
    return (
        <div className={AllResultsStyles.allResults}>
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
    );
};
