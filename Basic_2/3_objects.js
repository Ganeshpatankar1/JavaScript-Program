// Singleton
// Object.create

// Object Literals

const mySym1 = Symbol("key1")
const jsUser = {
    name: "ganesh",
    [mySym1] : "mykey1",
    age : 22,
    location : "Nanaganur",
    email : "patankarg41@gmail.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Saturday"],
}

// console.log(jsUser['email', 'age']);
// console.log(jsUser[mySym1]);

jsUser.email = "ganpa@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "ganiibhai@googli.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
    
}
jsUser.greetingTwo = function(){
    
}
console.log(jsUser.greeting());
