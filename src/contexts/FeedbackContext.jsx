import { createContext, useState } from "react";

export const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  // Add feedback
  const addFeedback = (newFeedback) => {
    setFeedback([...feedback, newFeedback]);
  };

  // Delete feedback
  const deleteFeedback = (index) => {
    setFeedback(feedback.filter((_, i) => i !== index));
  };

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
