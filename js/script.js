const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((elemento) => {

        if(elemento.isIntersecting){

            setTimeout(() => {

                elemento.target.classList.add("mostrar");
            
                observer.unobserve(elemento.target);

            }, 500);

        

}

    });

});


elementos.forEach((elemento) => {

    observer.observe(elemento);
    


});

const btnMadu = document.getElementById("btn-madu");
const btnCamili = document.getElementById("btn-camili");
const galeria = document.getElementById("galeria");



const btnWhatsappBanner = document.getElementById("btn-whatsapp-banner");
const btnWhatsapp = document.getElementById("btn-whatsapp");
const opcoesWhatsapp = document.querySelector(".opcoes-whatsapp");

const btnInstagram = document.getElementById("btn-instagram");
const opcoesInstagram = document.querySelector(".opcoes-instagram");


const contato = document.getElementById("contato");


const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

const galeriaMadu = document.querySelector(".galeria-madu");
const galeriaCamili = document.querySelector(".galeria-camili");
const btnFechar = document.getElementById("btn-fechar");

function abrirOpcoesWhatsapp(event){

    event.preventDefault();

    opcoesWhatsapp.classList.toggle("oculto");

}

btnWhatsapp.addEventListener("click", abrirOpcoesWhatsapp);

btnWhatsappBanner.addEventListener("click", (event) => {

    event.preventDefault();

    contato.scrollIntoView({
        behavior: "smooth"
    });

});


menuToggle.addEventListener("click", () => {
    menu.classList.toggle("menu-aberto");
});

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        menu.classList.remove("menu-aberto");

    });

});

function abrirOpcoesInstagram(event){

    event.preventDefault();

    opcoesInstagram.classList.toggle("oculto");

}

btnInstagram.addEventListener("click", abrirOpcoesInstagram);

btnFechar.addEventListener("click", () => {
    
    galeria.classList.add("oculto");
    galeriaMadu.classList.add("oculto");
    galeriaCamili.classList.add("oculto");
});

btnMadu.addEventListener("click", (event) => {
    event.preventDefault();
    galeria.classList.remove("oculto");
    galeriaMadu.classList.remove("oculto");
    galeriaCamili.classList.add("oculto");
    galeriaMadu.scrollIntoView({ behavior: "smooth" });
});

btnCamili.addEventListener("click", (event) => {
    event.preventDefault();
    galeria.classList.remove("oculto");
    galeriaCamili.classList.remove("oculto");
    galeriaMadu.classList.add("oculto");
    galeriaCamili.scrollIntoView({ behavior: "smooth" });
});

const lightbox = document.getElementById("lightbox");
const imagemLightbox = document.getElementById("imagem-lightbox");
const fecharLightbox = document.getElementById("fechar-lightbox");

const imagensGaleria = document.querySelectorAll(".fotos-madu img, .fotos-camili img");


imagensGaleria.forEach((imagem) => {

    imagem.addEventListener("click", () => {

        console.log(imagem.getAttribute("src"));

        imagemLightbox.src = imagem.getAttribute("src");

        lightbox.classList.add("ativo");

    });

});



fecharLightbox.addEventListener("click", () => {

    lightbox.classList.remove("ativo");

});

const btnTopo = document.getElementById("btn-topo");


window.addEventListener("scroll", () => {


    if(window.scrollY > 500){

        btnTopo.style.display = "flex";

    }else{

        btnTopo.style.display = "none";

    }


});


btnTopo.addEventListener("click", () => {


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});