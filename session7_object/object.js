// // let person = {
// //     "name" : "Pham Van A",
// //     "age" : 19,
// //     "country":"Ha Noi",
// //     "name":"Nguyen Thi B"
    
// // }
// // // console.log(person);
// // // //console.dir(person);
// // // console.log(person["name"]);
// // // console.log(person["age"]);
// // // console.log(person.country);

// // // person["name"] = "Nguyen Thi B"; //update
// // // console.log(person.name);

// // // person.age = person.age + 1;
// // // console.log(person.age);

// // // person["school"] = "Dai hoc quoc gia"; //create

// // // for (const key in person) {
// // //     if (person.hasOwnProperty(key)) {
// // //         const element = person[key];
// // //         console.log(element);   
// // //     }
// // // }
// // let arr = [10,2,3];

// // //kiem tra kieu du lieu
// // console.log(typeof(arr));
// // console.log(typeof(person));


// // console.log(arr instanceof Array); //kiểm tra có phải là mảng ko
// // //Kieem tra co phai la mang ko
// // // if (a instanceof Array){

// // // }

// // console.log(arr.constructor.toString().indexOf('Array')>=0);

// let student = {};
// let name = prompt('Nhap ten sinh vien');
// let age = prompt('Nhap tuoi');
// let country = prompt('Nhap que quan: ');
// student.name = name;
// student.age =  age;
// student.country = country;
// console.log(student);

// let dsMonhoc = [];
// for (let index = 0; index < 3; index++) {
//     let monhoc = prompt(`Nhap mon hoc: `);
//     dsMonhoc.push = monhoc;
    
// }
// student.subjects = dsMonhoc;

// // let inputDsMonhoc = prompt(`Nhap danh sach mon hoc, ngan cach nhau boi dau , `);
// // student.subjects = inputDsMonhoc.split(',');

// let dsKey = '';
// for (const key in student) {
//     if (student.hasOwnProperty(key)) {
//         dsKey += key + '\n';
        
//     }
// }
// console.log(dsKey);

// let inputKey = prompt(`Nhap key muon thay doi`);

// while(!student.hasOwnProperty(inputKey)){
//     inputKey = prompt(`Nhap lai thong tin muon thay doi`);
// }

// if(student.hasOwnProperty(inputKey)) {
//     if (inputKey == age) {
//         student[inputKey] = Number(prompt(`Nhap noi dung`));
//     }
//     else {
//     student[inputKey] = prompt(`Nhap noi dung: `);
//     }
// }
// else{
//     alert(`Nhap sai thong tin`);
// }

// let lop = {
//     'maSo' : prompt(`Nhap mssv: `),
//     'tenLop' : prompt('Nhap ten lop:'),
// }
// student.classInfo = lop;
// console.log(student);
// for (let index = 0; index < 2; index++) {
//    let monhoc =  prompt(`Nhap mon hoc moi: `);
//    student.subjects.push(monhoc);
    
// }
// delete student[`classInfo`];
// delete student.subjects;

// var book = [
//     {name:'foreword', pageCount: 14},
//     {name:'boyWhoLived', pageCount: 18},
//     {name:'vanishingGlass', pageCount: 13},
//     {name:'lettersFromNoOne', pageCount: 17},
//     {name:'afterword', pageCount: 19}
//   ]; 
// console.log(book);

let danhSach = [];
let bookInfo = {};
let addName = prompt("Nhập tên sách: ");
let addPrice = Number(prompt(`Nhập giá sách: `));
let addAmount = Number(prompt(`Nhập số lượng: `));


bookInfo.name = addName;
bookInfo.price = addPrice;
bookInfo.amount = addAmount;
danhSach.push(bookInfo);
console.log(danhSach);














