// let a = 0
// while (a < 10) {
//     a++;
//     console.log(a)
// }

// let a1 = 0
// while (a1 < 20) {
//     a1 = a1 + 2;
//     console.log(a1)
// }

// let b = 0;
// let n = 13;
// let total = 0;
// while (b < n) {
//     total = total + b**2;
//     b++;
// }
// console.log(total)
// let ab = 0;

// let b1 = 0;
// let n1 = 13;
// let total1 = 0;
// while (b1 < n1) {
//     total1 = total1 + b1;
//     b1++;
// }
// console.log(total1)
// let ab1 = 0;

let password;
do {
    password = prompt("Nhập mật khẩu: ");
} while (password !== "password123");
console.log("Đăng nhập thành công!");