export default function Card_Forms({ children, className = [], show = true }) {
  if (!show) {
    return null;
  }
  const CssClass = [
    "bg-white border-2  border-solid border-line rounded-xl shadow-lows px-4 py-4",
  ];
  const classes = Array.isArray(className) ? className[0] : className;
  return <div className={`${CssClass} ${classes}`}>{children}</div>;
}
