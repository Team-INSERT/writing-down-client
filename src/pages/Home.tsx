import React from "react";
import Button from "../components/Button";
import Letter from "../components/Letter";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full min-h-[100vh] flex items-center justify-center gap-6 flex-col">
      <header className="flex flex-col justify-center items-center">
        <span className="text-2xl">어서오세요! 저희가 직접 준비했어요</span>
        <span className="text-3xl">끄적끄적, 선생님께 드리는 롤링페이퍼</span>
      </header>
      <Letter step={1} />
      <div className="flex flex-col gap-4">
        <Button onClick={() => navigate("/step/1")} varient="candy">
          선생님께 편지 쓰기
        </Button>
        <Button onClick={() => navigate("/letters")} varient="cookie">
          내가 받은 편지 읽기
        </Button>
      </div>
      <span>Made By 박우빈, 마현우, 오세민</span>
    </div>
  );
};

export default Home;
