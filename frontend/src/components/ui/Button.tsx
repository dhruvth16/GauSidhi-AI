type ButtonProps = {
  variant: "primary" | "secondary";
  text: string;
  size: "sm" | "md" | "lg";
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  const btnStyle =
    props.variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : "border-2 border-indigo-600 text-indigo-600";

  return (
    <button
      onClick={props.onClick}
      className={`${btnStyle} py-${
        props.size === "sm" ? 1 : props.size === "md" ? 1 : 2
      } cursor-pointer px-6 py-2 rounded-full transition`}
    >
      {props.text}
    </button>
  );
}

export default Button;
