import { useState, useContext } from "react";
import FeedbackContext from "../contexts/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const { addFeedback } = useContext(FeedbackContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addFeedback({ text, rating });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h3>How would you rate our service?</h3>
      <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(Number(e.target.value))} />
      <input type="text" placeholder="Write a review" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
