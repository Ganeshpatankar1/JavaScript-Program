const array1 = [1,2,3,4,5,6]

// const sum = array1.reduce(function(acc,curval) {
//     console.log(`acc : ${acc} curntvalue : ${curval}`);
//     return acc + curval
    
// },3)

const sum = array1.reduce( (acc,curnt) =>acc+curnt,0)
console.log(sum);


const shoping = [
    {
        item : "js course",
        price : 2900
    },
    {
        item : "mobile course",
        price : 3000
    },
    {
        item : "py course",
        price : 2000
    },
]

const shop = shoping.reduce( (acc, item) => acc+item.price,0)
console.log(shop);
