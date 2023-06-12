let name ={
    firstname:'Swa',
    lastname:'abi',
    iscoding(){
        //console.log(name.firstname) alternative
        console.log(this.firstname +" coding") //(this refers to object 'name')
    }
}
name.iscoding() //Swa coding
console.log(this.lastname) //undefined

function isplaying(){
    console.log(this.firstname+" playing") 
}
isplaying() //undefined ->this refers to nothing here(no object)
isplaying.call(name) //Swa playing //-> can be used 