//An operation thats should happen right after a function has been executed, must be given inside callback function
//(redeuces the need of calling 2 functions seperately)

//For better understanding - https://youtube.com/watch?v=qQ2jKM6mX3Y&feature=share9

//EXAMPLE - 1
function mainFunc(getCalFunc){
    console.log("Main function executed")
 
    getCalFunc()
    
 }
 function callBackFunc(){
    console.log("callBack function executed")
 }
 mainFunc(callBackFunc)
 /* 
   Main function executed
   callBack function executed
 */
 
 //   callback function is passed as an argument to another function and it is called from that function
 //   only when the first function finishes its execution
 
 //EXAMPLE - 2 (method-1)
 function myDisplayer(some) {
     document.getElementById("demo").innerHTML = some;
   }
   
   function myCalculator(num1, num2) {
     let sum = num1 + num2;
     return sum;
   }
   let result = myCalculator(5, 5);
   myDisplayer(result);
 ///////////////////////////////////////////////////////////////////////////////////
 //(method - 2)
   function myDisplayer(some) {
     document.getElementById("demo").innerHTML = some;
   }
   
   function myCalculator(num1, num2) {
     let sum = num1 + num2;
     myDisplayer(sum);
   }
   
   myCalculator(5, 5);
 //   method 1 calls 2 funcs 
 //        1.myCalculator
 //        2.myDisplayer
 //   Instead of calling 2 functions in method 2 ,we used callback func