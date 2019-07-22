// window.onload = () =>{
//     const x = Math.floor(Math.random() * 10) + 1;
//     const y = Math.floor(Math.random() * 10) + 1;
//     const ops =  ["+","-","*","/"];
//     const indexOfOp = Math.floor(Math.random() * ops.length);
//     const op = ops[indexOfOp];
//     const result = calc(x, y, ops);
//     const errors = [-1, 0, 1];
//     const indexOfErr = Math.floor(Math.random() * errors.length);
//     const errors = errors[indexOfErr];
//     const displayResult = result + errors;
//     alert(`${x} ${op} ${y} = ${displayResult}`);
//     const answer = prompt("Y/N?").toLocaleLowerCase();
//     if(errors === 0 ){
//         if(answer === "Y"){
//             alert("goodjob");
//         }
//     } else if (answer === "N"){
//         alert("Wrong");
//     } else if(answer === "Y"){
//         alert("Wrong");
//     }else if(answer === "N"){
//         alert("goodjob");
//     }
// }
