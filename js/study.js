'use strict';
const fruits = ["사과", "배", "바나나", "딸기", "수박"]; //const가 배열안에 있는 객체를 고정하진 않는다.

fruits.forEach(fruit=> console.log(fruit));
console.log("=============================");

//배열에 값 뒤로 추가(push())
fruits.push("참외","오렌지","키위");
console.log(fruits);

//배열에 값 앞으로 추가(unshift())
console.log("=============================");
fruits.unshift("앵두","자두");
console.log(fruits);

//배열 값 삭제(pop())
console.log("=============================");
fruits.pop();
fruits.pop();
console.log(fruits); //값 2개가 뒤에서부터 삭제되었다.

//배열 값 삭제(shift())
console.log("=============================");
fruits.shift();
fruits.shift();
console.log(fruits); //값 2개가 앞에서부터 삭제되었다.

//특정요소위치부터 지정개수만큼 제거(splice(인덱스번호, 삭제개수))
console.log("=============================");
fruits.splice(2,1);
console.log(fruits);

fruits.splice(3);   //splice()에 인덱스번호만 적으면 그 위치부터 모두 제거한다.
console.log(fruits);
console.log("=============================");

fruits.splice(1,1,"옥수수", "자몽", "토마토");
console.log(fruits);
console.log("=============================");
fruits.splice(1,0,"감자");  //1번위치에 삭제는 하지 않고 '감자'만 추가한다.
console.log(fruits);

console.clear();
console.log("============================");
//slice() : 배열의 지정된 위치부터 자료를 발췌해서 보여줌
let imsiFruits = fruits.slice(2);
console.log(imsiFruits);
console.log(fruits);

//fruits배열의 인덱스번지 2번째부터 4번째 앞까지 가져오시오.
imsiFruits = fruits.slice(2,4);
console.log(imsiFruits);
console.log(fruits);

console.log("========================");
// 결합 : concat()
const concatFruits = fruits.concat(imsiFruits);
console.log(concatFruits);

//배열의 자료검색 : includes() - 있으면 true, 없으면 false
console.log(concatFruits.includes("옥수수"));
console.log(concatFruits.includes("옥소수"));

// indexOf() : 앞에서부터 있으면 위치값, 없으면 -1
console.log(concatFruits.indexOf("옥수수"));
console.log(concatFruits.indexOf("옥소수"));

// lastIndexOf() : 뒤에서부터 있으면 위치값, 없으면 -1
console.log(concatFruits.lastIndexOf("옥수수"));
console.log(concatFruits.lastIndexOf("옥소수"));