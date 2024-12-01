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
    },5000);
}

function creatData(newdata){
    setTimeout(() => {
        data.push(newdata);
    }, 2000);
}
  getData();
  creatData({name : "Vivek", profression : "Softwae Engineer"})