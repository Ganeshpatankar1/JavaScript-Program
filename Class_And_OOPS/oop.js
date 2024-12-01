const user = {
    username: "Ganesh",
    logginCount: 8,
    singnIn: "True",

    getUserDeatail: function(){
        // console.log("Got Database From User");
        // console.log(`username: ${this.username`);
        console.log(this);
                
        
    }

}
// console.log(user.username);
// console.log(user.getUserDeatail());


function User(userName, loggInCOunt, isLoggedIn){
this.userName = userName;
this.loggInCOunt = loggInCOunt;
  this.isLoggedIn = isLoggedIn;

  this.gretting = function(){
    console.log(`Welcome ${this.username}`);
    
  }
  return this
}
const userOne = new User("Ganesh", 12, true)
const userTwo = new User("GaneshaPatankar", 11, true)
console.log(userOne);
console.log(userTwo);

