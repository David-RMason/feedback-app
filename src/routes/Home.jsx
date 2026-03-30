import FeedbackForm from "../components/FeedbackForm/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats/FeedbackStats";
import FeedbackList from "../components/FeedbackList/FeedbackList";

export default function Home() {
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </>
  );
}
