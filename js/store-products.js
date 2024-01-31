const response = await fetch("api/products.json");
const productsList = await response.json();

let currentPage = 1;
const selectElement = document.querySelector("#products-per-page__select");
const selectedOption = selectElement.options[selectElement.selectedIndex];
let productsPerPage = Number(selectedOption.value);
let buttonsAmount = Math.ceil(productsList.length / productsPerPage);
let currencyTo = "USD";
let rate = 1;

const storeItemsAmount = productsList.length;
const productsAmount = productsList.length;
document.querySelector("#store-items-amount").innerText = storeItemsAmount;
document.querySelector("#products-amount").innerText = productsAmount;

async function changeCurrency() {
  const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  const currencies = await response.json();
  currencyTo = document.querySelector(".currency-selector__select").value;
  rate = currencies.rates[currencyTo];
  displayProducts();
}

document.querySelector(".currency-selector__select").addEventListener("change", changeCurrency);

document.querySelector("#products-per-page__select").addEventListener("change", () => {
  productsPerPage = document.querySelector("#products-per-page__select").value;
  currentPage = 1;
  displayProducts();
  displayPagination();
})

function displayProducts() {
  const startIndex = productsPerPage * (currentPage - 1);
  const endIndex = startIndex + productsPerPage;
  const productsOnPage = productsList.slice(startIndex, endIndex);

  renderProducts(productsOnPage);
}

function renderProducts(productsOnPage) {
  let productsDomString = "";

  for (const product of productsOnPage) {
    productsDomString += `<div class="products-container__product">
      <a href="item-page.html" class="product__item">
        <div class="product__item--image-container">
          <img
            src="${product.img}"
            alt="${product.name + " photo"}"
          />
        </div>
        <p class="product__item-name">${product.name}</p>
      </a>
      <p class="product__price">${(product.price * rate)
        .toFixed(2)
        .toString()
        .replace(".", ",")} ${currencyTo}</p>
      <button class="button button-secondary">BUY</button>
    </div>`;
  }
  document.querySelector(".products-container").innerHTML = productsDomString;
}

function displayPagination() {
  const paginationButtons = document.querySelector(".pagination__buttons");
  paginationButtons.innerHTML = "";
  buttonsAmount = Math.ceil(productsList.length / productsPerPage);

  for (let i = 0; i < buttonsAmount; i++) {
    const button = displayPaginationButton(i + 1);
    paginationButtons.appendChild(button);
  }
}

function displayPaginationButton(pageNumber) {
  const button = document.createElement("a");
  button.setAttribute("href", "#products");
  button.classList.add("button");
  button.classList.add("button-secondary");
  button.id = `${pageNumber}`;
  button.innerText = pageNumber;

  if (currentPage == pageNumber) button.classList.add("pagination-button--active");

  button.addEventListener("click", () => {
    currentPage = Number(button.id);
    displayProducts();
    document.querySelector(".pagination-button--active").classList.remove("pagination-button--active");
    button.classList.add("pagination-button--active");
  });

  return button;
}

document.querySelector(".pagination__arrow-left").addEventListener("click", () => {
  document.getElementById(currentPage).classList.remove("pagination-button--active");
  currentPage = currentPage === 1 ? buttonsAmount : currentPage - 1;
  displayProducts();
  document.getElementById(currentPage).classList.add("pagination-button--active");
  document.querySelector(".products__title").scrollIntoView({behavior: "smooth"});
});

document.querySelector(".pagination__arrow-right").addEventListener("click", () => {
  document.getElementById(currentPage).classList.remove("pagination-button--active");
  currentPage = currentPage === buttonsAmount ? 1 : currentPage + 1;
  displayProducts();
  document.getElementById(currentPage).classList.add("pagination-button--active");
  document.querySelector(".products__title").scrollIntoView({behavior: "smooth"});
});

displayProducts();
displayPagination();