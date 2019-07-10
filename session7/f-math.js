const x = Math.floor(Math.random() * 10) + 1;
const y = Math.floor(Math.random() * 10) + 1;
const op = Math.floor(Math.random() * ["+","-","*","/"]);
let result = 0;
if(op === "+"){
        console.log(x+y);
}
if(op === "-"){
    console.log(x-y);
}
if(op === "+"){
    console.log(x*y);
}
if(op === "+"){
    console.log(x/y);
}
alert(result);