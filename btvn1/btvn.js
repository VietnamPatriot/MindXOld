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

let yn = ["","","","",""]
yn[0] = prompt("Em đã ăn cơm chưa?");
if (yn[0] == "yes") {
    yn[1] = prompt("Em có muốn ăn bánh ngọt tráng miệng");
    if (yn[1] == "yes") {
        alert("ok");
    }
    else if (yn[0] == "no") {
        alert("ok");
    }
    
}
else if (yn[0] == "no") {
    yn[1] = prompt("Em có muốn ăn cơm sườn xào chua ngọt không?");
    if (yn[1] == "yes") {
        yn[2] = prompt("Em có muốn ăn bánh ngọt tráng miệng");
        if (yn[2] == "yes") {
            alert("ok");
        }
        else if (yn[2] == "no") {
            alert("ok");
        }
    }
    else if (yn[1] == "no") {
        yn[2] = prompt("Em có muốn ăn cơm sườn xào không?");
        if (yn[2] == "yes") {
            yn[3] = prompt("Em có muốn ăn bánh ngọt tráng miệng");
            if (yn[3] == "yes") {
                alert("ok");
            }
            else if (yn[3] == "no") {
                alert("ok");
            }
        }
        else if (yn[2] == "no") {
            yn[3] = prompt("Em có muốn ăn cơm sườn không?");
        }
    }
}

console.log(yn)