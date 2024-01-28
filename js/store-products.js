const productsList = [
  {
    img: "img/products/minimal-3-piece.png",
    name: "3-piece Minimal, ARM",
    price: "110,00USD",
  },
  {
    img: "img/products/arona-armchair.png",
    name: "Arona armchair, Hunderbolt studio",
    price: "150,00USD",
  },
  {
    img: "img/products/aurora-armchair.png",
    name: "Aurora armchair, MDS",
    price: "210,00USD",
  },
  {
    img: "img/products/barr-armchair.png",
    name: "Barr armchair, DoDo Design Bureau",
    price: "510,00USD",
  },
  {
    img: "img/products/bubbles.png",
    name: "Bubbles Udion",
    price: "410,00USD",
  },
  {
    img: "img/products/cloud-armchair.png",
    name: "Cloud armchair, DIX",
    price: "150,00USD",
  },
  {
    img: "img/products/delar.png",
    name: "Delar, Uni Studio",
    price: "350,00USD",
  },
  {
    img: "img/products/fusion-armchair.png",
    name: "Fusion armchair, LEXX",
    price: "320,00USD",
  },
  {
    img: "img/products/hugo-table.png",
    name: "Hugo table, KUKO studio",
    price: "99,00USD",
  },
  {
    img: "img/products/lord-armchair.png",
    name: "Lord armchair, Miedel Home",
    price: "120,00USD",
  },
  {
    img: "img/products/monica-table.png",
    name: "Monica table, Orro",
    price: "110,00USD",
  },
  {
    img: "img/products/red-drops.png",
    name: "Red Drops, KUKO",
    price: "210,00USD",
  },
  {
    img: "img/products/snitch-cabinet.png",
    name: "Snitch cabinet, ARM",
    price: "100,00USD",
  },
  {
    img: "img/products/ultimate-green-chair.png",
    name: "Ultimate Green chair, XODO",
    price: "90,00USD",
  },
  {
    img: "img/products/upi-table.png",
    name: "Upi table, Landstorm",
    price: "90,00USD",
  },
  {
    img: "img/products/valetta-armchair.png",
    name: "Valetta armchair, ZIX studio",
    price: "310,00USD",
  },
  {
    img: "img/products/jeanie-armchair.png",
    name: "Jeanine armchair, KUKO",
    price: "210,00USD",
  },
];
let currentPage = 1;
let productsPerPage = 1;

function displayProductsPerPageSelector() {
  const selectElement = document.getElementById("products-per-page");
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  productsPerPage = Number(selectedOption.value);

  selectElement.addEventListener("change", () => {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    for (let i = 0; i < selectElement.options.length; i++) {
      selectElement.options[i].removeAttribute("selected");
    }
    selectedOption.setAttribute("selected", "selected");

    productsPerPage = Number(selectedOption.value);
    currentPage = 1;
    displayProducts();
    displayPagination();
  });
}

function displayProducts() {
  const startIndex = productsPerPage * (currentPage - 1);
  const endIndex = startIndex + productsPerPage;
  const productsOnPage = productsList.slice(startIndex, endIndex);

  renderProducts(productsOnPage);
}

function displayPagination() {
  const paginationButtons = document.querySelector(".pagination__buttons");
  paginationButtons.innerHTML = "";
  const buttonsAmount = Math.ceil(productsList.length / productsPerPage);

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

  if (currentPage == pageNumber)
    button.classList.add("pagination-button--active");

  button.addEventListener("click", () => {
    currentPage = Number(button.id);
    displayProducts();
    document.querySelector(".pagination-button--active").classList.remove("pagination-button--active");
    button.classList.add("pagination-button--active");
  });

  return button;
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
      <p class="product__price">${product.price}</p>
      <button class="button button-secondary">BUY</button>
    </div>`;
  }
  document.querySelector(".products-container").innerHTML = productsDomString;
}

displayProductsPerPageSelector();
displayProducts();
displayPagination();
