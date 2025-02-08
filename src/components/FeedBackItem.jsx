import { useContext } from "react";
import FeedbackContext from "../contexts/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <li className="feedback-item">
      <strong>Rating:</strong> {item.rating} * - {item.text}
      <button className="delete-btn" onClick={() => deleteFeedback(item.id)}>❌</button>
    </li>
  );
};

export default FeedbackItem;
