const User = {
    _email: 'ganehs@gmail.com',
    _password: "abcd",

    get email(){
        return this._email.toUpperCase()
    },
    set email(Value){
        this._email= Value
    }


    
}

const chai = Object.create(User)
console.log(chai.email);
