//1.qn
aa = (f,s,t) => {
    var f,s,t;
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);
//output : 1 2 3
//largest value:  3

//2.qn
let n = [1,2,3];
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}
//output:6

//3.qn
const arr = [9,8,5,6,4,3,2,1];
(function(arr) {
 let sum = 0;
 for (var i = 0; i < arr.length; i++)
 {
    sum += arr[i];
 }
 console.log(sum);
 return sum;
})(arr);
//output: 38

//4.qn
var arr1 = ["guvi","geek","zen","fullstack"];
var ano = function(arr1) {
 for (var i = 0; i < arr1.length; i++) {
 console.log(arr1[i][0].toUpperCase() + arr1[i].slice(1));
 }
}
ano(arr1);
//output: Guvi,Geek,Zen,Fullstack

//5.qn
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++)
 {
  if(num%i===0)
  {
  return num;
  }
 }
 return num===1;
});
console.log(myPrime);
//output: 

//6.qn
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
//const sum1 = (a, b) =>a + b
const sum = num.reduce((a,b)=> a+b )
console.log(sum);
//output: 550

//7.qn
var arr1 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
(function(arr1,k) 
{
  var a=0;
  for(var i=0; i<arr1.length; i++)
  {
    if(k>a)
    {
        var l = arr1.shift();
        arr1.push(l)
        a++;
    }
  }
console.log(arr1)
})(arr1,k);
//output: [6,8,6,1,9,10,12,13,1,2,3]

//8.qn
var arr1 = ["guvi","geek","zen","fullstack"];
(function(arr1) {
 for (var i = 0; i < arr1.length; i++) {
 console.log(arr1[i][0].toUpperCase() + arr1[i].slice(1));
 }
})(arr1);
//output:Guvi,Geek,Zen,Fullstack

//9.qn
var arr1 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr1) {
    var a=[];
 for (var i = 0; i < arr1.length; i++) {
 if (arr1[i] % 2 !== 0) {
 a.push(arr1[i]);
 }}
console.log(a)
})(arr1);
//output:[1,3,5,7,79,7,9]

//10.qn
(function(str){
    var str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")
//output:dcba

//11.qn
var res = function(arr){
    for(var i=0; i < arr.length; i++){
    var newArr = [];
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
res(["guvi","geek","guvi","duplicate","geeK"])
//output: geek guvi, duplicate

