export default function Card({ children, darkTheme = false }) {
  return <div className={`card ${darkTheme && "-dark"}`}>{children}</div>;
}
