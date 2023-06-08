/*
var name = "Swa"
var age = 19
var city = "Coimbatore"

function welcome(){
    console.log("Welcome Message")
}
*/

//To make things easy and efficient - Objects
//user-defined object
var person = {
    name:"Swa",
    age:19,
    food:{
        fav:"biriyani",
        allergy:"Bringal"},
    city:"Coimbatore",
    welcome(){
        console.log("Welcome Message")
    }
}
console.log(person.name) //Swa
console.log(person.age,person.city) //19 Coimbatore
console.log(person.welcome())  //Welcome Message
console.log(person.welcome)  //[Function: welcome]  //you called the function but didn't executed it
console.log(person.food)  //{ fav: 'biriyani', allergy: 'Bringal' }
console.log(person.food.fav)  //biriyani
console.log(person); /*{
    name: 'Swa',
    age: 19,
    food: { fav: 'biriyani', allergy: 'Bringal' },
    city: 'Coimbatore',
    welcome: [Function: welcome]
  }
*/

//built-in object
/*
document.something (like document.title,document.timeline)
*/