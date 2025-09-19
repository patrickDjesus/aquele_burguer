let header = document.querySelector("#header");
const cart = document.querySelector(".carrinho");

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  if (scrollTop > 0) {
    header.classList.add("rolar");
  } else {
    header.classList.remove("rolar");
  }

  if (!cart) return;
  if (cart.dataset.dark && cart.dataset.light) {
    cart.src = scrollTop > 0 ? cart.dataset.dark : cart.dataset.light;
    return;
  }

  cart.classList.toggle("dark-cart", scrollTop > 0);
});

const menuContainer = document.getElementById("menu-container");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

const burgers = [
  {
    name: "Smash BBQ",
    img: "assets/img1.png",
    price: "R$22,00",
    oldPrice: "R$26,99",
    ingredients:
      "Pão brioche, carne smash 70g, mussarela derretida, tomate, alface americana, barbecue, maionese especial.",
  },
  {
    name: "Double Mix Bacon",
    img: "assets/img2.png",
    price: "R$32,00",
    oldPrice: "R$38,99",
    ingredients:
      "Pão brioche selado na manteiga, 2 carnes (280g), cheddar, mussarela, bacon crocante, barbecue, maionese especial.",
  },
  {
    name: "Onion Bacon",
    img: "assets/img3.png",
    price: "R$28,00",
    oldPrice: null,
    ingredients:
      "Pão brioche selado na manteiga, carne 140g, cheddar cremoso, bacon crocante, cebola caramelizada, barbecue, maionese especial.",
  },
  {
    name: "Italian Bacon",
    img: "assets/img4.png",
    price: "R$22,00",
    oldPrice: "R$26,90",
    ingredients:
      "Pão brioche selado na manteiga, carne 140g, mussarela derretida, bacon crocante, rúcula, tomate seco, barbecue, maionese especial.",
  },
  {
    name: "Triple Smash Bacon",
    img: "assets/img5.png",
    price: "R$34,00",
    oldPrice: "R$36,99",
    ingredients:
      "Pão brioche selado na manteiga, 3 carnes smash (210g), cheddar cremoso, bacon crocante, barbecue, maionese especial.",
  },
  {
    name: "Double Smash Bacon",
    img: "assets/img6.png",
    price: "R$34,00",
    oldPrice: "R$36,99",
    ingredients:
      "  Pão brioche selado na manteiga, 2 carnes smash (140g), cheddar cremoso, bacon crocante, barbecue, maionese especial.",
  },
  {
    name: "Cheddar Duplo",
    img: "assets/img7.png",
    price: "R$21,90",
    oldPrice: null,
    ingredients:
      "Pão com gergelim, 2 carnes bovinas 90g, cheddar cremoso, maionese especial.",
  },
  {
    name: "Mega Stacker 3.0",
    img: "assets/img9.png",
    price: "R$28,90",
    oldPrice: "R$33,00",
    ingredients:
      "Pão com gergelim, 3 carnes bovinas 90g, 3 fatias de queijo prato, bacon crocante, molho stacker.",
  },
  {
    name: "Kid Burger",
    img: "assets/img10.png",
    price: "R$14,90",
    oldPrice: null,
    ingredients: "Pão simples, carne bovina 70g, queijo prato, ketchup.",
  },
  {
    name: "Batata Suprema",
    img: "assets/img11.png",
    price: "R$16,90",
    oldPrice: "R$20,00",
    ingredients: "Batata frita crocante, cheddar cremoso, bacon picado.",
  },
  {
    name: "Fried Chicken",
    img: "assets/img12.png",
    price: "R$17,90",
    oldPrice: "R$20,00",
    ingredients:
      "Tiras de frango empanadas e fritas, acompanhadas de molho barbecue ou maionese especial.",
  },
  {
    name: "Sundae de Chocolate",
    img: "assets/img13.png",
    price: "R$12,90",
    oldPrice: null,
    ingredients: "Sorvete de baunilha, calda de chocolate, chantilly.",
  },
  {
    name: "Casquinha de Baunilha",
    img: "assets/img14.png",
    price: "R$4,90",
    oldPrice: "R$7,00",
    ingredients: "Sorvete de baunilha na casquinha crocante.",
  },
  {
    name: "Suco natural de laranja",
    img: "assets/img15.png",
    price: "R$9,90",
    oldPrice: null,
    ingredients: "Suco fresco de laranja 300ml.",
  },
  {
    name: "Suco natural de uva",
    img: "assets/img16.png",
    price: "R$9,90",
    oldPrice: null,
    ingredients: "Suco fresco de uva 300ml.",
  },
  {
    name: "Pepsi",
    img: "assets/img17.png",
    price: "R$7,90",
    oldPrice: null,
    ingredients: "Refrigerante Pepsi lata 350ml.",
  },
  {
    name: "Guaraná Antarctica",
    img: "assets/img18.png",
    price: "R$7,90",
    oldPrice: "R$8,50",
    ingredients: "Refrigerante Guaraná Antarctica lata 350ml.",
  },
  {
    name: "Água de Copo",
    img: "assets/img19.png",
    price: "R$5,00",
    oldPrice: null,
    ingredients: "Água mineral copo 300ml.",
  },
  {
    name: "H2O! Limão",
    img: "assets/img20.png",
    price: "R$8,90",
    oldPrice: null,
    ingredients: "Água saborizada de limão garrafa 500ml.",
  },
];
const ITEMS_PER_PAGE = 6;
let currentPage = 0;
const totalPages = Math.ceil(burgers.length / ITEMS_PER_PAGE);

function renderMenu() {
  menuContainer.innerHTML = "";
  const start = currentPage * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageItems = burgers.slice(start, end);

  pageItems.forEach((burger) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("data-ingredients", burger.ingredients);

    box.innerHTML = `
        <h3>${burger.name}</h3>
        <img src="${burger.img}" alt="hamburguer" class="burguer">
        <div class="price">
            ${burger.price} ${burger.oldPrice ? `<span>${burger.oldPrice}</span>` : ""}
        </div>
    `;
    menuContainer.appendChild(box);
  });

  // Atualiza estado dos botões
  btnLeft.style.opacity = currentPage === 0 ? "0.5" : "1";
  btnLeft.style.pointerEvents = currentPage === 0 ? "none" : "all";

  btnRight.style.opacity = currentPage === totalPages - 1 ? "0.5" : "1";
  btnRight.style.pointerEvents = currentPage === totalPages - 1 ? "none" : "all";
}

// Event listeners definidos uma única vez
btnRight.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    renderMenu();
  }
});

btnLeft.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderMenu();
  }
});
let currentPage = 0;
const ITEMS_PER_PAGE = 6;

function renderMenu() {
  const start = currentPage * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageItems = burgers.slice(start, end);

  // Adiciona animação de saída
  const oldBoxes = Array.from(menuContainer.children);
  oldBoxes.forEach(box => {
    box.classList.add('page-out');
  });

  // Cria os novos boxes invisíveis
  menuContainer.innerHTML = '';
  pageItems.forEach(burger => {
    const box = document.createElement('div');
    box.classList.add('box', 'page-in');
    box.setAttribute('data-ingredients', burger.ingredients);
    box.innerHTML = `
      <h3>${burger.name}</h3>
      <img src="${burger.img}" alt="hamburguer" class="burguer">
      <div class="price">
        ${burger.price} ${burger.oldPrice ? `<span>${burger.oldPrice}</span>` : ''}
      </div>
    `;
    menuContainer.appendChild(box);
  });

  // Atualiza os botões
  btnLeft.style.opacity = currentPage === 0 ? '0.5' : '1';
  btnLeft.style.pointerEvents = currentPage === 0 ? 'none' : 'all';
  btnRight.style.opacity = (currentPage + 1) * ITEMS_PER_PAGE >= burgers.length ? '0.5' : '1';
  btnRight.style.pointerEvents = (currentPage + 1) * ITEMS_PER_PAGE >= burgers.length ? 'none' : 'all';
}

btnRight.addEventListener('click', () => {
  if ((currentPage + 1) * ITEMS_PER_PAGE < burgers.length) {
    currentPage++;
    renderMenu();
  }
});

btnLeft.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    renderMenu();
  }
});

renderMenu();
