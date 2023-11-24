// 独自関数
// function areaOfTrapezoid(upperBase, lowerBase, height) {
//   const result = ((upperBase + lowerBase) * height) / 2;
//   return result;
// }

// 変数に関数を代入
// const areaOfTrapezoid = function (upperBase, lowerBase, height) {
//   const result = ((upperBase + lowerBase) * height) / 2;
//   return result;
// };

// pを取得
const text = document.querySelector("p");

// 変数にアロー関数を代入
const areaOfTrapezoid = (upperBase, lowerBase, height) => {
  const result = ((upperBase + lowerBase) * height) / 2;
  return result;
};

const area = areaOfTrapezoid(5, 7, 4);
text.innerText = area;
// console.log(area);
