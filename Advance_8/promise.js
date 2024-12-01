const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //BD call, cryptography, network
    setTimeout(function(){
        console.log("async Task Complete");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Is consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 4");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Sync Task 4");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Ganesh", email : "patankarg@gmail.com"})
    }, 1000)

})
promiseThree.then(function(username){
    console.log(username);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({user: "Ganesh", pass:"123"})
        }else{
            reject('ERRoR: Went Something Wents Wrong')
        }
    })
}, 1000)

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("the promise rejeectd"))


const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({user: "javascript", pass:"123"})
        }else{
            reject('ERRoR: Went Javascript Wents Wrong')
        }
    })
},1000)

async function consumePromesuFive() {
    try {
        const response = await promisefive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromesuFive()


// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.tyicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log();
        
//     }
// }

// getAllUser()

fetch('https://api.gihub.com/user/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))

