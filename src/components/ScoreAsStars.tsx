import React from "react";
import { ReactComponent as StarIcon } from "../images/vector/star.svg";
import ScoreAsStarsStyles from "./ScoreAsStarsStyles.module.scss";

export const ScoreAsStars: React.FC<{
    percentage: number;
    count: number;
}> = ({ percentage, count }) => {
    const maxCount = 10;
    if (count > maxCount) count = maxCount;
    const scoredCount = Math.floor((count * percentage) / 100);

    return (
        <div className={ScoreAsStarsStyles.scoreAsStars}>
            {Array(count)
                .fill(0)
                .map((_, index) => {
                    const scoreBoolStyle =
                        index + 1 <= scoredCount
                            ? ScoreAsStarsStyles.scored
                            : ScoreAsStarsStyles.unScored;

                    return (
                        <StarIcon
                            className={`${ScoreAsStarsStyles.starIcon} ${scoreBoolStyle}`}
                            key={index}
                        />
                    );
                })}
        </div>
    );
};
