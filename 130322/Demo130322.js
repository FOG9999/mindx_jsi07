// 1. Ý tưởng của Framework React
// Virtual DOM -> Lưu giữ vị trí của các tag HTML trên trang web, để phục vụ cho việc re-render (update giao diện)
// tại những tag cần thay đổi.

// OOP trong JS - Object Oriented Programming -> ES6
class Student {
   // property của class
   #name; // private property
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

console.log(nhanNguyen.getName());

// 2. Nodejs and NPM (node package manager)
// Nodejs: là một môi trường để thực thi code javascript trên máy local (cá nhân) mà không cần sử dụng đến HTML và triển khai bằng việc mở trên browser(trình duyệt)
// Nodejs: nó được xây dựng dựa trên V8 Engine của browser

// NPM:
