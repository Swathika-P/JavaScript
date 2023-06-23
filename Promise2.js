//look at this code without using promise
const userLeft = true
const userWatchingCatMeme = false

function watchTutorialCallback(callBack,errorCallBack){
    if(userLeft){
         errorCallBack({
            name:'User Left',
            message : ':('
         })
    }else if(userWatchingCatMeme){
          errorCallBack({
            name : 'User Watching Cat Meme',
            message : 'cat > anything'
          })
    }else{
           callBack('Thumps up')
    }
}

watchTutorialCallback((message)=>{
   console.log("Success "+ message) 
},(error)=>{
   console.log(error.name + ` ` + error.message)
})

/* 
   const userLeft = false
   const userWatchingCatMeme = false 
   op: Success Thumps up

   const userLeft = true                               const userLeft = true
   const userWatchingCatMeme = false                   const userWatchingCatMeme = true
   op: User Left :(                                    op: User Left :(

   const userLeft = false
   const userWatchingCatMeme = true
   op: User Watching Cat Meme cat > anything
 */

// why go for promise? line 7,line 12 many callback (aka Callback Hell) , which leads to confusion
// With callbacks, you have to keep track of the order in which functions are called, and you have to worry about errors. 
// With promises, you can simply chain together promises, and the promise library will take care of the details.
// With callbacks, it's easy to make mistakes that can cause your code to crash.
// With promises, the promise library will catch errors and handle them for you.

// now ,using promise
const userLeft2 = true
const userWatchingCatMeme2 = true

function watchTutorialPromise(){
    return new Promise((resolve,reject)=>{
    if(userLeft2){
         reject({
            name:'User Left',
            message : ':('
         })
    }else if(userWatchingCatMeme2){
          reject({
            name : 'User Watching Cat Meme',
            message : 'cat > anything'
          })
    }else{
           resolve('Thumps up')
    }
})
}

watchTutorialPromise().then((message)=>{
   console.log("Success "+ message) 
}).then((message)=>{
    console.log("Success "+ message) 
}).catch((error) => {
    console.log(error.name + ` ` + error.message)
})