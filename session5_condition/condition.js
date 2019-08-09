// let number = Number(prompt("Nhap vao mot so: "));
// if (number >= 5) {
//     console.log(`So vua nhap ${number} khong nho hon 5`);
    
// }

// let a = Number(prompt("Nhap vao a: "));
// let b = Number(prompt("Nhap vao b: "));
// if (a > b) {
//     console.log(`So lon hon la ${a}`);
// }
// else if (a < b) {
//     console.log(`So lon hon la ${b}`);
    
// }
// else {
//     console.log(`Hai so bang nhau`);
    
// }

// let month = Number(prompt("Nhap vao thang: "));
// if (0<month && month < 4) {
//     console.log(`Thang ${month} la mua xuan`);
// } 
// else if (month < 7) {
//     console.log(`Thang ${month} la mua he`);
    
// } 
// else if (month < 10) {
//     console.log(`Thang ${month} la mua thu`);
// } 
// else if (month < 13) {
//     console.log(`Thang ${month} la mua dong`);
// } 
// else {
//     console.log(`Khong co thang ${month}`);
// }

//ax+b=0
// let a = Number(prompt("Nhap vao a: "));
// let b = Number(prompt("Nhap vao b: "));
// if (a == 0 && b == 0) {
//     console.log(`Phuong trinh vo so nghiem`);
     
// }
// else if (a == 0 && b != 0) {
//     console.log(`Phuong trinh vo nghiem`);
     
// }
// else {
//     x = -b/a;
//     console.log(`Phuong trinh co nghiem x = ${x}`);
    
// }

//ax^2 + bx + c = 0
// let a = Number(prompt("Nhap vao a: "));
// let b = Number(prompt("Nhap vao b: "));
// let c = Number(prompt("Nhap vao c: "));
// delta = b*b - 4*a*c;
// if (delta < 0) {
//     console.log(`Phuong trinh vo nghiem`);
    

// }
// else if (delta == 0) {
//     console.log(`Phuong trinh co nghiem kep x = ${-b/(2*a)}`);
// }
// else {
//     console.log(`Phuong trinh co nghiem x1 = ${((-b+Math.sqrt(delta)/2*a))}`);
//     console.log(`Phuong trinh co nghiem x2 = ${((-b-Math.sqrt(delta))/2*a)}`);
    
// }


//Bài 1
// let year = Number(prompt("Nhap vao nam: "));
// if (year % 4 == 0 ) {
//     console.log(`Nam ${year} co 366 ngay `);
    
// }
// else console.log(`Nam ${year} co 365 ngay`);

//Bai2
// let month = Number(prompt("Nhap vao thang: "));
// let year = Number(prompt("Nhap vao nam: "));
// if (month > 1 && month < 13) {
//      if (year % 4 == 0) {
        
    
//         if (month == 2) {
//             console.log(`Thang ${month} co 29 ngay`);
        
//         }
//         else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//         console.log(`Thang ${month} co 31 ngay`);
//         } 
//         else console.log(`Thang ${month} co 30 ngay`);
        
//     }
    

// else  {
//     if (month == 2) {
//         console.log(`Thang ${month} co 28 ngay`);
    
//     }
//     else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     console.log(`Thang ${month} co 31 ngay`);
//     } 
//     else console.log(`Thang ${month} co 30 ngay`);
// }
// }
// else console.log(`Thang ${month} khong hop le`);


//Bai3
// let month = Number(prompt("Nhap vao thang: "));
// if (0<month && month < 4) {
//     console.log(`Thang ${month} la mua xuan`);
// } 
// else if (month < 7) {
//     console.log(`Thang ${month} la mua he`);
    
// } 
// else if (month < 10) {
//     console.log(`Thang ${month} la mua thu`);
// } 
// else if (month < 13) {
//     console.log(`Thang ${month} la mua dong`);
// } 
// else {
//     console.log(`Khong co thang ${month}`);
// }

//Bai4
// let a = Number(prompt("Nhap vao a: "));
// let b = Number(prompt("Nhap vao b: "));
// let c = Number(prompt("Nhap vao c: "));
// if (a < b && b < c) {
//     console.log(`Thu tu tang dan: ${a}, ${b}, ${c}`);   
// } 
// else if (a > b && a < c) {
//     console.log(`Thu tu tang dan: ${b}, ${a}, ${c}`);   
// } 
// else if (c < a && a < b) {
//     console.log(`Thu tu tang dan: ${c}, ${a}, ${b}`);   
// } 
// else if (a < c && c < b) {
//     console.log(`Thu tu tang dan: ${a}, ${c}, ${b}`);   
// }    
// else if (c < b && b < a) {
//     console.log(`Thu tu tang dan: ${c}, ${b}, ${a}`);   
// } 
// else if (b < c && c < a) {
//     console.log(`Thu tu tang dan: ${b}, ${c}, ${a}`);   
// } 

//Bai5
// let a = Number(prompt("Nhap vao a: "));
// let b = Number(prompt("Nhap vao b: "));
// let c = Number(prompt("Nhap vao c: "));
// if (a<=0 || b <= 0 || c<= 0) {
//     console.log(`Day khong phai la tam giac`);
    
// }
// else if (a + b <= c || a + c <= b || b + c <= a) {
//     console.log(`Day khong phai la tam giac`);
    
// }
// else {
//     console.log(`Day la tam giac`);
    
//    if (a == b && b == c) {
//        console.log(`Day la tam giac deu`);    
//    } 
//    else if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a) {
//        console.log(`Day la tam giac vuong`);
       
//    }
//     else if (a == b || a == c || b == c) {
//         console.log(`Day la tam giac can`);
        
//     } 
// }

//Bai6
// let soDien = Number(prompt("Nhap vao so dien= (kWh)"));
// let bac1 = 1678;
// let bac2 = 1734;
// let bac3 = 2014;
// let bac4 = 2536;
// let bac5 = 2834;
// let bac6 = 2927;
// if (0<soDien && soDien<51) {
//     tien1 = 50*bac1;
//     tien2 = 0;
//     tien3 = 0;
//     tien4 = 0;
//     tien5 = 0;
//     tien6 = 0;
//     console.log(`Dien tieu thu bac 1 : ${soDien * bac1}`);
//     console.log(`Dien tieu thu bac 2 : 0`);
//     console.log(`Dien tieu thu bac 3 : 0`);
//     console.log(`Dien tieu thu bac 4 : 0`);
//     console.log(`Dien tieu thu bac 5 : 0`);
//     console.log(`Dien tieu thu bac 6 : 0`);
//     console.log(`Tong so tien phai tra : ${soDien * bac1 } VND`); 
// }
// else if (51<=soDien && soDien < 101 ) {
//     tien1 = 50*bac1;
//     tien2 = (soDien - 50)*bac2;
//     console.log(`Dien tieu thu bac 1 : ${tien1}`);
//     console.log(`Dien tieu thu bac 2 : ${tien2}`);
//     console.log(`Dien tieu thu bac 3 : 0`);
//     console.log(`Dien tieu thu bac 4 : 0`);
//     console.log(`Dien tieu thu bac 5 : 0`);
//     console.log(`Dien tieu thu bac 6 : 0`);
//     console.log(`Tong so tien phai tra : ${tien1 + tien2 } VND`); 
// }
// else if (101<=soDien && soDien < 201 ) {
//     tien1 = 50*bac1;
//     tien2 = 50*bac2;
//     tien3 = (soDien -100)*bac3;
//     tien4 = 0;
//     tien5 = 0;
//     tien6 = 0;
//     console.log(`Dien tieu thu bac 1 : ${tien1}`);
//     console.log(`Dien tieu thu bac 2 : ${tien2}`);
//     console.log(`Dien tieu thu bac 3 : ${tien3} `);
//     console.log(`Dien tieu thu bac 4 : 0`);
//     console.log(`Dien tieu thu bac 5 : 0`);
//     console.log(`Dien tieu thu bac 6 : 0`);
//     console.log(`Tong so tien phai tra : ${tien1 + tien2 + tien3} VND`); 
// }
// else if (201<=soDien && soDien < 301 ) {
//     tien1 = 50*bac1;
//     tien2 = 50*bac2;
//     tien3 = 100*bac3;
//     tien4 = (soDien - 200)*bac4;
//     tien5 = 0;
//     tien6 = 0;
//     console.log(`Dien tieu thu bac 1 : ${tien1}`);
//     console.log(`Dien tieu thu bac 2 : ${tien2}`);
//     console.log(`Dien tieu thu bac 3 : ${tien3} `);
//     console.log(`Dien tieu thu bac 4 : ${tien4} `);
//     console.log(`Dien tieu thu bac 5 : 0`);
//     console.log(`Dien tieu thu bac 6 : 0`);
//     console.log(`Tong so tien phai tra : ${tien1 + tien2 + tien3 + tien4} VND`); 
// }
// else if (301<=soDien && soDien < 401 ) {
//     tien1 = 50*bac1;
//     tien2 = 50*bac2;
//     tien3 = 100*bac3;
//     tien4 = 100*bac4;
//     tien5 = (soDien - 300)*bac5;
//     tien6 = 0;
//     console.log(`Dien tieu thu bac 1 : ${tien1}`);
//     console.log(`Dien tieu thu bac 2 : ${tien2}`);
//     console.log(`Dien tieu thu bac 3 : ${tien3} `);
//     console.log(`Dien tieu thu bac 4 : ${tien4} `);
//     console.log(`Dien tieu thu bac 5 : ${tien5}`);
//     console.log(`Dien tieu thu bac 6 : 0`);
//     console.log(`Tong so tien phai tra : ${tien1 + tien2 + tien3 + tien4 + tien5} VND`); 
// }
// else if (401<=soDien  ) {
//     tien1 = 50*bac1;
//     tien2 = 50*bac2;
//     tien3 = 100*bac3;
//     tien4 = 100*bac4;
//     tien5 = 100*bac5;
//     tien6 = (soDien-400)*bac6;
//     console.log(`Dien tieu thu bac 1 : ${tien1}`);
//     console.log(`Dien tieu thu bac 2 : ${tien2}`);
//     console.log(`Dien tieu thu bac 3 : ${tien3} `);
//     console.log(`Dien tieu thu bac 4 : ${tien4} `);
//     console.log(`Dien tieu thu bac 5 : ${tien5}`);
//     console.log(`Dien tieu thu bac 6 : ${tien6}`);
//     console.log(`Tong so tien phai tra : ${tien1 + tien2 + tien3 + tien4 + tien5 +tien6} VND`); 
// }
// else console.log(`So dien khong hop le`);

//Bai7
// let number = Number(prompt("Nhap vao so: "));
// //ktra la so chinh phuong
// if (Math.sqrt(number) % 1 == 0) {
//     console.log(`So ${number} la so chinh phuong`);
    
// }
// else if (Math.sqrt(number) % 1 != 0) {
//     console.log(`So ${number} khong phai so chinh phuong`);
    
// }
// //ktra la so nguyen to
// var nguyenTo = true;
 
    
//     if (number < 2){
//         nguyenTo = false;
//     }
//     else if (number == 2){
//         nguyenTo = true;
//     }
//     else if (number % 2 == 0){
//       nguyenTo = false;
//     }
//     else{
        
//         for (var i = 3; i <= Math.sqrt(number); i+=2)
//         {
//             if (number % i == 0){
//                 nguyenTo = false;    
//             }
//         }
//     }
 
//     if (nguyenTo == true){
//         console.log(`So ${number} la so nguyen to`);
        
//     }
//     else{
//         console.log(`So ${number} khong phai so nguyen to`);
        
//     }

//ktra la hop so




//Luyện tập chung
//Bài1
//a

// let x = Number(prompt("Nhap vao x: "));
// let n = Number(prompt("Nhap vao N: "));
// let tong = 0;
// for (let index = 0; index < n+1; index++) {
//     tong = tong + Math.pow(x, index);
    
// }
// console.log(`Tong can tim la S = ${tong}`);

//b

// let n = Number(prompt("Nhap vao n: "));
// let s = 0;
// let x = 1;
// for (let index = 1; index < n+1; index++) {
//     x = x * index;
//     s = s + x; 
// }
// console.log(`Tong giai thua s = ${s}`)

//Bài2

// let s = 0;
// let n = 0;
// while (s < 1000) {
//     s += n ;
//     n++;  
// }
// console.log(`So N can tim= ${n-1}`);

//Bài3

// let a = Number(prompt("Nhap vao a: "));
// let x = a;
// let b = Number(prompt("Nhap vao b: "));
// let y= b;
// if (a == 0 || b == 0) {
//     a = a + b;
// }
// while (a != b) {
//     if (a>b) {
//         a = a -b;
    
//     }
//     else b = b - a;   
// }
// console.log(`Ước chung lớn nhất = ${a}`);
// console.log(`Bội chung nhỏ nhất = ${(x*y)/ a}`);

//switch

let month = Number(prompt(`Nhap vao thang trong nam: `));
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Co 31 ngay`);
        
        break;
    case 2:
        let year = Number(prompt(`Nhap nam: `));
        let du = year % 4;
        switch (du) {
            case 0:
                console.log(`Co 29 ngay`);
                
                break;
        
            default:
                console.log(`Co 28 ngay`);
                
                break;
        }
        
        
        break;
    case 4:
    case 6:
    case 9:
    case 11:
            console.log(`Co 30 ngay`);
            
            break;   
   
    default:
        console.log(`Nhap sai thang`);
        
        break;
}




