const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

const chai = {
    name: 'Ganesh',
    price: 123,
    avilable: true
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        
    }
    
}