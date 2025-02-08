import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, rating: 4, text: "Great service!" },
    { id: 2, rating: 5, text: "Excellent experience!" },
    { id: 3, rating: 3, text: "Good but needs improvement." },
  ]);

  // Add feedback
  const addFeedback = (newFeedback) => {
    setFeedback([...feedback, { id: Date.now(), ...newFeedback }]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  // Total number of ratings
  const totalRatings = feedback.length;

  // Average rating calculation
  const averageRating =
    totalRatings > 0
      ? (feedback.reduce((acc, item) => acc + item.rating, 0) / totalRatings).toFixed(1)
      : 0;

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback, totalRatings, averageRating }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
