// const program = ["java", "c++", "python", "mangodb", "js", "dbms", "reactJS"]

// const value = program.forEach( (iteam) => {
//     console.log(iteam);
    
// })

// console.log(value);

const myNum = [1,2,3,4,5,6,7,8,9,10,11]
// const myNums = myNum.filter( (Num) => {
//     return Num > 4
// })

const myNewNum = []
myNum.forEach( (num) => {
    if (num > 4) {
        myNewNum.push(num)
    }
})
console.log(myNewNum);

const books = [
    {title : 'book one', genr : 'finction', publish : 1981, edition : 3112},
    {title : 'book two', genr : 'non', publish : 2993, edition : 4223},
    {title : 'book three', genr : 'semee', publish : 1342, edition : 3212},
    {title : 'book four', genr : 'janii', publish : 5463, edition : 4322},
    {title : 'book five', genr : 'non', publish : 2123, edition : 2144},
    {title : 'book six', genr : 'edit', publish : 3112, edition : 4321},
    {title : 'book seven', genr : 'ganii', publish : 3212, edition : 3423},
    {title : 'book eghit', genr : 'non', publish : 4322, edition : 3431},
];

let  userBooks = books.filter( (bk) => bk.genr === 'non')
userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genr === 'non'
})
console.log(userBooks);
