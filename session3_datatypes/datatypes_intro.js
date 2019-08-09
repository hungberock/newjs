// var x = 100;

// // let y = "100";
// // console.log(x);
// var x = 100;
// console.log(x++);
// console.log(x);

// var x = 100;
// console.log(++x);
// console.log(x);

// var x = 100;
// console.log(--x);
// var x = 100;
// console.log(x--);



// // console.log(y);
// // console.log(`Gia tri cua x la: ${x}`);

// // let a = 10;
// // let b = 20;
// // console.log(`Tong cua ${a} va ${b} la ${a + b}`);
// const year = 2019;
// let birth = prompt("Ban sinh nam bao nhieu?");
// console.log(year - birth);
// let name = prompt("Ban ten la gi?")
// console.log(`Chao ban ${name}, ban ${year - birth} tuoi`);

// BAI1
// var name_age = prompt("Ban ten la gi va bao nhieu tuoi?(Nhap theo thu tu va cach nhau dau ,)");
// var info = name_age.split(",");
//
// console.log(`Chao ban ${info[0]}, ban ${info[1]} tuoi`);

//BAI2
// const year = 2019;
// var name_age = prompt("Ban ten la gi va sinh nam bao nhieu?(Nhap theo thu tu va cach nhau dau ,)");
// var info = name_age.split(",");
// console.log(`Chao ban ${info[0]}, ban ${year - info[1]} tuoi`);

//Bai3
// let add = prompt("Nhập vào bán kính hình tròn: ");
// let radius = Number(add);
// const pi = 3.14;
// let perimeter = pi * radius * 2;
// let dientich = pi * radius * radius;
// console.log(`Chu vi hình tròn có bán kính ${radius} là ${perimeter.toFixed(2)}`);
// console.log(`Diện tích hình tròn có bán kính ${radius} là ${dientich.toFixed(2)}`);

//Bai4
// let add = prompt("Nhập vào chiều dài, chiều rộng chữ nhật (cách nhau bởi dấu ,)");
// var info = add.split(",");
// dai = Number(info[0]);
// rong = Number(info[[1]]);
// let chuVi =(dai + rong) * 2;
// let dienTich = dai * rong ;
// console.log(`Hình chữ nhật có chiều dài ${dai}, chiều rộng ${rong} có chu vi và diện tích lần lượt là ${chuVi}, ${dienTich}`);

//Bai5
// let x = Number(prompt("Nhập vào giá trị của x = "));
// y = 4*(Math.pow(x, 2) + 10*x*Math.sqrt(x) + 3*x + 1)
// console.log(`Giá trị của biểu thức y = ${y}`);

//Bài6
// let x = Number(prompt("Nhập vào giá trị của x = "));
// let pi = Math.PI;
// y = (Math.sin(pi*Math.pow(x, 2)) + Math.sqrt(Math.pow(x, 2) + 1)) / (Math.pow(Math.E, 2*x) + Math.cos((pi/4)*x));
// console.log(`Giá trị của biểu thức y = ${y}`);

//Bài7
// let x = Number(prompt("Nhập vào số tiền X = "));
// y = Math.floor(x/100000);
// let a = x % 100000;
// z = Math.floor(a/50000);
// let b = a % 50000;
// m = Math.floor(b/20000);
// let c = b % 20000;
// n = Math.floor(c/10000);
// console.log(`Số tiền ${x}vnd gồm ${y} tờ 100000vnd, ${z} tờ 50000vnd, ${m} tờ 20000vnd, ${n} tờ 10000vnd`);

//Bài8
let x = Number(prompt("Nhập vào giá trị của x = "));
y = Math.floor(x/100);
let a = x % 100;
z = Math.floor(a/10);
let b = a % 10;
console.log(`Số ${x} có tổng các chữ số là ${y + z + b}`);





