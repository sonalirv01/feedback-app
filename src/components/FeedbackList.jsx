import { useContext } from "react";
import { FeedbackContext } from "../contexts/FeedbackContext";
import FeedbackItem from "./FeedBackItem";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className="feedback-container">
      <h2>Feedback Received</h2>
      {feedback.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul className="feedback-list">
          {feedback.map((item, index) => (
            <FeedbackItem key={index} item={item} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
