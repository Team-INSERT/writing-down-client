import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import { backgroundMaker } from "../utils";

interface ColorPaletteProps extends HTMLAttributes<HTMLDivElement> {
  varient: string;
  selected?: boolean;
}

const ColorPalette = ({ varient, selected, ...props }: ColorPaletteProps) => {
  return (
    <div
      {...props}
      className={classNames(
        "flex items-center justify-center p-1 rounded-md",
        selected
          ? "border border-dashed border-cookie"
          : "border border-solid border-white"
      )}
    >
      <circle
        className={classNames(
          "w-8 h-8 rounded-full p-1",
          backgroundMaker(varient)
        )}
      >
        <div className="w-full h-full rounded-full border border-dashed border-white "></div>
      </circle>
    </div>
  );
};

export default ColorPalette;
