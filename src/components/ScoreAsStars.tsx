import React from "react";
import { ReactComponent as StarIcon } from "../images/vector/star.svg";

export const ScoreAsStars: React.FC<{
    percentage: number;
    count: number;
}> = ({ percentage, count }) => {
    const maxCount = 10;
    if (count > maxCount) count = maxCount;
    const scoredCount = Math.floor((count * percentage) / 100);
    return (
        <div className={"scoreAsStars"}>
            {Array(count)
                .fill(0)
                .map((_, index) => {
                    return (
                        <StarIcon
                            className={`starIcon ${
                                index + 1 <= scoredCount ? "scored" : "unScored"
                            }`}
                            key={index}
                        />
                    );
                })}
        </div>
    );
};
