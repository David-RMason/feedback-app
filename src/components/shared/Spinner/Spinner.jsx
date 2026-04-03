import spinnerGif from "../../assets/Spinner.gif";
import "./Spinner.css";

export default function Spinner() {
  return <img src={spinnerGif} alt="Loading..." className="spinner" />;
}
