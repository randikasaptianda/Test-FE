export default function CardForms({ children, className = [], show = true }) {
  if (!show) {
    return null;
  }
  const CssClass = ['bg-white border-2  border-solid border-line rounded-xl shadow-lows'];
  const classes = Array.isArray(className) ? className[0] : className;
  return <div className={`${CssClass} ${classes}`}>{children}</div>;
}
