const hoverTrigger = document.getElementById("news1");
const content = document.querySelector(".news");

hoverTrigger.addEventListener("mouseover", () => {
  alert("yeah");  
  const newDiv = document.createElement("div");
  newDiv.className = "expandE";
  content.appendChild(newDiv);
  newDiv.textContent ="ya";

  newDiv.style.left = `${hoverTrigger.getBoundingClientRect().left}px`;
  newDiv.style.top = `${hoverTrigger.getBoundingClientRect().bottom}px`;

  newDiv.style.display = "block";
});

hoverTrigger.addEventListener("mouseout", () => {
  const newDiv = document.querySelector(".new-div");
  if (newDiv) {
    newDiv.remove();
  }
});