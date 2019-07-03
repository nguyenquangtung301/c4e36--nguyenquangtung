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

inventory = {
    gold : 500,
  pouch : ['flint', 'twine', 'gemstone'],
  backpack : ['xylophone','dagger', 'bedroll','bread loaf'],
};

inventory['pocket']=['seashell', 'strange berry', 'lint'];

inventory['backpack'].sort();

inventory['backpack'].splice(2,1);

inventory['gold']=inventory['gold']+50;

console.log(inventory);


stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}

prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
 fruits = Object.keys(princes);
totalmoney = 0;
fruits.forEach((fruit, index) => {
console.log(`${fruit}\n princes: ${princes[fruit]}\n stock: ${stock[fruit]}\n`);
        let moneyfruit = princes[fruit] * stock[fruit];
        totalmoney += moneyfruit;
})
    console.log("The total money is", total);