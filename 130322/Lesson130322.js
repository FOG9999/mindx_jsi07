// 1. Ý tưởng của Framework React
// Virtual DOM -> Lưu giữ vị trí của các tag HTML trên trang web, để phục vụ cho việc re-render (update giao diện)
// tại những tag cần thay đổi. Khi cần thay đổi thì chỉ cần chọc đúng vào vị trí thẻ cần thay đổi mà không cần load lại trang

// OOP trong JS - Object Oriented Programming -> ES6
class Student {
   // property của class
   #name; // private property, không thể truy cập từ bên ngoài
   address; // public property
   studentId;

   constructor(name, address, studentId) {
      this.address = address;
      this.#name = name;
      this.studentId = studentId;
   }

   getName() {
      // ES5
      return this.#name + " Student instance";
   }

   getAddress = () => {
      // arrow function ES6
      return this.address;
   };
}

let nhanNguyen = new Student("Nhân Nguyễn", "Hà Nội", "0123456789"); // => tạo ra 1 instance (thể hiện) mới của lớp (class) Student;
// console.log(nhanNguyen.address, nhanNguyen.name, nhanNguyen.studentId);
// console.log(nhanNguyen.getAddress());
// console.log(this.#name) -> Lỗi: không thể truy cập thuộc tính #name từ bên ngoài class Student

console.log(nhanNguyen.getName());

// 2. Nodejs and NPM (node package manager)
// Nodejs: là một môi trường để thực thi code javascript trên máy local (cá nhân) mà không cần sử dụng đến HTML và triển khai bằng việc mở trên browser(trình duyệt)
// Nodejs: nó được xây dựng dựa trên V8 Engine của browser, đaya là engine giúp trình duyệt có thể đọc được code js nhúng trên trang HTML.
// Ý tưởng xây dựng ra NodeJS đã giúp lập trình viên Frontend biết code JS có thể mở rộng skill của mình để sang code Backend, tiến tới con đường trở thành fullstack developer
// Node cũng giúp cho lập trình viên có thể chạy code JS mà không cần nhúng vào file HTML hay mở trình duyệt.

// Ví dụ ta có 1 file index.js. Ta chỉ cần trỏ vào thư mục chưa file js đó, mở terminal hoặc command prompt à chạy câu lệnh:
// node index.js

// NPM: một kho thư viện dành cho các developer NodeJS, hỗ trợ các tiện ích giúp việc coding trở nên dễ dàng hơn
// NPM được cài đặt cùng với Node
// vào đường link https://nodejs.org/en/download/ để tải
// Lưu ý đối với Windows 7 cần tải bản Nodejs ver < 14
// Sau khi hoàn thiện việc tải và cài đặt, mở Command Prompt trên Wíndows
// Gõ: node --version -> kiếm tra version Node hiện tại đang cài
// npm --version -> kiểm tra version npm được cài cùng Node


// 3. Giới thiệu về ReactJS
// Là một Framework để xây dựng giao diện ngừoi dùng, cũng có một số ý kiến nghiêng về React là một thư viện
// React xây dựng DOM ảo (virtual DOM) để phản ánh sự thay đổi của các tag HTML trên trang hiện tại, nếu cần thay đổi ở đâu React sẽ thay đổi chỉ tại điểm đó mà giữ nguyên phần còn lại của trang
// Cài đặt công cụ sinh mẫu một project React
// Mở command prompt: 
// npm i -g create-react-app 
// npx create-react-app <tên-app> -> trong đó <tên-app> là tên project muốn đặt, là một thư mục
// cd <tên-app>
// code . -> mở peoject trong VSCode