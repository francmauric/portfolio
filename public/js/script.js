const hamburger = document.querySelector(".hamburger");
const burguer = document.querySelector(".burguer");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   burguer.classList.toggle("active");
})
console.log(burguer)
console.log(hamburger)

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   burguer.classList.remove("active");
}))

