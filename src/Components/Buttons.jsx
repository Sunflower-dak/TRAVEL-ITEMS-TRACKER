export default function Buttons({ buttonType, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : null}`}
    >
      {children}
    </button>
  );
}
