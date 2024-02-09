const addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.addEventListener("click", function () {
  alert("Added to cart");
});

const descriptionCheckbox = document.getElementById("description");
const descriptionItem = document.querySelector(".item__description-item");

descriptionCheckbox.addEventListener("change", () => {
  if (descriptionCheckbox.checked) {
    descriptionItem.style.display = "block";
  } else {
    descriptionItem.style.display = "none";
  }
});
