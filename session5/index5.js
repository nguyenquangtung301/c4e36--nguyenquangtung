1.
const hello = ()=>{
    for (i=0;i<3;i++){
        console.log("Hello World")
    }
}
 2.
const sum = (x,y)=>{
    console.log(x+y)
}
 3
const draw_square = (length,color)=>{
    color(color)
    for(i=0;i<4;i++){
    fd(length)
    rt(90)
    }
}
 4
const draw_square = (length,colorline)=>{
    color(colorline)
    for(i=0;i<4;i++){
    fd(length)
    rt(90)
    }
}
for (let i = 0; i  < 30; i ++){
        draw_square(i*5, "red")
        lt(17)
		penup()
           fd(i*2)
           pendown()
}
 5
const draw_star=(length)=> {
    rt(90)
    for (i = 0; i < 5; i++) {
        fd(length)
        rt(144)
    }
}

6.
const remove_dollar_sign = (s)=> {
    let newstring = s.replace(/[$]/g, "")
    return newstring
}
 7.
string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up"){
   console.log("Your function is correct")}
else{
   console.log("Oops, there's a bug")}
   8.
function get_even_list(I) {
    var newarray = [];
    I.forEach((number, index) => {
        if (number % 2 === 0) {
            newarray.push(I[index]);
        }
    })
    return newarray;
 }
 10
function is_inside(point, rectangle) {
    var inside = true;
    if (point[0] >= rectangle[0] && point[0] <= rectangle[0] + rectangle[2] && point[1] >= rectangle[1] && point[1] <= rectangle[1] + rectangle[3]) {
        inside = true;
    } else {
        inside = false;
    }
    return inside;
}
11.
let pTest = [200, 120];
let recTest = [140, 60, 100, 200];
if (is_inside(pTest, recTest)) {
    console.log("Point is inside the retangle");
} else {
    console.log("Point is outside the retangle");
}


function giúp ta không phải viết cùng một code lại nhiều lần.
 Nó giúp các nhà lập trình viết các modular code. 
 Các hàm cho phép một nhà lập trình phân chia một chương trình lớn thành các hàm nhỏ và dễ quản lý

to define/declare a function : 
function funName() {
	//code
}

- to call/use a function :
funName();

- return là một từ khoá đặt ở cuối hàm với mục đích trả kết quả về để sử dụng tiếp ở những đoạn code bên ngoài

 Khai báo hàm
function tinh_tong(a, b)
{
     trả về kết quả là a + b
    return a + b;
}

- tùy vào mục đích mà ta dùng có return hay không có return
thông thường ta sử dụng return ở những trường hợp cần lấy kết quả đó để xử lý tiếp

- Hàm có tham số truyền vào:
funName(parameters1, ... ,parametersN){ 
   //code
};

 to to use function from a different file other than our currently working file
Sử dụng window.onload() => {}
