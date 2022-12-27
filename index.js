const classesAry = () => {
  let allElementTag = document.getElementsByTagName("*");

  let allElement = Array.prototype.slice.call(allElementTag, 0);

  let eArry = [];

  allElement.forEach((element) => {
    eArry = [...eArry, element.classList.value.split(" ")];
  });

  let strClasses = [];

  eArry.forEach((e) => {
    strClasses = strClasses.concat(e);
  });
  strClasses = strClasses.toString();

  let classes = [...new Set(strClasses.split(","))];
  return classes;
};
// console.log(classesAry());
const getData = () => {
  axios
    .post("http://localhost:3000", { data: JSON.stringify(classesAry()) })
    .then(function (response) {})
    .catch((err) => console.log(err));
};
getData();
