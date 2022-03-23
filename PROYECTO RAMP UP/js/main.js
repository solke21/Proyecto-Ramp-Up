let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

// Menu de Navegacion //

/* Falta Responsive

btnMenu.addEventListener('click', () => {

            

    btnMenu.classList.toggle('fa-times');

    if (activador) {

        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;

    } else {
        activador = false;

        menu.style.left = "100%";
        menu.style.transition = "0.5s";

        activador = true;

    }
});

*/

// Activar enlaces del menu //

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {

    element.addEventListener('click', (event) => {

        enlaces.forEach((link) => {
            link.classList.remove('activo');

        });

        event.target.classList.add('activo');
    })

});

// Efecto Scroll //

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {

    let currenScrollPos = window.pageYOffset;

    // Mostrar y ocultar menu //

    if (prevScrollPos > currenScrollPos) {
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";

    } else {
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrollPos;

    // Mostrar y ocultar scroll estilos //

    let arriba = window.pageYOffset;

    if (arriba <= 600) {
        containerMenu.style.boderBottom = "none";

        goTop.style.right = "-100%";

    } else {
        containerMenu.style.boderBottom = "3px solid #E04DB0";

        goTop.style.right = "0";
        goTop.style.transition = "0,5s";

    }

}

// Uso boton Ver Abajo //

goTop.addEventListener('click', () => {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;

});

// Inclusion Audio //