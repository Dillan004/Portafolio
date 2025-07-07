const enviarWhatsappBtn = document.getElementById('enviarWhatsappBtn');

if (enviarWhatsappBtn) {
  enviarWhatsappBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre-ws').value.trim();
    const telefono = document.getElementById('telefono-ws').value.trim();
    const mensaje = document.getElementById('mensaje-ws').value.trim();

    if (!nombre || !telefono || !mensaje) {
      alert("Por favor completa todos los campos del formulario de WhatsApp.");
      return;
    }

    const numeroWhatsapp = '593 99 776 8270';
    const mensajeWhatsapp = `¡Hola! 👋 Soy ${nombre}.\n\n*Contacto:* ${telefono}\n*Mensaje:* ${mensaje}`;
    const mensajeCodificado = encodeURIComponent(mensajeWhatsapp);
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensajeCodificado}`;

    window.open(url, '_blank');

    // Limpia los campos
    document.getElementById('whatsapp-form').reset();
  });
}
