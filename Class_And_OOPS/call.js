function setUsername(username){
    //complex DB calls
    this.username = username
}

function creatUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new creatUser("chai", "chai@code.com", "123")

console.log(chai);
