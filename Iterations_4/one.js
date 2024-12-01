// //for
// for (let i = 0; i <= 20; i++) {
//     const element = i;
//     console.log(element);
    
// }



for (let i = 0; i <= 10; i++) {
    // console.log("outer Loop", i);
    

    for (let j = 0; j <=10; j++) {
        // console.log("Inner loop", j,i);
        // console.log(i*j);
        
        
    }
}

let myArray = ["Ganesh", "Dattatray", "Patankar"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}


// break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 8) {
//         console.log("Detected 8");
//         break
        
//     }
//     console.log("Value Is", index)
    
    
// }

for (let index = 0; index <= 20; index++) {
    if (index == 8) {
        console.log("Detected 8");
        continue
        
    }
    console.log("Value Is", index)
    
    
}