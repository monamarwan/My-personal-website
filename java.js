//list insert
mylist.addEventListener("mousemove", (eo) => {
  myMenu.style.display="block"
  myMenu.style.transition=" all 1s"

})

mylist.addEventListener("mouseout", (eo) => {
   myMenu.style.display="none"
 })


 const dark = document.getElementById("dark");
 const body = document.getElementById("body");

 dark.addEventListener("click", (eo) => {
   body.classList.toggle("dark")
 });














