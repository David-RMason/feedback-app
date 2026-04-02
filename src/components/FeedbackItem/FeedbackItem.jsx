import { useContext } from "react";

import FeedbackContext from "../../context/feedbackContext";

import Card from "../shared/Card/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

import "./FeedbackItem.css";

export default function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card darkTheme={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
