import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

import feedbackData from "./data/feedbackData";

export default function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header heading="Feedback UI" />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
