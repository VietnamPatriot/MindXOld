let n = prompt("Nhập số tự nhiên n: ");
let giaiThua = 1;

for (let i = 1; i <= n; i++) {
    giaiThua *= i;
}
console.log(giaiThua);

let n1 = prompt("Nhập số tự nhiên n: ");

for (let i = 1; i <= n1-1; i++) {
    let row = '';
    for (let j = 1; j <= n1 - i; j++) {
        row += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1 || i === n) {
            row += '*'
        } 
        else {
            row += ' ';
        }
    }
    console.log(row);
}
let r = ''
for (let i = 1; i <= 2*n1-1; i++) {
    r += "*"
}
console.log(r)
