const recordvedio1 = new Promise((resolve,reject)=>{
      resolve("Vedio 1 recorded")
})
const recordvedio2 = new Promise((resolve,reject)=>{
      resolve("Vedio 2 recorded")
})
const recordvedio3 = new Promise((resolve,reject)=>{
     resolve("Vedio 3 recorded")
})
//say we have to do comething after "all" the 3 vedios are recorded
//call promise,with an array of promises that need to be executed
// Promise.all([
//     recordvedio1,
//     recordvedio2,
//     recordvedio3
// ]) //this is going to run all these methods,ana after that it goes to then and catch
// //all methods are running at the same time
// .then((messages)=>{
//     console.log(messages)  //[ 'Vedio 1 recorded', 'Vedio 2 recorded', 'Vedio 3 recorded' ]
// })

//say we have to do something after one of the vedios got completed we use 'race
Promise.race([
    recordvedio1,
    recordvedio2,
    recordvedio3
]).then((message)=>{
    console.log(message)   //Vedio 1 recorded
})