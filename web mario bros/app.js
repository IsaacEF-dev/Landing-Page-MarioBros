let opcion = document.querySelectorAll(".opc-personajes li");
const personaje = document.querySelector('.personajes');
const bg = document.querySelector(".bg");
const nombre = document.querySelector(".nombre");
const menu = document.querySelector('.toggle');
const mostrarMenu = document.querySelector(".navegador")
const angleUp = document.querySelector(".home");

menu.addEventListener('click', menuHamburguesa);

/**selecciona la lista de personajes y coloca el personaje que mostrar */
for (let i = 0; i < opcion.length; i++) {
    opcion[i].addEventListener("click", function(a) {
        var c = 0;
        while (c < opcion.length) {
            opcion[c++].className = 'check';
        }
        opcion[i].className = "check active";
        /**cambiar personaje */
        cambiarPersonaje(opcion[i]);

        /**Cambiar Background */
        cambiarBackground(i);

        /**cambiar Nombre */
        cambiarName(i);
    })
}

/**Funcion que realiza el cambio de personaje */
function cambiarPersonaje(e) {
    let p = e.firstChild.src;
    personaje.src = p;


}

/**Funcion para cambiar el nombre del personaje */
function cambiarName(n) {
    switch (n) {
        case 0:
            nombre.textContent = "Mario Bros";
            break;
        case 1:
            nombre.textContent = "Donkey Kong";
            break;
        case 2:
            nombre.textContent = "Yoshi";
            break;
        case 3:
            nombre.textContent = "Rey Koopa";
            break;
        case 4:
            nombre.textContent = "Luigi";
            break;
    }
}

/**Cambiar El Background De Acuerdo Al Personaje */
function cambiarBackground(c) {
    switch (c) {
        case 0:
            bg.style.backgroundColor = 'rgba(204, 61, 61)';
            break;
        case 1:
            bg.style.backgroundColor = "rgba(139,80,11)";
            break;
        case 2:
            bg.style.backgroundColor = "rgba(108,180,76)";
            break;
        case 3:
            bg.style.backgroundColor = "rgba(247, 220, 53)";
            break;
        case 4:
            bg.style.backgroundColor = "rgba(28, 161, 31)";
            break;
    }
}

/**Funcion para mostrar el menu en hamburguesa */
function menuHamburguesa() {
    menu.classList.toggle("active");
    mostrarMenu.classList.toggle("active");
}

/**Funcion para que muestre el icono de ir arriba */
angleUp.addEventListener("click", irArriba);

function irArriba() {
    let scrollUp = document.documentElement.scrollTop;
    if (scrollUp > 0) {
        window.requestAnimationFrame(irArriba);
        window.scrollTo(0, scrollUp - (scrollUp / 15));
    }
}

window.addEventListener("scroll", e => {
    e = document.documentElement.scrollTop;
    console.log(e);
    if (e > 500) {
        angleUp.style.transform = "scale(1)";
    } else {
        angleUp.style.transform = "scale(0)";
    }
})

let personajeT = document.querySelectorAll('.personaje-img')
let historia = document.querySelectorAll('.historia')
ScrollReveal().reveal(personajeT, {
    duration: 4000,
    opacity: 0,
    mobile: false
});

ScrollReveal().reveal(historia, {
    duration: 4000,
    origin: 'left',
    distance: '-250px',
    mobile: false
});


ScrollReveal().reveal('.img-content', {
    origin: 'top',
    duration: 5000,
    distance: "100px",
    mobile: true

});

ScrollReveal().reveal('.text-content', {
    duration: 3000,
    opacity: 0,
    mobile: true

});