const a = document.getElementById('demo-a');
const btnDemo = document.getElementById('btn-demo');
const inputDemo = document.getElementById('demo-input');
btnDemo.onclick = () => {
    inputDemo.value = a.href;
}


const btnRemove = document.getElementById('btn-remove');
const dropdownList = document.getElementById('dropdown-list');
btnRemove.onclick = () => {
    let arr = [...dropdownList.children];
    arr.filter(e => e.innerHTML === dropdownList.value)[0].remove();
}