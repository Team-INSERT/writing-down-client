import React from "react";
import Letter from "../components/Letter";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full min-h-[100vh] flex items-center justify-center gap-6 flex-col">
      <header className="flex flex-col justify-center items-center">
        <span className="text-3xl text-center">
          표시되는 이름을 입력해주세요!
          <br />
          입력하지 않으실 경우 익명으로 전달돼요
        </span>
      </header>
      <Letter step={3} />
      <div className="flex flex-col gap-4">
        <Button varient="cookie">전송하기</Button>
        <Button onClick={() => navigate("/step/2")} varient="candy">
          뒤로 가기
        </Button>
      </div>
      <span>Made By 박우빈, 마현우, 오세민</span>
    </div>
  );
};

export default Step3;
