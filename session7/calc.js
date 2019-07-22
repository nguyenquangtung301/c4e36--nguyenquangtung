const calc = (x, y, ops) =>{
    let result = 0;
if(ops === "+"){
    result =(x+y);
}
if(ops === "-"){
    result = x-y;
}
if(ops === "+"){
    result = x*y;
}
if(ops === "+"){
    result = x/y;
}
return result;
}