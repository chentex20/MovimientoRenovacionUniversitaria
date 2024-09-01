let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}



function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//animacion 
ScrollReveal().reveal('.contenido-home', { delay: 300 });
ScrollReveal().reveal('.diseño-web', { delay: 400, reset: false });
ScrollReveal().reveal('.plataforma-streaming', { delay: 400, reset: false });
ScrollReveal().reveal('.tienda-online', { delay: 400, reset: false });
ScrollReveal().reveal('.landing-page', { delay: 400, reset: false });


//galeria
function openModal(imageSrc) {
     const modal = document.getElementById("modal");
     const modalImage = document.getElementById("modalImage");

     modal.style.display = "block";
     modalImage.src = imageSrc;
 }

 function closeModal() {
     const modal = document.getElementById("modal");
     modal.style.display = "none";
 }








 // Obtener el modal
var modal = document.getElementById("imageModal");

// Obtener la imagen y el modal para mostrarla
var modalImg = document.getElementById("modalImg");
var galleryImages = document.querySelectorAll(".gallery-img");

// Obtener el elemento de cierre
var closeModal = document.querySelector(".close");

// Agregar evento de clic a cada imagen
galleryImages.forEach(function(img) {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Cerrar el modal al hacer clic en la "X"
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
