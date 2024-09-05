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

