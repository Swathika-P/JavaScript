//for better understanding - https://youtube.com/watch?v=DHvZLI7Db8E&feature=share9

let p = new Promise((resolve,reject)=>{
    let a = 1+1 //true
    //let a = 1+2  //false
    if(a == 2){ 
        resolve("Success")
    }else{
        reject("Failed")
    }
})

p.then((message)=>{
    console.log("This is inside then "+ message) //This is inside then Success
}).catch((message)=>{
    console.log("This is inside catch "+ message) //This is inside catch Failed
})