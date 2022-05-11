
//var age=prompt("what is your age");
//document.getElementById("key").innerHTML=age;


/*numbers........................................

num1=10;
num1+=10;
console.log(num1)

*/

/*normal functions.................................

function joy(){
    console.log("have fun")
}
joy()
*/

//arrow function.......................................
 
/*
fun=(val)=>{
   var hy=val ;
  // var disp=prompt("hello"+hy)
  document.getElementById("key").innerHTML=disp;
  document.getElementById("key").style.color="red";
}
var data="what is your name"
fun(data)

*/

//while loop....................................................

 /* var num=0;
while(num<100){
    num+=1;
    console.log(num);
}
*/

//for loop ........................................................

/*for(var num = 0; num <= 100 ; num++){
  console.log(num);
}

*/
/*data types.........................................

let num2=12; //numnber
let name='anas';//srting
let ana=null;//null
let an1= true;//boolian
let arr={obj:"anas",obj1:"ajish"}//object
let froots=['apple','orange',"grape"]//array
let b; //undefined
*/

/*common function in string.............................

var data = "ajmL,arjun";
var new_line ="mohammed \n anvar"
var myname = "mohammme anas"
console.log(myname.length)
console.log(myname.indexOf("an"))
console.log(myname.slice(9,13))
console.log(new_line)
console.log(myname.concat(num2))
console.log(myname.lastIndexOf("mohammed"))
console.log(myname.toUpperCase())
console.log(myname.toLocaleLowerCase())
console.log(myname.replace("anas", "ajish"))
console.log(myname.split(''))
console.log(data.split(','))
console.log(myname.charAt(12))
*/

/*Arrays.................................................

let vegi =['asperguse','tomato','brocoli']
let froots =['apple','orange','grape','pinapple']
froots[0]='avocado';
console.log(froots)
console.log(froots[3]);


for(let i=0;i<froots.length;i++){
  console.log(froots[i]);
}


//common array functions..................................

console.log(froots.toString())
console.log(froots.join('*'))
console.log(froots.pop())//remove last item
console.log(froots)
console.log(froots.push("pinapple"))//add item in last
console.log(froots)
console.log(froots.shift())// remove item in first
console.log(froots)
console.log(froots.unshift("apple"))//add item in first
console.log(froots)

let compain_array=froots.concat(vegi);
console.log(compain_array);

console.log(compain_array.reverse())
console.log(compain_array.slice(1,4))
console.log(compain_array)
console.log(compain_array.sort())//sort normal arrya

let digits=[45,12,42,23]
console.log(digits.sort())
console.log(digits.sort(function(a,b){return a-b}))//accending order
console.log(digits.sort(function(a,b){return b-a}))//deccending order

let newarray = [];
for(let num =0;num<10;num++){
  console.log(newarray.push(num))
}
*/

/*Objects in javascript.......................................................

var student={
  fname:"mohammed",
  lname:"anas",
  age:28,
  student_details:function(){
    return this.fname+ '\n' +this.lname;
  }
}

console.log(student.fname);
console.log(student.lname);
student.age++;
console.log(student.age);

console.log(student.student_details());
*/

/*CONDITINAL STATEMENTS (IF ELSE NESTED ).........................................................

let age = prompt("what is your age ?")

if(age>18 & age<=35){
  console.log("my audiance")
}else{
  console.log("not my audiance")
}

*/

/*SWITCH STATEMENT..................................................

let day = new Date().getDay();
console.log(day)
switch(day){
  case 0:
    text="sunday"
    break;
  case 1:
    text="monday"
    break;
  case 2:
    text="thusday"
    break;
  case 3:
    text="wednesday"
    break;  
  case 4:
    text="thursday"
    break;
  case 5:
    text="friday"
    break;
  case 6:
    text="saturdya"
    break;    
  default:
    text="not a day"    
}
console.log(text);

*/
