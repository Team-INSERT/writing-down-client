import classNames from "classnames";
import React, { ChangeEvent, HTMLAttributes } from "react";
import { backgroundMaker } from "../utils";
import { useAtom } from "jotai";
import { letterAtom } from "../context";

interface LetterProps extends HTMLAttributes<HTMLDivElement> {
  step: number;
}

const Letter = ({ step, ...props }: LetterProps) => {
  const [letter, setLetter] = useAtom(letterAtom);
  const background = backgroundMaker(letter.varient);
  const isWriting = step === 2;
  const isAuthor = step === 3;

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= 5000)
      setLetter((prev) => ({ ...prev, content: value }));
  };

  return (
    <main
      {...props}
      id="letter--outer"
      className={classNames("rounded-lg w-[22rem] h-96 p-3", background)}
    >
      <div
        id="letter--inner"
        className="rounded-md h-full border border-dashed p-4 border-white flex flex-col gap-4 overflow-y-scroll"
      >
        <header
          id="letter--header"
          className="w-full text-xl flex items-center py-1 justify-between "
        >
          <span id="letter--from--keyword">From.</span>
          <span id="letter--from--addressee">
            {letter.title} {letter.addressee} 선생님에게
          </span>
        </header>
        <textarea
          id="letter--contents"
          className="text-base h-full whitespace-pre-wrap resize-none outline-none bg-transparent"
          onChange={handleContentChange}
          value={letter.content}
          placeholder="내용을 입력해주세요"
          disabled={!isWriting}
        />
        <footer
          id="letter--footer"
          className="flex items-center justify-between text-lg"
        >
          {isWriting ? (
            <span id="letter--text--counter">{letter.content.length}/5000</span>
          ) : (
            <span></span>
          )}
          {isAuthor && (
            <div className="flex gap-2">
              <input
                className={classNames(
                  "bg-transparent border-b border-solid outline-none text-right"
                )}
                placeholder="익명"
              />
              <span id="letter--sender"> 올림</span>
            </div>
          )}
        </footer>
      </div>
    </main>
  );
};

export default Letter;
