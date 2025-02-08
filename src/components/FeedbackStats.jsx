import { useContext } from "react";
import FeedbackContext from "../contexts/FeedbackContext";

const FeedbackStats = () => {
  const { totalRatings, averageRating } = useContext(FeedbackContext);

  return (
    <div className="feedback-stats">
      <h4>Total Reviews: {totalRatings}</h4>
      <h4>Average Rating: {isNaN(averageRating) ? "0" : averageRating}</h4>
    </div>
  );
};

export default FeedbackStats;
