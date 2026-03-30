import "./Header.css";

export default function Header({ heading = "Hero" }) {
  return (
    <header>
      <div className="container">
        <h2>{heading}</h2>
      </div>
    </header>
  );
}
