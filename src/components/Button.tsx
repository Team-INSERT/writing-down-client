import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient: "candy" | "cookie";
}

const Button = ({ varient, children, ...props }: ButtonProps) => {
  const background = varient === "candy" ? "bg-candy" : "bg-cookie";
  return (
    <button
      {...props}
      id="button--outer"
      className={classNames("w-80 p-1 bg-candy rounded-lg", background)}
    >
      <div
        id="button--inner"
        className="rounded-md border border-dashed px-24 py-1 border-white w-full h-full flex items-center justify-center"
      >
        <span id="text" className="text-white text-xl">
          {children}
        </span>
      </div>
    </button>
  );
};

export default Button;
