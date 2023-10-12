var news1 = document.getElementById('news1');
var news2 = document.getElementById('news2');
var news3 = document.getElementById('news3');
var news4 = document.getElementById('news4');
var news5 = document.getElementById('news5');

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");

var modalbody1 = document.getElementById("modal-body1");

var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];

var expand1 = document.getElementsByClassName("expand")[0];

news1.onmousedown = e => {
    if (modal2.style.display !== "block" && modal3.style.display !== "block" && modal4.style.display !== "block" && modal5.style.display !== "block") {
        modal1.style.display = "block";
    }
}

news2.onmousedown = e => {
    if (modal1.style.display !== "block" && modal3.style.display !== "block" && modal4.style.display !== "block" && modal5.style.display !== "block") {
        modal2.style.display = "block";
    }
}
  
news3.onmousedown = e => {
    if (modal1.style.display !== "block" && modal2.style.display !== "block" && modal4.style.display !== "block" && modal5.style.display !== "block") {
        modal3.style.display = "block";
    }
}
  
news4.onmousedown = e => {
    if (modal1.style.display !== "block" && modal2.style.display !== "block" && modal3.style.display !== "block" && modal5.style.display !== "block") {
        modal4.style.display = "block";
    }
}
  
news5.onmousedown = e => {
    if (modal1.style.display !== "block" && modal2.style.display !== "block" && modal3.style.display !== "block" && modal4.style.display !== "block") {
        modal5.style.display = "block";
    }
}
  

span1.onclick = () => {
    modal1.style.display = "none";
    modalbody1.style.height = "500px";
}

span2.onclick = () => {
    modal2.style.display = "none";
    modalbody2.style.height = "500px";
}

span3.onclick = () => {
    modal3.style.display = "none";
    modalbody3.style.height = "500px";
}

span4.onclick = () => {
    modal4.style.display = "none";
    modalbody4.style.height = "500px";
}

span5.onclick = () => {
    modal5.style.display = "none";
    modalbody5.style.height = "500px";
}
  
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

const expandButton = document.getElementById("expand1");
const resetButton = document.getElementById("retract1");
const expandableDiv = document.querySelector(".modal-content");

expandButton.addEventListener("click", () => {
  expandableDiv.style.width = "100vw"; /* Kích thước rộng bằng toàn màn hình */
  expandableDiv.style.height = "92vh"; /* Kích thước cao bằng toàn màn hình */
});

resetButton.addEventListener("click", () => {
  expandableDiv.style.width = "100vw"; /* Kích thước ban đầu */
  expandableDiv.style.height = "70vh"; /* Kích thước ban đầu */
});


