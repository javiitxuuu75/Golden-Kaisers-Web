// Simulamos un sistema de autenticación con credenciales predefinidas
const validUsername = "admin";  // Nombre de usuario válido
const validPassword = "12345";  // Contraseña válida

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario para validarlo

    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Comprobamos si el usuario y la contraseña coinciden
    if (username === validUsername && password === validPassword) {
        // Si son correctos, guardamos en localStorage y redirigimos
        localStorage.setItem('isLoggedIn', 'true');  // Indicamos que el usuario está autenticado
        localStorage.setItem('username', username); // Guardamos el nombre de usuario
        window.location.href = 'index.html'; // Redirige a la página principal
    } else {
        // Si no son correctos, mostramos el mensaje de error
        errorMessage.style.display = 'block';  // Mostramos el mensaje de error
    }
});
