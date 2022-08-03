const btns = document.querySelectorAll(".quantity__order__right .btn");
let count = document.querySelector(".count");

let value = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("plus")) {
      value++;
      count.innerHTML = value;
    }
    if (btn.classList.contains("minus")) {
      value--;
      count.innerHTML = value;
    }
    if (count == -1) {
      count.innerHTML = 0;
    }
  });
});

