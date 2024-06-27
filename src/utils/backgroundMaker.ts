const backgroundMaker = (varient: string) => {
  switch (varient) {
    case "candy":
      return "bg-letter-candy";
    case "jelly":
      return "bg-letter-jelly";
    case "mint":
      return "bg-letter-mint";
    case "bluelemon":
      return "bg-letter-bluelemon";
    case "cotton":
      return "bg-letter-cotton";
    case "taffy":
      return "bg-letter-taffy";
    case "lollipop":
      return "bg-letter-lollipop";
    case "fudge":
      return "bg-letter-fudge";
    case "mentos":
      return "bg-letter-mentos";
  }
};

export default backgroundMaker;
