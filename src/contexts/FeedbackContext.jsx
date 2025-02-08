import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This is great!", rating: 5 },
    { id: 2, text: "Could be better.", rating: 3 },
  ]);

  // Function to add feedback
  const addFeedback = (newFeedback) => {
    setFeedback([...feedback, { id: Date.now(), ...newFeedback }]);
  };

  // Function to delete feedback
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
