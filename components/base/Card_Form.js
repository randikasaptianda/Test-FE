export default function Card_Form({ children, className = [], show = true }) {
  if (!show) {
    return null;
  }
  const CssClass = [
    "bg-white border  border-solid border-line rounded-xl shadow-lows px-8 py-8",
  ];
  const classes = Array.isArray(className) ? className[0] : className;
  return <div className={`${CssClass} ${classes}`}>{children}</div>;
}
