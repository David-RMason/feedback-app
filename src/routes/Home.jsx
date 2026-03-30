import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import FeedbackForm from "../components/FeedbackForm/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats/FeedbackStats";
import FeedbackList from "../components/FeedbackList/FeedbackList";

import feedbackData from "../data/feedbackData";

export default function Home() {
  const [feedback, setFeedback] = useState(feedbackData);

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  }
  return (
    <>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
}
