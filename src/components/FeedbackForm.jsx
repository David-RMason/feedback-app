import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

export default function FeedbackForm() {
  const [text, setText] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          ></input>
          <Button type="submit" isDisabled={false}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}
