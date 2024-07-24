const slideValue = document.querySelector(".slider-points");
const inputSlider = document.querySelector("input[type='range']");

console.log(inputSlider);

inputSlider.addEventListener("input", () => {
  let value = inputSlider.value;
  console.log(value);
  slideValue.textContent = value;
  slideValue.style.left = value / 21 + "%";
  slideValue.classList.add("show");
});

inputSlider.addEventListener("blur", () => {
  slideValue.classList.remove("show");
});
