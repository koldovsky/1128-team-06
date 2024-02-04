document.addEventListener("partialsLoaded", () => {
  import("./header.js")
});

const product = JSON.parse(localStorage.product);

document.querySelector(".item__name").innerText = product.name;
document.querySelector(".item__photo").src = product.img;
document.querySelectorAll(".item__minor-photo").forEach(item => item.src = product.img);
document.querySelector(".item__stock").innerText = product.availability;
document.querySelector(".item__code").innerText = product.productCode;
document.querySelector(".item__price").innerText = product.price.toString() + product.currency;
document.querySelector(".item__description-text").innerText = product.description;
document.querySelector(".item__dimensions").innerText = product.dimensions;
document.querySelector(".item__materials").innerText = product.materials;
