class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME: ${this.username}`);
        
    }
    createId(){
        return `123`
    }
}
const ganesh = new User("Ganesh")
// console.log(ganesh.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "Iphone@gmail.com")
console.log(iphone.createId());

