#! /usr/bin/env node


import inquirer from "inquirer";


const answer = await inquirer.prompt([
    {message:"enter your 1st number", type:"number", name:"firstnumber"},
    {message:"enter your second number", type:"number",name:"secondnumber"},
    {message:"select one of the oprator to perform opration",
        type:"list",
        name:"oprator",
        choices:["addition","substract","multiplication","division"]
    }
]);


// conditional statements

if (answer.oprator==="addition"){
    console.log(answer.firstnumber+answer.secondnumber);
}else if (answer.oprator==="substract"){
    console.log(answer.firstnumber-answer.secondnumber);
}else if(answer.oprator==="multiplication"){
    console.log(answer.firstnumber*answer.secondnumber);
}else if(answer.oprator==="division"){
    console.log(answer.firstnumber/answer.secondnumber);
}else{
    console.log("select the valid oprator")
}





// packages
// tsc --init
// npm init -y
// npm i @types/node -D     // npm i inquirer
// npm i --save-dev @types/inquirer
// .gitignore
// git clone link....     // from github folder to vs code
// tsc main.ts & node main.js
// cls // for clean terminal