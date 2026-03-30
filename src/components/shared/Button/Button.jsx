import "./Button.css";

export default function Button({
  children,
  theme = "primary",
  type,
  isDisabled = false,
}) {
  return (
    <button type="type" disabled={isDisabled} className={`btn btn-${theme}`}>
      {children}
    </button>
  );
}
