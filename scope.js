
let name = 'Swa' //global variable

function print(){
    let name = 'Suki'
    if(true){
        let name ='Tej' /*local variable // if var is used instead of let then error arises
        var name => can be declared only once
        let name => can be declared multiple times
        */
        console.log("Printing inside function "+name)
    }
    console.log("Printing inside function "+name)
}
console.log("Printing ouside  function "+name)
print(name)
/*
Printing ouside  function Swa
Printing inside function Tej
Printing inside function Suki
*/