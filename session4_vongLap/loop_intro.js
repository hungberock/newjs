//Vòng lặp for

// let N = Number(prompt("Nhap N = "));
// // N = Number(add);
// console.log(N);
// let tong = 0;

// for (let index = 0; index < N + 1; index++) {

//      tong = tong + index;
    
// }
// console.log(`Tong can tim ${tong}`);

//Bài2
// let N = Number(prompt("Nhập số cạnh của đa giác N = "));
// console.log(`Số cạnh của đa giác là ${N}`);
// let chuVi = 0;
// for (let index = 0; index < N ; index++) {
//     let doDai = Number(prompt(`Nhập độ dài của cạnh ${index + 1} = `));
//     chuVi += doDai;
    
// }
// console.log(`Chu vi của đa giác là ${chuVi}`);

//Bài3
// let N = Number(prompt("Nhập N = "));
// let S = 0;
// for (let index = 1; index < N+1; index++) {
//     S = S + (1 / index);
    
// }
// console.log(`Tổng cần tìm S = ${S}`);

//Bài4
// let N = Number(prompt("Nhập N = "));
// let S = 0;
// for (let index = 1; index < N + 1; index++) {
//     S = S + (1 / (index * (index + 1)));
    
// }
// console.log(`Tổng cần tìm S = ${S}`);

// Vòng lặp while

// let index = 0;
// while (index < 3) {
//     console.log(index++);
    
// }

//Check pass

//  let pass = prompt("Mời nhập mật khẩu: ");

 
 
// while (pass.length < 8) {
//     pass = prompt("Mật khẩu của bạn quá ngắn vui lòng nhập lại mật khẩu: "); 
// }
// let dauPhantram = pass.includes("%");
//  let dauGachduoi= pass.includes("_");
//  let dauDollar = pass.includes("$");

// while (dauPhantram == false) {
//     pass = prompt("Mật khẩu có dấu %,vui lòng nhập lại: ");
//     dauPhantram = pass.includes("%");   
// }
// while (dauGachduoi == false) {
//     pass = prompt("Mật khẩu có dấu _,vui lòng nhập lại: ");
//     dauGachduoi = pass.includes("_");   
// }
// while (dauDollar == false) {
//     pass = prompt("Mật khẩu có dấu $,vui lòng nhập lại: ");
//     dauDollar = pass.includes("$");   
// }
//  console.log(`Mật khẩu của bạn là ${pass}`);
 
//Bài 1
// for (let index = 0; index < 101; index++) {
//     console.log(index);
//     ;
    
// }

//Bài 2
// for (let index = 100; index >-1; index--) {
//     console.log(index);
//     ;
    
// }

//Bài3

// for (let x = 0; x < 101; x = x + 2) {
//     console.log(x);      
// }

// for (let x = 1; x < 100; x = x + 2) {
//     console.log(x);      
// }

//Bài 4

// for (let x = 100; x > -1; x = x - 2) {
//     console.log(x);      
// }

// for (let x = 99; x > 0; x = x - 2) {
//     console.log(x);      
// }

//Bài 5
// let N = Number(prompt("Nhap N = "));
// // N = Number(add);
// console.log(N);
// let tong = 0;

// for (let index = 0; index < N + 1; index++) {

//      tong = tong + index;
    
// }
// console.log(`Tong can tim ${tong}`);

//Bài6
// let N = Number(prompt("Nhap N = "));
// // N = Number(add);
// console.log(N);
// let tong = 0;

// for (let index = 1; index < 2*N + 2; index = index + 2) {

//      tong = tong + index;
    
// }
// console.log(`Tong can tim ${tong}`);

//Bài 7
// let N = Number(prompt("Nhap N = "));
// // N = Number(add);
// console.log(N);
// let tong = 0;

// for (let index = 0; index < 2*N + 1; index = index + 2) {

//      tong = tong + index;
    
// }
// console.log(`Tong can tim ${tong}`);

//Bài 8
// let N = Number(prompt("Nhập N = "));
// let S = 0;
// for (let index = 1; index < N+1; index++) {
//     S = S + (1 / index);
    
// }
// console.log(`Tổng cần tìm S = ${S}`);

//Bài 9
// let N = Number(prompt("Nhập N = "));
// let S = 0;
// for (let index = 1; index < N + 1; index++) {
//     S = S + (1 / (index * (index + 1)));
    
// }
// console.log(`Tổng cần tìm S = ${S}`);

//Bài 10
// let N = Number(prompt("Nhập N = "));
// let S = 0;
// let x = 1;
// let y = 0;
// for (let index = 0; index < N ; index++) {
//     a = x;
//     x = x + y;
//     y = a;
//     S = S + a;
// }
// console.log(`Phần tử thứ N là ${a}`);

// console.log(`Tổng cần tìm S = ${S}`);

//Bài 11
// let a = Number(prompt("Nhập a = "));
// let b = Number(prompt("Nhập b = "));
// x = "*";
// let s = "";
// for (let m = 0; m < a-1; m++) {
//     x = x + "*";

// }
//     for (let n = 0; n < b; n++) {
//          s += x +"\n";
       
//     }
//  console.log(s);
 



//Bài12
let a = Number(prompt("Nhập a = "));
x = "";


for (let m = 0; m < a; m++) {
    x += "*";

    console.log(x); 
}
    for (let n = 0; n < a -1; n++) {
        x = x.slice(0, x.length - 1);
        console.log(x);
    }  
    
 




