/* 
           use objects when you want the element names to be strings(text).
           use arrays when you want the element name to be numbers.
          
 */

//1D Array

//declaration (2 ways)
//way1
var bikecolor = ["blue","black","red","green"]
var bikemodel = [521,867,754,656]
//way2
const cars = new Array("Audi","BMW","Ford")


console.log(cars)  //[ 'Audi', 'BMW', 'Ford' ]
console.log(bikecolor)  //[ 'blue', 'black', 'red', 'green' ]
console.log(bikemodel)  //[ 521, 867, 754, 656 ]
console.log(bikecolor[1])  //black
console.log(bikecolor[10])   //undefined

//2D Array
var score =[
    ["anu","98",'A'],
    ["abi","78",'c'],
    ["anu","85",'B'],
]
console.log(score)  //[ [ 'anu', '98', 'A' ], [ 'abi', '78', 'c' ], [ 'anu', '85', 'B' ] ]

//buildin object methods

console.log(cars.length) //3     //returns length of array
bikecolor.push("brown") //adds at last
console.log(bikecolor)  //[ 'blue', 'black', 'red', 'green', 'brown' ]
bikemodel.sort()  //sorts the array
console.log(bikemodel) //[ 521, 656, 754, 867 ]
bikemodel.reverse()  //reverse order
console.log(bikemodel)  //[ 867, 754, 656, 521 ]

/*
var bike =[
    {color:"blue", model:521},
    {color:"red", model:754}
]
console.log(bike) //[ { color: 'blue', model: 521 }, { color: 'red', model: 754 } ]
*/