import { useContext } from "react";
import FeedbackContext from "../contexts/FeedbackContext";
import { FaStar } from "react-icons/fa"; // Importing FontAwesome Star Icon

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <FaStar key={i} className="star-icon" />
    ));
  };

  return (
    <li className="feedback-item">
      <div className="feedback-content">
        <div className="stars">{renderStars(item.rating)}</div>
        <span className="feedback-text">{item.text}</span>
      </div>
      <button className="delete-btn" onClick={() => deleteFeedback(item.id)}>Delete</button>
    </li>
  );
};

export default FeedbackItem;
