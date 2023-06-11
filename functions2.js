//normal function
//METHOD 1:
function add(){  
    return(2+5)
}

//METHOD 2:
//without using function keyword - MOST PEOPLE USE
add1=()=>{
    return(2+3)
}

//METHOD 3:
//can also be written as
add2=()=> (2+4)

console.log(add()) //7
console.log(add1())  //5
console.log(add2()) //6

//data passing 
function print(num){  //METHOD 2,3 can also be used
    return(num+5)     //print2 =(num) =>(num+5)
}
console.log(4) //9
