const context={
    user: null,
    
}
window.onload = async ()=>{
 await getUsers();
 renderUsers();
 viewUser();
}
const getUsers = async ()=>{
    const res = await fetch('https://reqres.in/api/users');
    const  users= await res.json();
    context.users = users.data;
}

const renderUsers = ()=>{
    let userDiv = document.getElementById('container')
    context.users.forEach((user, index)=>{
        console.log(user);
        let userElement =
        `
        <div>
        <img src=${users.avatar}>
        <b>Full name:</b>${user.last_name}${user.fisrt_name}
        <b>Email:</b>${user.email}
        <div>
        `
        userDiv.innerHTML += userElement;

    })
}
const viewUser = () =>{
    
            
    
 for (let index = 0; index < context.user.length; index++) {
     let user = document.getElementById(`user-${index}`);
    user.addEventListener('click',()=>{
        userDetail.innerHTML = '';
        userDetail.innerHTML +=  inner.HTML;
       
    }
    )}
     
 }