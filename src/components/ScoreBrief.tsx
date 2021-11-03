import React from "react";

import { ReactComponent as ProfileIcon } from "../images/vector/profile.svg";

import ScoreBriefStyles from "./ScoreBriefStyles.module.scss";

export const ScoreBrief: React.FC<{ score: number; len: number }> = ({
    score,
    len,
}) => {
    return (
        <div className={ScoreBriefStyles.scoreBriefInfo}>
            <div className={ScoreBriefStyles.profileIconFrame}>
                <ProfileIcon className={ScoreBriefStyles.profileIcon} />
            </div>
            <div className={ScoreBriefStyles.numbering}>
                <div className={ScoreBriefStyles.youScored}>You scored</div>
                <div className={ScoreBriefStyles.numbers}>
                    <span className={ScoreBriefStyles.score}>{score}</span>/
                    <span className={ScoreBriefStyles.len}>{len}</span>
                </div>
            </div>
        </div>
    );
};
