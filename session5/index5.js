let flock = [5, 7, 300, 90, 24, 50, 75];
console.log("Hello, my name is Tung and these are my sheep sizes:",flock)
let max = flock[0]
for(i = 0; i < flock.length; i++){
    if (max < flock[i])
    {
        max = flock[i]
    }
}console.log(`now my biggest sheep has size ${max}, let shear it`)
flock[2]=8
console.log("after shearing, here is my flock:",flock)
let flock1=[5, 7, 300, 90, 24, 50, 75]
console.log("Hello, my name is Tung and these are my sheep sizes:",flock1)
for(let m = 1; m < 4; m++)
{
for(let i = 0; i < flock1.length; i++)
{
    flock1[i]=flock1[i]+50

}
console.log("MONTH", m)
console.log("one month has passed, now here is my flock:",flock1)
let max = flock1[0]
for(i=0; i < flock1.length; i++){
    if (max < flock1[i])
    {
        max = flock1[i]
    }
}console.log(`now my biggest sheep has size ${max}, let shear it`)
const indexofsheep=flock1.indexOf(max)
flock1[indexofsheep]=8
console.log("after shearing, here is my flock:",flock1)
}
let sum = 0
for (let i = 0; i < flock1.length; i++)
{
    sum = sum +flock1[i]
}
console.log("my flock has total is size:",sum)
let profit = sum*2
console.log("i would get", profit, "$")




const menu = ["T-Shirt", "Sweater"];
const answer = prompt("what do you want? (C,R,U,D)").toLowerCase();
if(answer === 'R'){
    console.log(menu);
} else if(answer === 'C'){
    let newitems = prompt("enter newitems");
    menu.push(newitems);
    console.log(menu);
} else if(answer=== "U")
{
    let items2=["T-Shirt", "Sweater", "Jeans"]
    let answer1= prompt("Update position?")
    let answer2= prompt("your new item?")
    items2[answer1-1]=answer2
    console.log(items2)
}
else if(answer==="D")
{
    let items1=["T-Shirt", "Skirt", "Jeans"]
    let answer3=prompt("Delete position?")
    items1.splice(answer3-1, 1)
    console.log(items1)
}

1.nested list : là danh sách bên trong một danh sách. ví dụ "người", có thể là nam hoặc nữ.
2.một danh sách có thể lưu cả số nguyên và chuỗi.