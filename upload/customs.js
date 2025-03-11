var button = document.createElement("span");

button.innerText = "View Full Site";

button.className = "button";

button.addEventListener("click", function() {
  // Mở URL trong tab mới khi click
  window.open("https://9animetvtv.vercel.app/", "_blank");
});
document.getElementById("view-full").appendChild(button);
