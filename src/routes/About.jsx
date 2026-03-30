import { Link } from "react-router-dom";
import Card from "../components/shared/Card/Card";

export default function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product or services.</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to={{ pathname: "/" }}>Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}
