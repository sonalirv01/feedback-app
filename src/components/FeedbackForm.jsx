import { useState, useContext } from "react";
import FeedbackContext from "../contexts/FeedbackContext";

const FeedbackForm = () => {
  const { addFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !rating) return;

    addFeedback({ text, rating: Number(rating) });
    setText("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <input
        type="text"
        placeholder="Enter feedback..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
