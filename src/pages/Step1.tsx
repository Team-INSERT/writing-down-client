import React, { useState } from "react";
import Letter from "../components/Letter";
import Button from "../components/Button";
import TeacherSticker from "../components/TeacherSticker";
import TitlePicker from "../components/TitlePicker";

const Step1 = () => {
  const [isNextStep, setIsNextStep] = useState(false);

  const handleNextStepClick = () => {
    setIsNextStep((prev) => !prev);
  };

  return (
    <div className="w-full h-full min-h-[100vh] flex items-center justify-center gap-6 flex-col">
      <header className="flex flex-col justify-center items-center">
        <span className="text-3xl">어떤 선생님에게 편지를 쓰시겠어요?</span>
      </header>
      <Letter step={1} />
      <TeacherSticker handleNextStepClick={handleNextStepClick} />
      {isNextStep && <TitlePicker cancel={handleNextStepClick} />}
      <div className="flex flex-col gap-4">
        <Button disabled varient="cookie">
          다음
        </Button>
      </div>
      <span>Made By 박우빈, 마현우, 오세민</span>
    </div>
  );
};

export default Step1;
