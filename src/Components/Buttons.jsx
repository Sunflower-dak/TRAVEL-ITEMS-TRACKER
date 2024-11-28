export default function Buttons({ type, children }) {
  return (
    <button className={`btn ${type === "secondary" ? "btn--secondary" : null}`}>
      {children}
    </button>
  );
}
