import clsx from "clsx";
import cn from "./style.module.scss";
import { FC } from "react";
import { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({
  children,
  className,
  buttonSize = "midle",
  buttonStyle = "border-usual",
  ...props
}) => {
  console.log("button", children);

  return (
    <button
      className={clsx(
        cn[buttonSize],
        cn[buttonStyle],
        cn[Array.isArray(children) ? "flex" : "block"],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
