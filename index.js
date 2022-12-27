const classes = () => {
  let allElementTag = document.getElementsByTagName("*");

  let allElement = Array.prototype.slice.call(allElementTag, 0);

  let eArry = [];
  allElement.forEach((element) => {
    eArry = [...eArry, element.classList];
  });

  let strClasses = "";
  console.log(eArry);
  eArry.forEach((e) => {
    strClasses += e.toString();
  });
  let classes = strClasses.split(" ");
  return classes;
};
