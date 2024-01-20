    document.addEventListener("DOMContentLoaded", () => {
    // Declarar variables
    let btnNuevaReceta = document.getElementById("btn-nuevaReceta");
    let btnRecetario = document.getElementById("btn-recetario");
    let btnCerrars = document.querySelectorAll(".btn-cerrar");
    let nRConteinter = document.getElementById("nr-conteiner1");
    let rConteinerD = document.getElementById("r-conteiner-display2");

    // Agregar eventos
    btnNuevaReceta.addEventListener("click", abrirDisplayNR);
    btnRecetario.addEventListener("click", abrirDisplayR);

    btnCerrars.forEach((btnCerrar) => {
        btnCerrar.addEventListener("click", cerrarDisplay);
    });

    function abrirDisplayNR() {
        nRConteinter.style.display = "grid";
    }

    function abrirDisplayR() {
        rConteinerD.style.display = "flex";
    }

    function cerrarDisplay() {
        nRConteinter.style.display = "none";
        rConteinerD.style.display = "none";
    }

     const btnAgregarReceta = document.getElementById('btn-agregar');

    btnAgregarReceta.addEventListener('click', agregarReceta);

    function agregarReceta() {
        const nombreReceta = document.getElementById('nombreReceta').value;
        const imagenReceta = document.getElementById('imagenReceta').value;
        const descripcionReceta = document.getElementById('descripcionReceta').value;
        const ingredientesReceta = document.getElementById('ingredientesReceta').value;
        const preparacionReceta = document.getElementById('preparacionReceta').value;

        // Llamada a la función createRecipe
        createRecipe(nombreReceta, imagenReceta, descripcionReceta, ingredientesReceta, preparacionReceta);

        // Limpiar los campos del formulario
        limpiarCampos();

        // Cerrar el contenedor
        cerrarDisplay();
    }

    // Función para limpiar los campos del formulario después de agregar una receta
    function limpiarCampos() {
        document.getElementById('nombreReceta').value = '';
        document.getElementById('imagenReceta').value = '';
        document.getElementById('descripcionReceta').value = '';
        document.getElementById('ingredientesReceta').value = '';
        document.getElementById('preparacionReceta').value = '';
    }

    function createRecipe(nombre, imagen, descripcion, ingredientes, preparacion) {
        // Crear un nuevo elemento de receta
        const nuevaReceta = document.createElement('div');
        nuevaReceta.classList.add('receta');
    
        // Agregar un identificador único
        const idReceta = generarIdUnico(); // Puedes implementar esta función según tus necesidades
        nuevaReceta.setAttribute('data-id', idReceta);
    
        // Agregar contenido de la receta
        nuevaReceta.innerHTML = `
            <h3>${nombre}</h3>
            <img src="${imagen}" onerror="this.src='../img/iconos/coccion.png'" alt="${nombre}">
            <p>${descripcion}</p>
            <h4>Ingredientes:</h4>
            <p>${ingredientes}</p>
            <h4>Preparación:</h4>
            <p>${preparacion}</p>
            <button class="btn-removeRecipe" data-id="${idReceta}" type="button">Eliminar Receta</button>
        `;
    
        // Agregar la nueva receta al contenedor de recetas
        const recetasContenedor = document.getElementById('recetasContenedor');
        recetasContenedor.appendChild(nuevaReceta);
    
        // Agregar un evento para el botón de eliminar receta
        const btnRemoveRecipe = nuevaReceta.querySelector('.btn-removeRecipe');
        btnRemoveRecipe.addEventListener('click', () => {
            const idReceta = btnRemoveRecipe.getAttribute('data-id');
            // Lógica para eliminar la receta con el ID específico
            eliminarReceta(idReceta);
        });
    }
    
    // Función para generar un ID único (puedes personalizar según tus necesidades)
    function generarIdUnico() {
        return Math.floor(Math.random() * 1000000);
    }
    
    // Función para eliminar una receta por su ID
    function eliminarReceta(idReceta) {
        const recetaAEliminar = document.querySelector(`.receta[data-id="${idReceta}"]`);
        if (recetaAEliminar) {
            recetaAEliminar.remove();
        }
    }

    });
