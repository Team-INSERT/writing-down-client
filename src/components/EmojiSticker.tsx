import React from "react";

const EmojiSticker = () => {
  return (
    <main className="moveSticker p-2 fixed w-80 h-96 bg-white shadow-md rounded-lg">
      <div className="border border-dashed border-candy w-full h-full rounded-md p-3">
        드래그로 스티커를 붙여보세요
      </div>
    </main>
  );
};

export default EmojiSticker;
