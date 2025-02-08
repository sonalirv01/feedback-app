import FeedbackProvider from "./contexts/FeedbackContext";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  return (
    <FeedbackProvider>
      <div className="app">
        <h1>Feedback App</h1>
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
};

export default App;
