// const data =[  {name : "Ganesh", profression : "Software Engineer"},
//     {name : "Sanket", profression : "Software Engineer"},
// ];

// function getData(){
//     setTimeout(() => {
//         let ouput = "";
//         data.forEach((data,index)=>{
//             ouput+= `<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output
//     },1000);
// }

// function creatData(newdata,callback){
//     setTimeout(() => {
//         data.push(newdata);
//         callback();
//     }, 2000);
// }

//   creatData({name : "Vivek", profression : "Softwae Engineer"}, getData)

const data =[  {name : "Ganesh", profression : "Software Engineer"},
    {name : "Sanket", profression : "Software Engineer"},
];

function getData(){
    setTimeout(() => {
        let ouput = "";
        data.forEach((data,index)=>{
            ouput+= `<li>${data.name}</li>`;
        })
        document.body.innerHTML=output
    },1000);
}

function creatData(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        data.push(newdata);
        let error = false;
        if(!error){
            resolve();
        }       else{
            reject();
        }
        }, 2000);
    })
}

  creatData({name : "Vivek", profression : "Softwae Engineer"}).then(getData)