const text = document.querySelector(".sec-text");

const textload = () => {
  setTimeout(() => {
    text.textContent = "Meng Ronal";
  }, 0);
  setTimeout(() => {
    text.textContent = "Frontend development";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Freelaner";
  }, 8000);
};
textload();
setInterval(textload, 12000);

const btntop = document.querySelector(".btn_top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) btntop.classList.add("active");
  else btntop.classList.remove("active");
});
btntop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
