import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from context",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  function editFeedback(item) {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  }

  function updateFeedback(id, updatedItem) {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item,
      ),
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
