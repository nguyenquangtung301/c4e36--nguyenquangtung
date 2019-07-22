let h1 = document.getElementById('menu');
console.dir(h1);

// let parent = document.getElementById("demo");
// let child = document.getElementById("khung");
// parent.removeChild(child);
let foodInput = document.getElementById('food-Input')
let themmonan = document.getElementById("them");
let menu = document.getElementById('menu')
let deleteBtn = document.getElementById('btn-delete');
them.addEventListener('click', () =>{
    let newFood = `<li>${foodInput.value}</liv>`
    menu.innerHTML += newFood;
})
btnDelete.addEventListener('click', () =>{
    menu.lastElementChild.remove();
})
btnDeleteSelect.addEventListener('click', () =>{
    for(let i = 0; i < menu.children.length; i++){
        if (eachFood.textContent === foodInput.value){
            eachFood.remove();
        }
    }
})
