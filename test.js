/* console.time('Array4---->');
var mask = '';
  for (let i = 0; i < 100; i++) {
    mask += '3';
  }
console.log(mask);
console.timeEnd('Array4---->');

console.time('Array2---->');
var a = Array.apply(null, Array(100)).map(function(item, i) {
  return 1;
});
console.log(a.join(''));
console.timeEnd('Array2---->');

console.time('Array3---->');
var b = Array(100).join(2);
console.log(b);
console.timeEnd('Array3---->');



console.time('Array1--');
function t1() {
  var arr = new Array(100), i=arr.length;
  while(i--){arr[i] = 0;}
  return arr.join('');
}
console.log(t1());
console.timeEnd('Array1--'); */

/* console.time('Array1--');
let a = new Array(100).fill(0);
console.log(a.join(''));

console.timeEnd('Array1--');  */

/* let arr = new Array(3).fill({name: "Mike"});
console.log(arr);
arr[0].name = "Ben";
console.log(arr); */

/* var a = ' 入住人 F F F 13586578127 M88888888 (身份证)';
var b;
a.replace(/(\d{18})|(\d{11})|([a-zA-Z]\d{8})/g, function(match, $1,$2,$3) {
  $1 && (b = b ? b.replace($1, '########') : a.replace($1, '########'));
  $3 && (b = b ? b.replace($3, '########') : a.replace($3, '########'));
  $2 && (b = b ? b.replace($2, '*****') : a.replace($2, '*****'));
});
console.log(b); */

/* let a = Object.entries({action:'asdf', channel: 123}).reduce((result, item) => {
  result.push(item.join('='));
  return result;
}, []).join('&')
console.log(a); */

/* function compire(a,b) {
  console.time('compire----->');
  var update = false;
  var a_f = parseFloat(a);
  var b_f = parseFloat(b);
  var a_3 = parseInt(a.split('.')[2]);
  var b_3 = parseInt(b.split('.')[2]);
  if(a_f < b_f) {
    update = true;
  } else if(a_f > b_f) {
    update = false;
  } else if(isNaN(a_3) && isNaN(b_3)) {
    update = false;
  } else if(!isNaN(a_3) && !isNaN(b_3) && a_3 < b_3){
    update = true;
  }else if (isNaN(a_3) && b_3 > 0) {
    update = true;
  }
  console.log(update);
  console.timeEnd('compire----->');
}
compire('2.3','10.2'); */
console.time('位运算---->');
var a = 100;
a = ~a;
// a = -a-1;
console.log(a);
console.timeEnd('位运算---->');