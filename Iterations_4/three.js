// for of

// [" ", " ", " ", " ",]
// [{}, {}, {}, {}, {}]

const arr = [1,2,3,4,5,6,7,8]
for (const num of arr) {
    // console.log(num);
    
}

const greet = "Hello Js"
for (const greets of greet) {
    // console.log(`each char is ${greets}`);
    
}

const map = new Map()
map.set('IN',"Indian")
map.set('USA',"United State Of America")
map.set('FR',"France")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
    
}

const myObj={
    game : 'games',
    game1 : 'gamesw'
}
// for (const [key,value] of myObj) {
//     console.log(key, ':-', value);
    
// }