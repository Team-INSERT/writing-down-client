import React from "react";
import Letter from "../components/Letter";
import Button from "../components/Button";
import ColorPalette from "../components/ColorPalette";
import { useAtom } from "jotai";
import { letterAtom } from "../context";
import { useNavigate } from "react-router-dom";
import EmojiSticker from "../components/EmojiSticker";
import TextSticker from "../components/TextSticker";

const varientList = [
  "candy",
  "jelly",
  "mint",
  "bluelemon",
  "cotton",
  "taffy",
  "lollipop",
  "fudge",
  "mentos",
];

const Step2 = () => {
  const [letter, setLetter] = useAtom(letterAtom);
  const navigate = useNavigate();

  const handleNextStepClick = () => {
    navigate("/step/3");
  };

  return (
    <div className="w-full h-full min-h-[100vh] flex items-center justify-center gap-6 flex-col">
      <header className="flex flex-col justify-center items-center">
        <span className="text-3xl">편지를 작성해주세요!</span>
      </header>
      <TextSticker />
      <Letter step={2} />
      <EmojiSticker />
      <section className="flex p-1 bg-white rounded-md shadow-sm">
        <div className="border border-dashed border-letter-candy flex rounded-sm p-2">
          {varientList.map((varient) => (
            <ColorPalette
              onClick={() => setLetter((prev) => ({ ...prev, varient }))}
              key={varient}
              varient={varient}
              selected={varient === letter.varient}
            />
          ))}
        </div>
      </section>
      <div className="flex flex-col gap-4">
        <Button onClick={handleNextStepClick} varient="cookie">
          다음
        </Button>
        <Button onClick={() => navigate("/step/1")} varient="candy">
          뒤로 가기
        </Button>
      </div>
    </div>
  );
};

export default Step2;
