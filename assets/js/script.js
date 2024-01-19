document.addEventListener('DOMContentLoaded', () => {
    // Declarar variables
    let btnNuevaReceta = document.getElementById('btn-nuevaReceta');
    let btnRecetario = document.getElementById('btn-recetario');
    let btnCerrars = document.querySelectorAll('.btn-cerrar');
    let nRConteinter = document.getElementById('nr-conteiner1');
    let rConteinerD = document.getElementById('r-conteiner-display2');

    // Agregar eventos
    btnNuevaReceta.addEventListener('click', abrirDisplayNR);
    btnRecetario.addEventListener('click', abrirDisplayR);

    btnCerrars.forEach(btnCerrar => {
        btnCerrar.addEventListener('click', cerrarDisplay);
    });

    function abrirDisplayNR() {
        nRConteinter.style.display = 'grid';
    }

    function abrirDisplayR() {
        rConteinerD.style.display = 'flex';
    }

    function cerrarDisplay() {
        nRConteinter.style.display = 'none';
        rConteinerD.style.display = 'none';
    }
});
