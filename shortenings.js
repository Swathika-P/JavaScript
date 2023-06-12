/* 
  ANONYUMOUS FUNCTION
   Syntax:
      (data) => return 
*/

//Example 1
 let number = [10,20,30,40,50] 
 let addone = number.map((x) => x+1)  //[ 11, 21, 31, 41, 51 ]
 let multen = number.map((x) => x*10) //[ 100, 200, 300, 400, 500 ]
 console.log(addone)
 console.log(multen)

 //Example2
 name ="Swa"
 console.log("My name is "+ name + " My cats are Kuttoo and Pattuu") //My name is My cats are Kuttoo and Pattuu
 console.log(`My name is ${name} My cats are Kuttoo and Pattuu`) //My name is Swa My cats are Kuttoo and Pattuu
 //(use ` symbol -> down esc button)

 //Example3 - semicolon
 age = 19 
 console.log(age) //19
 age = 20; console.log(age) //20