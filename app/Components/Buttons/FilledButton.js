import "./style.css";

export default function FilledButton({
  title,
  className,
  beforeIcon,
  afterIcon,
  onClick,
  size,
}) {
  return (
    <div className={`filledButton ${size} ${className}`} onClick={onClick}>
      {beforeIcon}
      {title}
      {afterIcon}
    </div>
  );
}
