//Q1
var arr = ["h", true, 12, "test"];

for (i = 0; i < arr.length; i++) {
  //console.log(typeof(arr[i]));
  if (typeof arr[i] === "number") {
    console.log(arr[i]);
  }
}


//Q2
var arr = [12, 1, 12, 345];

var obj = {};

for (i = 0; i < arr.length; i++) {
  obj[arr[i]] = 0;
}
//console.log(obj);

for (i = 0; i < arr.length; i++) {
  obj[arr[i]]++;
}
//console.log(obj);

for (var dupli in obj) {
  if (obj[dupli] !== 1) {
  console.log(dupli)
} }


//Q3:
var sumArr = [12, 124343, 343, 34545, 4545];
var total = 0;

for (i = 0; i < sumArr.length; i++) {
  total += sumArr[i];
}
console.log(total);

//04
var arr = [1, 2, 3, 6, 7, 8, 10];
var missing = [];
for (i = 1; i <= arr.length; i++) {
  if (arr.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing.toString());

  
