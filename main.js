const bar = document.getElementById("bar");
const hidden = document.getElementById("hidden");

bar.addEventListener("click", (eo) => {
  hidden.classList.toggle("UL");
});
