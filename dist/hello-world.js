document.addEventListener("DOMContentLoaded", function(){
  const node = document.createTextNode("Hello World!");
  const element = document.getElementById("app");
  element.appendChild(node);
});
