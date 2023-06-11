//Higher order function

/* In order to not write mutiple functions
Example:
  function twox(num){
    return(2*num)
  }
  function threex(num){
    return(3*num)
  }
console.log(twox(num))
console.log(threex(num))
*/

var num =10

function multiplier(whichnum){  //2  //3
    return function(x){ //x=10
        return x*whichnum //20 //30
    }
}

var twox = multiplier(2)
var threex = multiplier(3)
console.log(twox(num))
console.log(threex(num))