// Array
//const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
//1. Read 
//1.1 Read one 
// index of element 
//console.log(menu[0])

//length of array : độ dài của mảng 
//last element
//console.log(menu[menu.length - 1])

//1.2 read many 
// for( i = 0; i < menu.length; i++){
//     let food = menu[i];
//     console.log(food);
// }


// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// for(let i = 0; i < menubar.length; i++){
//     let food = menu[i];
//     console.log('${i+1}.${food}');
// }


// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// //2. create
// const newFood = "Pho";
// menu.push(newFood);
// console.log(menu);

// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// let = prompt("askcustomer?") ;
// if(customer == "No"){
//     console.log("Google bye");
// }
// if(customer == Yes){
//     const newFood = "Pho";
//     menu.push(newFood);
//     console.log(menu);
// }


// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// menu.forEach((food, index) => {
//     console.log('${index+1}. ${food}');
// })
// const answer = prompt("Add food? (y/n)").toLowerCase();
// if (answer === 'n'){
//     console.log("Bye!")
// } else if (anwer === 'y'){
//     const newFood = prompt("Food name?");
//     menu.push(newFood);
//     menu.forEach((food, index) => {
//                 console.log('${index+1}. ${food}');
//     })
// }
// }

//3. DELETE 
// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// //3.1 delete by index
// menu.splice(2, 1)
// console.log(menu);
// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// //3.2 Delete by value 
// const indexOfFood = menu.indexOf("Thit");
// menu.splice(indexOfFood, 1);
// console.log(indexOfFood);




// 3 DELETE
// const menu = ["com","chao","rau"];
//3.1 dlete by index
// menu.splice(1, 2)
// console.log(menu);
// delete by value
// const indexOfFood = menu.indexOf("com")
// console.log(indexOfFood);
// menu.splice(indexOfFood, 1);
// console.log(menu);

// const menu = ["com","chao","rau","ca"];
// const answer = prompt("Add food want delete? (y/n)").toLowerCase();
// if(answer === 'n'){
//     console.log("Bye!")
// }
// else if(answer === 'y'){
//     const answer = prompt("Index or Value? (i/v)").toLowerCase();
//     if (answer === 'i'){
    
//         let x = prompt("nhapvitri")
//         menu.splice(x - 1, 1)
//         console.log(menu);
//     } else if(answer ==='v'){
//         let y = prompt("nhapmon");
//         console.log(y)
//         const indexOfFood = menu.indexOf(y)
//         console.log(indexOfFood);
// menu.splice(indexOfFood, 1);
//  console.log(menu);
//     }
// }

//4 update
//4,1 update by index

// menu[1] = "pho"
// console.log(menu);

// 
// const numbArr = [1,2,3,4];
// const n = prompt("nhap so cua ban")
// let foundIndex = -1;
// numbArr.forEach((numb,i) => {
//     if(numb === n){
// foundIndex = i;
//     }
// })
// if(foundIndex === -1){
//     alert("Not found!")
// } else{
//     console.log(`Number ${n} at ${foundIndex} position!`)
// }

//1/7
// object
// const person = {
//     name: "duc",
//     age: 21,
//     major: "chinese",
// }
// // property: value
// console.log(person)
// // crud
// // 1.read
// console.log(person.age)

// //2 create / update
// //create
// person.status = "available";
// console.log(person)
// //update
// person.major = "korean";
// console.log(person)
// delte
// delete person.age
// 
// const person = {
//     ns: "noi",
//     hc: "hoc",
//     ngta: "nguoita"
// }
// const words = Object.keys(person)
// words.forEach((word, index) => {
//     console.log(`${index + 1}. ${word}`);
// })
// const answer = prompt("your code?")
// if (person.hasOwnProperty('abc')){
//     console.log(teenCode[answer]);

// } else {
//     const yOrN = prompt("contribute? (y/)").toLowerCase();
//     if(yOrN === 'n'){
//         console.log("goodbuye");
    
//     }else if(yOrN ==='y'){
//         const meaning = prompt("Meaning");
//         person[answer] = meaning;
//     }
// }
// const newWord = Object.keys(person);
// newWord.forEach((word, index)=> {
//     console.log(`${index + 1}. ${word}`);
// })

// const word = "champion"
// let letters = word.split('')
// let displayLetter = [];

// while (letters.length > 0){
// const randomIndex = Math.floor(Math.random()*letters.length);
// const charater = letters[randomIndex];
// displayLetters.push(character);
// letters.splice(randomIndex, 1);
// }
// const displayWord = displayLetters.join(" ");
// console.log(displayWord);
// const answer = prompt("your answer");
// if(answer === word){
//     console.log("hura");
// } else {
//     console.log("wrong")
// }

// const people = [
//     {
//         name: "dung",
//         salary: 50000,
//         hour: '5',
//         days: '15',
//     },
//     {
//         name: "duc",
//         salary: 80000,
//         hour: '7',
//         days: '25'

//     },
//     {
//         name: "phong",
//         salary: 60000,
//         hour: '2',
//         days: '35'
//     }
// ];
// // JSON
// let totalSalary = 0;
// people.forEach((person, index) => {
//     const salary = person.salary * person.hour * person.days
//     console.log(`luong cua ${person.name} la ${salary}`);
//     totalSalary += salary;
// })
// console.log(`tong luong 3 nguoi la ${totalSalary}`)

