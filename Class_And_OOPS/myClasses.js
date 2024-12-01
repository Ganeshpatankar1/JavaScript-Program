// ES6

class user {
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    }
    encryptyPass(){
        return `${this.pass}Abc`
    }
    changeUser(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new user("ganesh", "ganesh@gmail,com", "1234")
console.log(chai.encryptyPass());
console.log(chai.changeUser());

// Behind The Scene

function User(User, email, pass){
    this.User = user
    this.email = email
    this.pass = pass
}
user.prototype.encryptyPass = function(){
    return `${this.pass}Absf`
}
user.prototype.changeUser = function(){
    return `${this.user.toUpperCase()}`
}
const tea = new User ("tea", "tea@gmail.com", "1234")
console.log(tea);
