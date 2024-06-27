import classNames from "classnames";
import React from "react";
import { rotateMaker } from "../utils";
import { useAtom } from "jotai";
import { letterAtom } from "../context";

const teacherStickerList = [
  { path: "/assets/유근찬.jpeg", name: "유근찬" },
  { path: "/assets/손정웅.jpeg", name: "손정웅" },
  { path: "/assets/이세준.jpeg", name: "이세준" },
  { path: "/assets/박민하.jpeg", name: "박민하" },
  { path: "/assets/유근찬.jpeg", name: "유근찬5" },
  { path: "/assets/유근찬.jpeg", name: "유근찬6" },
  { path: "/assets/유근찬.jpeg", name: "유근찬7" },
  { path: "/assets/유근찬.jpeg", name: "유근찬8" },
  { path: "/assets/유근찬.jpeg", name: "유근찬9" },
  { path: "/assets/유근찬.jpeg", name: "유근10" },
  { path: "/assets/유근찬.jpeg", name: "유근11" },
  { path: "/assets/유근찬.jpeg", name: "유근12" },
  { path: "/assets/유근찬.jpeg", name: "유근13" },
  { path: "/assets/유근찬.jpeg", name: "유근14" },
  { path: "/assets/유근찬.jpeg", name: "유근15" },
  { path: "/assets/유근찬.jpeg", name: "유근16" },
];

const rotateList = rotateMaker();

interface TeacherStickerProps {
  handleNextStepClick: () => void;
}

const TeacherSticker = ({ handleNextStepClick }: TeacherStickerProps) => {
  const [letter, setLetter] = useAtom(letterAtom);

  return (
    <main
      id="sticker--outer"
      className="moveLeft fixed w-80 h-fit bg-white rounded-lg p-3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-sm rotate-2"
    >
      <div
        id="sticker--inner"
        className="w-full h-full border border-dashed border-candy rounded-md flex flex-col p-4 gap-4"
      >
        <h1 id="sticker--title" className="text-lg">
          어떤 선생님에게 편지를 쓰시겠어요?
        </h1>
        <ul id="sticker--teacher" className="grid grid-cols-4 gap-2 h-fit">
          {teacherStickerList.map((teacher, index) => (
            <li
              key={teacher.name}
              id="sticker"
              onClick={() =>
                setLetter((prev) => ({ ...prev, addressee: teacher.name }))
              }
              className={classNames(
                "flex flex-col justify-center items-center gap-1 p-2",
                letter.addressee === teacher.name
                  ? "border border-dashed border-cookie rounded-md"
                  : "border border-solid border-white"
              )}
            >
              <img
                src={teacher.path}
                className={classNames("w-10", rotateList[index])}
                alt="sticker"
              />
              <span>{teacher.name}</span>
            </li>
          ))}
        </ul>
        <button onClick={handleNextStepClick} className="text-lg ml-auto">
          선택
        </button>
      </div>
    </main>
  );
};

export default TeacherSticker;
