const user = "ganesh@gmail.com"
if (user) {
//     console.log("user email got it");
    
// }else{console.log(non);
}

// falsy value

// false, 0, -0, BigInt, 0n, "", undefined, NaN, null

//truthy value
//  "0", 'false', " ", [], {}, function(){}, 

// if (user.length === 0) {
//     console.log("array is empty");
    
// }

const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("object empty");
    
// }

// nullish coaliescing operator (??) : null undefined

// let value = 10 ?? 5
// value = null ?? 5
// value = undefined ?? 5
value = null ?? 10 ?? 20
console.log(value);


// Ternary Opearator
// condition ? true : false
const iceprice = 100
iceprice <= 80 ? console.log("less than 80") : console.log("more than 80");

