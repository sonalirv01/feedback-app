import { FeedbackProvider } from "./contexts/FeedbackContext";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  return (
    <FeedbackProvider>
      <div className="container">
        <h2>Feedback App</h2>
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
};

export default App;
