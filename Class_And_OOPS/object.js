function multyple5(num){
    return num*5
}
multyple5.power = 2
console.log(multyple5(5));
console.log(multyple5.power);
console.log(multyple5.prototype);


function creatUser(username, score){
    this.username = username
    this.score = score
    
}
creatUser.prototype.increment = function(){
    this.score++
}

creatUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = creatUser("chai", 25)
const tea = creatUser("tea", 250)