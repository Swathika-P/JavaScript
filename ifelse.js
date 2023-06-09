//conditional statements
//ifelseif
var cost = 500
if(cost>250){
    console.log("inside if") //inside if
}
else if(cost==250){
    console.log("inside elseif")
}
else{
    console.log("inside else")
}

//switch
const n=5
switch(n){
    case 9:
        console.log("greater than 5")
        break;
    case 5:
            console.log("equal to 5") //equal to 5
            break;
    default:
        console.log("default")
}

//Ternary operator
var personage = 21
var age = personage >= 18? console.log("Eligible"): console.log("not eligibile") //Eligible
