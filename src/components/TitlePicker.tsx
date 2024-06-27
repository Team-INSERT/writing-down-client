import classNames from "classnames";
import { useAtom } from "jotai";
import { letterAtom } from "../context";
import { useNavigate } from "react-router-dom";

const titleList = [
  "친애하는",
  "공경하는",
  "존경하는",
  "사랑하는",
  "감사한",
  "내 최애 ",
  "귀여운",
  "잘생긴",
  "멋진",
  "아름다운",
  "트렌디한",
  "없음",
];

interface TitlePickerProps {
  cancel: () => void;
}

const TitlePicker = ({ cancel }: TitlePickerProps) => {
  const [letter, setLetter] = useAtom(letterAtom);
  const navigate = useNavigate();

  const handleNextStepClick = () => {
    if (letter.title === "없음") setLetter((prev) => ({ ...prev, title: "" }));
    navigate("/step/2");
  };

  return (
    <main
      id="sticker--outer"
      className="moveRight fixed w-80 h-fit bg-white rounded-lg p-3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-sm rotate-2"
    >
      <div
        id="sticker--inner"
        className="w-full h-full border border-dashed border-candy rounded-md flex flex-col p-4 gap-4"
      >
        <h1 id="sticker--title" className="text-lg">
          어떤 호칭을 사용하시겠어요?
        </h1>
        <ul id="sticker--teacher" className="grid grid-cols-4 gap-2 h-fit">
          {titleList.map((title, index) => (
            <li
              key={title}
              id="sticker"
              onClick={() => setLetter((prev) => ({ ...prev, title }))}
              className={classNames(
                "flex flex-col justify-center items-center gap-1 p-2",
                title === letter.title
                  ? "border border-dashed border-cookie rounded-md"
                  : "border border-solid border-white"
              )}
            >
              <span>{title}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-5 ml-auto">
          <button onClick={cancel} className="text-lg">
            뒤로
          </button>
          <button onClick={handleNextStepClick} className="text-lg">
            선택
          </button>
        </div>
      </div>
    </main>
  );
};

export default TitlePicker;
