import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

export default function FeedbackItem({ item, handleDelete }) {
  function handleClick(id) {}

  return (
    <Card darkTheme={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
