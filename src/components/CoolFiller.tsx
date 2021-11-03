import React from "react";

import CoolFillerStyles from "./CoolFillerStyles.module.scss";

export const CoolFiller: React.FC<{ currStatementIndex: number; len: number }> =
    ({ currStatementIndex, len }) => {
        const percentage = ((currStatementIndex + 1) / len) * 100;

        return (
            <div className={CoolFillerStyles.coolFiller}>
                <div className={CoolFillerStyles.numbers}>
                    <span className={CoolFillerStyles.score}>
                        {currStatementIndex + 1}
                    </span>
                    <span className={CoolFillerStyles.slash}>/</span>
                    <span className={CoolFillerStyles.len}>{len}</span>
                </div>

                <div className={CoolFillerStyles.fullLine}>
                    <div
                        style={{ width: `${percentage}%` }}
                        className={CoolFillerStyles.fillerLine}
                    ></div>
                </div>
            </div>
        );
    };
