import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  className,
}) => {
  const baseStyles =
    "py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none";
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-accent"
      : "bg-secondary text-white hover:bg-accent";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
