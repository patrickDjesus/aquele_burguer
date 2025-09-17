let header = document.querySelector('#header');
const cart = document.querySelector('.carrinho');

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop > 0) {
        header.classList.add('rolar');
    } else {
        header.classList.remove('rolar');
    }

    if (!cart) return;
    if (cart.dataset.dark && cart.dataset.light) {
        cart.src = scrollTop > 0 ? cart.dataset.dark : cart.dataset.light;
        return;
    }

    cart.classList.toggle('dark-cart', scrollTop > 0);
});


