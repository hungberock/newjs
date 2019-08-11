let bookInfo = {};
let danhSach = [];

let menu = "Menu: \n"+
            "1. Danh sách sách trong thư viện\n" +
            "2. Thêm sách\n" + 
            "3. Đổi tên sách\n" + 
            "4. Xóa sách\n" + 
            "8. Thoát";

let message = menu + "\nChọn menu: "

function inDS() {
    
    let ds = ("");
    if (danhSach.length == 0){
        alert(`Danh sách trống!`);
    }
    else {
    for (let stt = 0; stt < danhSach.length ; stt++) {  //console.table()???
        
            ds = ds + `${stt+1}. ${danhSach[stt].name}. Giá: ${danhSach[stt].price}VNĐ. Số lượng: ${danhSach[stt].amount}  ` + `\n`
        }
        
    }
    alert(ds);
}


function addBook() {
    
    let addName = prompt("Nhập tên sách: ");
    let addPrice = Number(prompt(`Nhập giá sách: `));
    let addAmount = Number(prompt(`Nhập số lượng: `));
    bookInfo.name = addName;
    bookInfo.price = addPrice;
    bookInfo.amount = addAmount;
    danhSach.push(bookInfo);
    
    
}

function reBook() {
    let number_re = Number(prompt(`Nhập STT sách cần đổi tên: `));
    if (0 >= number_re || number_re > danhSach.length) {
        alert(`Số thứ tự không hợp lệ`);
    }
    else {
    let name_re = prompt(`Nhập tên mới: `)
    danhSach[number_re-1].name = name_re;
    }
}

function delBook() {
    let number_del = Number(prompt(`Nhập STT sách cần xóa: `));
    if (0 >= number_del || number_del > danhSach.length) {
        alert(`Số thứ tự không hợp lệ`);
    }
    else {
        danhSach.splice(number_del-1, 1);
    }
}


while(true){
    let choose = Number(prompt(message));
    // Khai báo biến isExit đại diện cho việc người dùng muốn out CT,
    // mặc định ban đầu là người dùng chưa muốn out, tức = false
    let isExit = false;
    
    switch(choose){
        case 1:
            inDS();
            break;
        case 2:
            addBook();
            break;

        case 3:
            reBook();
            break;
        case 4:
            delBook();
            break;
        case 8:
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

