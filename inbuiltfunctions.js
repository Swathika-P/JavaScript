//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
                                    //push(),foreach()
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
/*//array
let bikecolor=['red','blue','green']

//adding in array
bikecolor.push('black')

//foreach() - higher order function
bikecolor.forEach(availablity); //for every element it calls the funtion

function availablity(color){
    console.log(color+" is available.")
}*/

//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
                                     //map()
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

var cars =[
    {name:"BMW",color:"red",cost:600},
    {name:"Audi",color:"green",cost:400},
    {name:"Shift",color:"blue",cost:900},
]
console.log(cars)  
 /*[
    { name: 'BMW', color: 'red', cost: 600 },
    { name: 'Audi', color: 'green', cost: 400 },
    { name: 'Shift', color: 'blue', cost: 900 }
  ] 
  */

console.log(cars.color) //undefined
console.log(cars[1].color) //green

 /*
    HINT:
         line1           |  line2
         line2           |  line1
         correct order   |  wrong order(error->undefined)
 */

//////////////METHOD3 in function                                          //Method1

nameonly=(carname)=>console.log(carname.name)  //------->line1             cars.map(nameonly);
 /*                                                                         function nameonly(carsname){
    BMW                                                                    console.log(carsname.name)
    Audi                                                                   }
    Shift
 */
//when someone asks only carnames                                           
 //higher order func  & can be used only in object                               
cars.map(nameonly)  //------->line2                            

//////////////METHOD1 in function                                          /Method3
cars.map(colorcost);                                                       //colorcost=(car)=>console.log(car.color,car.cost)
function colorcost(car){                                                   //cars.map(colorcost)
console.log(car.color,car.cost) 
 /*
   red 600
   green 400
   blue 900
 */
}

//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
                                        //filter()
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

//contion -  need only red color car

cars.push({name:'Ford',color:'red',cost:700})
onlyred=(car)=>console.log(car.color=='red')
cars.filter(onlyred)
  /*
    true
    false
    false
    true
  */
onlyredddd=(car)=>car.color=='red'
var redfilter = cars.filter(onlyredddd)
console.log(redfilter)  
  /*
  [
  { name: 'BMW', color: 'red', cost: 600 },
  { name: 'Ford', color: 'red', cost: 700 }
  ]
  */

//condtion - need only red car also less than 700
//already we have filter for redcolor..create func to filter cost<700
cost700=(car)=>car.cost<700
var c700 = cars.filter(cost700)
var red700 = cars.filter(onlyredddd).filter(cost700)
console.log(red700)   //[ { name: 'BMW', color: 'red', cost: 600 } ]