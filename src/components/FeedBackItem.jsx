import { useContext } from "react";
import { FeedbackContext } from "../contexts/FeedbackContext";

const FeedbackItem = ({ item, index }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <li className="feedback-item">
      <span className="stars">{"★".repeat(item.rating)}</span>
      <p className="feedback-text">{item.text}</p>
      <button className="delete-btn" onClick={() => deleteFeedback(index)}>Delete</button>
    </li>
  );
};

export default FeedbackItem;
