let h1 = document.getElementById('first-h1');
console.dir(h1);

h1.innerText = "hello"
let body = document.getElementById('body');
let h2 = <h2>Heading level 2</h2>;

body.innerHTML += h2;

let a = document.getElementById('demo-anchor');
a.remove();

let demoBtn = document.getElementById('demo-btn');
demoBtn.addEventListener('click', () =>{
    let body = document.getElementById('body');
let h2 = <h2>Heading level 2</h2>;

body.innerHTML += h2;
})