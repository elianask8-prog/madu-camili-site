const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((elemento) => {

        if(elemento.isIntersecting){

            setTimeout(() => {

            elemento.target.classList.add("mostrar");

        }, 1000);

}

    });

});


elementos.forEach((elemento) => {

    observer.observe(elemento);

});