const rotateList = [
  "-rotate-12",
  "-rotate-6",
  "-rotate-3",
  "",
  "rotate-3",
  "rotate-6",
  "rotate-12",
];

const rotateMaker = () => {
  const teacherRotateList = [];
  for (let i = 0; i < 16; i += 1) {
    const sign = Math.round(Math.random() * 6);
    teacherRotateList.push(rotateList[sign]);
  }
  return teacherRotateList;
};

export default rotateMaker;
