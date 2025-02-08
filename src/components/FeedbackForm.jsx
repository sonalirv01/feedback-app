import { useState, useContext } from "react";
import { FeedbackContext } from "../contexts/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const { addFeedback } = useContext(FeedbackContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addFeedback({ text, rating });
    setText("");
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <input
        type="text"
        placeholder="Write feedback..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        {[...Array(5)].map((_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1} Stars</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
