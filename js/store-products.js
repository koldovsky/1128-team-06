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

let selectElement = document.getElementById("products-per-page");
let selectedOption = selectElement.options[selectElement.selectedIndex];
// let productsPerPage = Number(selectedOption.value);
let productsPerPage = 8;

function displayProducts(prodsPerPage, pageNumber) {
  const startIndex = prodsPerPage * (pageNumber - 1);
  const endIndex = startIndex + prodsPerPage;

  const productsOnPage = productsList.slice(startIndex, endIndex);
  console.log(productsOnPage);

  renderProducts(productsOnPage);
}

function displayPagination() {
  const paginationButtons = document.querySelector(".pagination-buttons");
  const buttonsAmount = Math.ceil(productsList.length / productsPerPage);
  const arrowLeft = document.querySelector("#arrow-left");
  const arrowRight = document.querySelector("#arrow-right");

  arrowLeft.addEventListener("click", () => {
    currentPage = currentPage === 1 ? buttonsAmount : currentPage - 1;
    displayProducts(productsPerPage, currentPage);
    document
      .querySelector(".pagination-button--active")
      .classList.remove("pagination-button--active");
  })

  arrowRight.addEventListener("click", () => {
    currentPage = currentPage === buttonsAmount ? 1 : currentPage + 1;
    displayProducts(productsPerPage, currentPage);
    document
      .querySelector(".pagination-button--active")
      .classList.remove("pagination-button--active");
  })

  for (let i = 0; i < buttonsAmount; i++) {
    const button = displayPaginationButton(i + 1);
    paginationButtons.appendChild(button);
  }
}

function displayPaginationButton(pageNumber) {
  const button = document.createElement("li");
  button.classList.add("button");
  button.classList.add("button-secondary");
  button.innerText = pageNumber;

  if (currentPage == pageNumber)
    button.classList.add("pagination-button--active");

  button.addEventListener("click", () => {
    currentPage = Number(button.innerText);
    displayProducts(productsPerPage, currentPage);
    document
      .querySelector(".pagination-button--active")
      .classList.remove("pagination-button--active");
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

displayProducts(productsPerPage, currentPage);
displayPagination();
