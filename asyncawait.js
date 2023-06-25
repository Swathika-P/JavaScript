//write 2 functions makeRequest and processRequest

function makeRequest(location){
   return new Promise((resolve,reject)=>{
    console.log(`Making request to ${location}`) //always printes
    if(location == 'Google'){
        resolve("Google says hi")  //returns this if true &  processRequest func is not executed
    }else{
        reject("We can only talk to google")  //returns this if false (rejected -> handles by catch block) & processRequest func is not executed
    }
   })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log("Processing response")
        resolve(`Extra information ${response}`)
    })
}

//call functions
//command this calling part if you are running this program for async & await
//if you are running for promises the command from line 34

// makeRequest('Google').then(response =>{
//     console.log("Response Received")
//     return processRequest(response)
// }).then(processResponse =>{
//     console.log(processResponse)
// }).catch(err=>{
//     console.log(err)
// })

// OUTPUT:
// Making request to Google
// Response Received
// Processing response
// Extra information Google says hi

//why async/await? 
    //   -to make it more easier to understand without using .then and .catch

    async function dowork(){
        try{
            const response = await makeRequest('Google') //wait till makeRequest('Google') finishes
            console.log("Response Received")
            const processResponse = await processRequest(response) //wait till processRequest(response) finishes
            console.log(processResponse)
        }catch(err){
            console.log(err)
        }
    }
    //calling dowork() 
    dowork()

    // OUTPUT:
    // Making request to Google
    // Response Received
    // Processing response
    // Extra information Google says hi
    
    //if we give 'facebook' in place of 'Google' in line 45 we get
    // OUTPUT:
    // Making request to facebook
    // We can only talk to google