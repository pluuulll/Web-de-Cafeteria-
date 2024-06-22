// Función para iniciar sesión
function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
  
    if (email === storedEmail && password === storedPassword) {
      alert('Inicio de sesión exitoso!');
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }
  }
  
  // Función para crear una cuenta
  function register(event) {
    event.preventDefault();
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
  
    if (localStorage.getItem('email')) {
      alert('Ya existe una cuenta registrada.');
      return;
    }
  
    localStorage.setItem('email', newEmail);
    localStorage.setItem('password', newPassword);
    alert('Cuenta creada exitosamente!');
  }
  
  // Agregar eventos a los formularios
  document.getElementById('loginForm').addEventListener('submit', login);
  document.getElementById('registerForm').addEventListener('submit', register);