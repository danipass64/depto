// Validación simple del formulario y contacto por mail
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formContacto');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo) {
      alert('Por favor, completá los campos obligatorios.');
      return;
    }

    const asunto = encodeURIComponent(`Consulta alquiler - Playa Club Miramar`);
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`);
    window.location.href = `mailto:danielpassa64@gmail.com?subject=${asunto}&body=${cuerpo}`;
  });
});
