class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username, email, pass){
        super(username)
        this.email = email
        this.pass = pass


    }
    addCourse(){
        console.log(`add new course by${this.username}`);
        
    }
}
const chai = new Teacher("ganii", "Ganii@gmail.com", "12345")
chai.logMe()
const masalaChai = new User("MasalaChai")
masalaChai.logMe()

