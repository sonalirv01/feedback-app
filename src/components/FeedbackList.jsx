import { useContext } from "react";
import FeedbackContext from "../contexts/FeedbackContext";
import FeedbackItem from "./FeedBackItem";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className="feedback-list">
      {feedback.length === 0 ? <p>No feedback yet!</p> : feedback.map((item) => <FeedbackItem key={item.id} item={item} />)}
    </div>
  );
};

export default FeedbackList;
