// let myName = "Ganesh   "

// console.log(myName.trueLength);


let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Ganesh = function(){
    console.log(`Ganesh Is Simple Man BUt he Denger`);
}
Array.prototype.heyGanesh = function(){
    console.log(`say hello babby`);
    
}
// myHeros.Ganesh()
// myHeros.heyGanesh()
// // heroPower.heyGanesh()

// inheritance 
const user = {
    name: "Ganesh",
    user: "gani@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvilable: false
}
const tSupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: techingSupport
}

// Teacher.__proto__ =user
// modern Sysntax

let anotherUsername = "GaneshPatankar      "

String.prototype.trueLenght = function(){
    console.log(`${this}`);
        console.log(`True Length is: ${this.trim().length}`);
        
}
anotherUsername.trueLenght()
"Ganesh".trueLenght()
"IceTea".trueLenght()