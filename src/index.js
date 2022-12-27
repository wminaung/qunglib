const cssStrToPushAry = (classAry, className, prop, value) => {
  classAry.push(`.${className}{${prop}: ${value};}`);
};
export const createCss = (classNames) => {
  if (!Array.isArray(classNames)) {
    throw new Error("classNames must be Array");
  }
  const classAry = [];

  classNames.forEach((className) => {
    switch (className) {
      // text color || text align
      case "text-red":
        cssStrToPushAry(classAry, className, "color", "red");
        break;

      case "text-center":
        cssStrToPushAry(classAry, className, "text-align", "center");

        break;

      // background color
      case "bg-black":
        cssStrToPushAry(classAry, className, "background-color", "black");

        break;

      // font family
      case "font-mono":
        cssStrToPushAry(classAry, className, "font-family", "monospace");
        break;

      // display
      case "flex":
        cssStrToPushAry(classAry, className, "display", "flex");

        break;

      // opacity
      case "op-0":
        cssStrToPushAry(classAry, className, "opacity", "0");
        break;

      // width height
      case "w-100":
        cssStrToPushAry(classAry, className, "width", "100%");
        break;
    }
  });
  return classAry;
};

let returnCss = "";
const uniqueAry = [
  ...new Set(["bg-black", "text-red", "font-mono", "text-center", "bg-black"]),
];
createCss(uniqueAry).forEach((className) => {
  returnCss += className;
});

console.log(returnCss);
