class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const Ganesh = new User("g@ganesh.spot", "1234")
console.log(Ganesh);
