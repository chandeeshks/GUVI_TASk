//Solve problem using anonymous function.
//1. print odd number in an array.
console.log("Below problems solved using Anonymous function")
var arr=[1,2,3,4,5,6,7,8,9,10];
var oddnumber = function(arr)
{
    var odd=[];
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]%2 !==0)
        odd.push(arr[i]);
   }
   console.log(odd);
}
oddnumber(arr);
//output:[1,3,5,7,9]

//2. Convert all the string to little caps in a string array.
var str=["hello",'guys'];
var convert = function(str)
{
    var upercase=[];
    for(var i=0; i<str.length; i++)
    {
        var el=str[i].split("");
        var s="";
        for(var j=0; j<el.length; j++)
        {
            s+=el[j].toUpperCase();
        }
       upercase.push(s);
    }
    return upercase;
}
console.log(`Uppercase strings are ${convert(str)}`);
//output: Uppercase strings are HELLO,GUYS


//3. Sum of all numbers in an array 
var number=[11,12,13,14,15];
var add1=function(number)
{
   var total=0;
   for(var i=0; i<number.length; i++)
   {
    total+=number[i];
   }
   return total;
}
console.log(`Total value is ${add1(number)}`);
//output: Total value is 65

//4.Return all the prime number in an array
var num1=[2,3,4,5,6,7,8,9,10];
var primenum = function(num)
{
    var prime=[];
   for(var i=0; i<num1.length; i++)
   {
    let element = num1[i];
    var count=0;
    for(var j=2; j<element; j++)
    {
        if(element%j ===0)
        count++;
    }
    if(count==0){
    prime.push(element);
    }
   }
   return prime;
}

var varialbe= primenum(num1);
console.log(`Prime number are ${varialbe}`);
//output: prime number are [2,3,5,7]

//5. Return all the palindrome in an array
var palinarr=["aaabaaa","abcabc"];
var checkpalin = function(palinarr)
{
    var palin=[];
     for(var i=0; i<palinarr.length; i++)
     {
        var s="";
        var ele=palinarr[i].split("");
        for(var j=ele.length-1; j>=0; j--)
        {
            s+=(ele[j]);
        }
        if(s===palinarr[i]){
        palin.push(palinarr[i]);
        }
     }
     console.log(`palindrom are ${palin.join("")}`);
}
checkpalin(palinarr);
//output: palinfrom are aaabaaa

//6. Return median of two sorted arrays of the same size
var a1=[1,12,15,26];
var a2=[2,13,17,30];

let median = function(a1,a2)
{
 var merge = a1.concat(a2);
 var asc;
 for(i=0; i<merge.length; i++)
 {
    for(var j=i+1; j<merge.length; j++)
    {
      if(merge[i]>merge[j]){
          asc=merge[i];
          merge[i]=merge[j];
          merge[j]=asc;
      }
    }
 }
 var ascending=merge;
 var len=ascending.length/2;
 var b=2;
 var c=0;
 var add=0;
 for(x=0; x<ascending.length; x++)
 {
  if (x===(len-1) || x===(len) && b>c){
  add+=parseInt(ascending[x]);
  c++;
  }
  
 }
 console.log(`The median value is ${add/2}`);
}

median(a1,a2);
//output: The median value is 14
  
//7. Remove duplicates from array, 2ways to solve
    //1way!
var n=[1,4,7,13,4,5,7];
const duplicatenumber = function(n)
{
    var unique=[];
    for(var i=0; i<n.length; i++)
    {
        var count=0;
        for(var j=i+1; j<n.length; j++)
        {
            if(n[i]===n[j])
            count++;
        }
        if(count===0)
        unique.push(n[i]);
    }
    return unique;
}
console.log(`1way ${duplicatenumber(n)}`);
          //2way
   var n=[1,4,7,13,4,5,7];
const duplicatenum = function(n)
{
    var newarray = new Set(n);
    console.log("2way"+Array.from(newarray));
}
duplicatenum(n);
//output: [1,4,5,7,13]

//8.Rotate an array by k times
var rotate=3;
var arrnum=[100,200,300,400,500,600];
let rotatanumber = function(arrnum)
{
    var a=1;
    
    for(var i=0; i<arrnum.length; i++)
    {
        if(a<=rotate)
        {
        const l= arrnum.shift();
        arrnum.push(l);
        a++;
        }
    }
    return arrnum;
}
console.log(rotatanumber(arrnum));
//output : [400,500,600,700]
console.log("--------------------------------------------------------------------------------")
console.log("Below problems solved using IIFE function")

//1. print odd number in an array.
var arr=[1,2,3,4,5,6,7,8,9,10];
( function (arr){
    
    var odd=[];
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]%2 !==0)
        odd.push(arr[i]);
   }
   console.log(`Odd numbers are ${odd}`);
})(arr);
//output:[1,3,5,7,9]

//2.Convert all the string to little caps in a string array.

(function()
{
    var str=["hello",'guys'];
    var upercase=[];
    for(var i=0; i<str.length; i++)
    {
        var el=str[i].split("");
        var s="";
        for(var j=0; j<el.length; j++)
        {
            s+=el[j].toUpperCase();
        }
       upercase.push(s);
    }
    console.log(`Uppercase strings are ${convert(str)}`);
})();
//output: Uppercase strings are HELLO,GUYS

//3. Sum of all numbers in an array 
var number=[11,12,13,14,15];
(function()
{
    var total=0;
    for(var i=0; i<number.length; i++)
    {
     total+=number[i];
    }
    console.log(`Total value is ${add1(number)}`);
})(number);
////output: Total value is 65

//4.Return all the prime number in an array
var num1=[2,3,4,5,6,7,8,9,10];
(function()
{
    var prime=[];
    for(var i=0; i<num1.length; i++)
    {
     let element = num1[i];
     var count=0;
     for(var j=2; j<element; j++)
     {
         if(element%j ===0)
         count++;
     }
     if(count==0){
     prime.push(element);
     }
    }
    console.log(`Prime number are ${varialbe}`);
})(num1);
////output: prime number are [2,3,5,7]


//5. Return all the palindrome in an array
var palinarr=["aaabaaa","abcabc"];
(function(){
    var palin=[];
    for(var i=0; i<palinarr.length; i++)
    {
       var s="";
       var ele=palinarr[i].split("");
       for(var j=ele.length-1; j>=0; j--)
       {
           s+=(ele[j]);
       }
       if(s===palinarr[i]){
       palin.push(palinarr[i]);
       }
    }
    console.log(`palindrom are ${palin.join("")}`);
})();
//output: palinfrom are aaabaaa

//6. Return median of two sorted arrays of the same size
var a1=[1,12,15,26];
var a2=[2,13,17,30];
(function(){
    var merge = a1.concat(a2);
    var asc;
    for(i=0; i<merge.length; i++)
    {
       for(var j=i+1; j<merge.length; j++)
       {
         if(merge[i]>merge[j]){
             asc=merge[i];
             merge[i]=merge[j];
             merge[j]=asc;
         }
       }
    }
    var ascending=merge;
    var len=ascending.length/2;
    var b=2;
    var c=0;
    var add=0;
    for(x=0; x<ascending.length; x++)
    {
     if (x===(len-1) || x===(len) && b>c){
     add+=parseInt(ascending[x]);
     c++;
      }
    }
    console.log(`The median value is ${add/2}`);
})(a1,a2);
//output: The median value is 14

//7. Remove duplicates from array
var n=[1,4,7,13,4,5,7];
(function()
{
    var unique=[];
    for(var i=0; i<n.length; i++)
    {
        var count=0;
        for(var j=i+1; j<n.length; j++)
        {
            if(n[i]===n[j])
            count++;
        }
        if(count===0)
        unique.push(n[i]);
    }
    console.log(`Answer is ${duplicatenumber(n)}`);
})();
//output: Answer is 1,13,4,5,7

//8.Rotate an array by k times

var rotate=3;
var arrnum=[100,200,300,400,500,600];
(function(rotate,arrnum){
    var a=1;
    for(var i=0; i<arrnum.length; i++)
    {
        if(a<=rotate)
        {
        const l= arrnum.shift();
        arrnum.push(l);
        a++;
        }
    }
    console.log(`Rotated numaber are ${arrnum}`);
})(rotate, arrnum);
//output : [400,500,600,700]

console.log("--------------------------------------------------------------------------------")
console.log("Below problems solved using arrow function")
    
//1. print odd number in an array.
var arr=[1,2,3,4,5,6,7,8,9,10];
var arr=[1,2,3,4,5,6,7,8,9,10];
oddnumber = (arr)=>
{
    var odd=[];
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]%2 !==0)
        odd.push(arr[i]);
   }
   return(odd);
}
console.log(oddnumber(arr));
//output: [1,3,5,7,9]

//2. Convert all the string to little caps in a string array.
var str=["hello",'guys'];
convert = (str)=>
{
    var upercase=[];
    for(var i=0; i<str.length; i++)
    {
        var el=str[i].split("");
        var s="";
        for(var j=0; j<el.length; j++)
        {
            s+=el[j].toUpperCase();
        }
       upercase.push(s);
    }
    return upercase;
}
console.log(`Uppercase strings are ${convert(str)}`);
//output: Uppercase strings are HELLO,GUYS    


//3. Sum of all numbers in an array 
add1=()=>
{
    var number=[11,12,13,14,15];
   var total=0;
   for(var i=0; i<number.length; i++)
   {
    total+=number[i];
   }
   return total;
}
console.log(`Total value is ${add1()}`);
//output: Total value is 65

//4.Return all the prime number in an array
var num1=[2,3,4,5,6,7,8,9,10];
primenum = (num)=>
{
   var prime=[];
   for(var i=0; i<num1.length; i++)
   {
    let element = num1[i];
    var count=0;
    for(var j=2; j<element; j++)
    {
        if(element%j ===0)
        count++;
    }
    if(count==0){
    prime.push(element);
    }
   }
   return prime;
}
var varialbe= primenum(num1);
console.log(`Prime number are ${varialbe}`);
//output: prime number are [2,3,5,7]

//5. Return all the palindrome in an array
var palinarr=["aaabaaa","abcabc"];
checkpalin = (palinarr)=>
{
    var palin=[];
     for(var i=0; i<palinarr.length; i++)
     {
        var s="";
        var ele=palinarr[i].split("");
        for(var j=ele.length-1; j>=0; j--)
        {
            s+=(ele[j]);
        }
        if(s===palinarr[i]){
        palin.push(palinarr[i]);
        }
     }
     console.log(`palindrom are ${palin.join("")}`);
}
checkpalin(palinarr);
//output: palinfrom are aaabaaa
