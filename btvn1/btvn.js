const c = '*';

for (let i = 1; i <= 5; i++) {
  let sp = ' '.repeat(5 - i);
  let st = c.repeat(2 * i - 1);
  console.log(sp + st);
}

const A1 = [1, 0, 2, 3, 4, 0, 5, 6];

const A2 = [];

for (let i = 0; i < A1.length; i++) {
  const a = A1[i];
  if (a !== 0 && a % 2 !== 0) {
    A2.push(a);
  }
}
console.log(A2);

let person = prompt("");