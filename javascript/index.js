const productsList = document.getElementById("productsList");
const navMenu = document.getElementById("navMenu");
const carouselContainer = document.getElementById("carouselContainer");

products.map((item, key) =>
  productsList.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card" id="product-${key}">
    <img
      src="${item.image}"
      alt=""
      style="width: 100%"
    />
    <h1>${item.name}</h1>
    <p class="price">R$${item.price}</p>
    <p>${item.description}</p>
    <p><button>Adicionar ao Carrinho</button></p>
  </div>
  `
  )
);

products.map((item, key) =>
  carouselContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="carousel-cell" id="carousel-product${key}">
    <img
      class="img-carousel"
      src="${item.image}"
      alt=""
    />
  </div>
  `
  )
);

menuItens.map((item) =>
  navMenu.insertAdjacentHTML(
    "beforeend",
    `
    <li class="active">
    <a href="${item.href}">
      ${item.name}
    </a>
    </li>
  `
  )
);