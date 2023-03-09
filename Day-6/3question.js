//1.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i <11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);
//output"1234567891011

//2.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 0; i < 11; i++) {
    if(i==10)
    new_string+=numsArr[i]
    else
    new_string += numsArr[i]+"," 
}
console.log(new_string);
//output:1,2,3,4,5,6,7,8,9,10,11,

//3.
var new_string = "";
 
for (var i = 11; i>=1 ; i -- ) {
 new_string +=[i] +" ";
}
console.log(new_string);
//output:11 10 9 8 7 6 5 4 3 2 1 

//4.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var odd="even"
for (var i = 0; i <=10; i++) {
    if(numsArr[i] %2 == 0 )
    {
    numsArr[i] = odd
    }
   }
console.log(numsArr);
//output: [1, 'even', 3, 'even', 5, 'even', 7, 'even', 9, 'even', 11]

//5.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var even="even";
for (var i = 0; i <=10; i++) {
 if( i %2 == 0 )
 {
 numsArr[i] = even
 }
}
console.log(numsArr);
//output: ['even', 2, 'even', 4, 'even', 6, 'even', 8, 'even', 10, 'even']

//6.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 
 sum += numsArr[i]
}
console.log(sum);
//output: 66

//7. Write a code to add the even numbers only
//Output: 30
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2===0)
 sum += numsArr[i]
}
console.log(sum);
//output:30

//8.Write a code to add the even numbers and subract the odd numbers
//Output: 94
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);
//output: 94

//9.Write a code to print inner arrays
//Output:Array(5) [ 1, 2, 3, 4, 5 ] 
//       Array(6)[ 6, 7, 8, 9, 10, 11 ]
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 console.log( numsArr[i])
}
//output:(5)[1, 2, 3, 4, 5] 
//       (6)[6, 7, 8, 9, 10, 11]

//10.Write a code to print elements in the inner arrays --> Output: 1234567891011
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);
//output:1234567891011

//11.
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
even="even"
for (var i = 0; i < numsArr.length; i++)
{
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
      if(inner_array[j] %2 == 0 )
      {
         inner_array[j] = even
       }
}
console.log(numsArr);
//output:  [ [ 1, 'even', 3, 'even', 5 ],
  //[ 'even', 7, 'even', 9, 'even', 11 ] ]

//12.
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = numsArr.length-1; i >=0 ; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- )
     str_all +=inner_array[j]+" "
}
console.log(str_all.trim());
//output: 11 10 9 8 7 6 5 4 3 2 1

//13.
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++)
{
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0){
 sum_odd += inner_array[j]
 }
 else{
 sum_even += inner_array[j]
 }
}}
console.log(sum_odd);
console.log(sum_even);
 //output 36
 //       30