// Esta función muestra los partidos según la temporada seleccionada
function mostrarPartidos() {
    const temporadaSeleccionada = document.getElementById('temporada-select').value;
    const clausura = document.getElementById('clausura');
    const apertura = document.getElementById('apertura');
    const informativo = document.getElementById('informativo');

    // Si no se ha seleccionado ninguna temporada
    if (temporadaSeleccionada === '--') {
        clausura.style.display = 'none';
        apertura.style.display = 'none';
        informativo.style.display = 'block';  // Mostrar el cuadro informativo
    } else if (temporadaSeleccionada === 'clausura') {
        clausura.style.display = 'block';
        apertura.style.display = 'none';
        informativo.style.display = 'none';  // Ocultar el cuadro informativo
    } else if (temporadaSeleccionada === 'apertura') {
        clausura.style.display = 'none';
        apertura.style.display = 'block';
        informativo.style.display = 'none';  // Ocultar el cuadro informativo
    }
}

// Llamada inicial de la función para ocultar partidos al principio
document.addEventListener('DOMContentLoaded', function () {
    mostrarPartidos();
});
