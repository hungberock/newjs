// let array1 = [1,2,3,4,5,6];
// // array1[0] = 7;
// // for (let index = 0; index < array1.length; index++) {
// //     const element = array1[index];
// //     console.log(element);
     
// // }

// let info = ["Nguyen Van A","Ha Noi", 19, ["HTML", "C", "JS"]];
// // for (let index = 0; index < info.length; index++) {
// //     const element = info[index];
// //     console.log(element);
    
// // }
// // info[2] += 1;
// // console.log(`Tuoi moi ${info[2]}`);
// console.log(info);
// let old_length = info.length;
// let new_length = info.push("Hai Bà Trưng");
// console.log(info);
// console.log(`Giá trị cũ ${old_length}`);
// console.log(`Giá trị cũ ${new_length}`);
// let new1_length = info.unshift("Nguyen Van B", "Do Thi C");
// console.log(info);
// console.log(new1_length);
// info[info.length] = "abc";
// console.log(info);

//Tính chu vi đa giác
// let n = Number(prompt("Nhap vao N: "));
// let doDai = [];
// for (let index = 0; index < n; index++) {
   
//     doDai.push(Number( prompt("Nhap vao do dai: ")));
    
// }
// console.log(doDai);
// let chuVi = 0;
// for (let x = 0; x < doDai.length; x++) {
    
//     chuVi += doDai[x];
    
// }
// console.log(`Chu vi cua da giac la ${chuVi}`);

//Xóa mảng
// let array2 = [2,3,4,5,6,7];
// //delete array2[2];
// array2.pop();//nguoc lai cua push
// array2.shift();//nguoc lai cua unshift

// console.log(array2);
let menu = "Menu: \n"+
            "1. Danh sách sách trong thư viện\n" +
            "2. Thêm sách\n" + 
            "3. Đổi tên sách\n" + 
            "4. Xóa sách\n" + 
            "5. Thoát";

let message = menu + "\nChọn menu: "

while(true){
    let choose = Number(prompt(message));
    // Khai báo biến isExit đại diện cho việc người dùng muốn out CT,
    // mặc định ban đầu là người dùng chưa muốn out, tức = false
    let isExit = false;
    switch(choose){
        case 1:
            alert("1");
            break;
        case 2:
            alert("2");
            break;
        case 3:
            alert("3");
            break;
        case 4:
            alert("4");
            break;
        case 5:
            // Khi người dùng chọn 5, tức là muốn out CT,
            // đổi giá trị isExit tương ứng.
            isExit = true;
            break;
        default:
            alert("Nhập sai rồi, nhập lại.");            
    }
    // Mỗi khi người dùng nhập xong, hỏi CT: người dùng đã thoát chưa,
    // thông qua câu lệnh if(isExit), nếu đúng thì break khỏi vòng while,
    // kết thúc CT, không thì không làm gì cả.
    if(isExit){ 
        break;
    }
}
alert("Cam on ban!");

















