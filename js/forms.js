document.addEventListener('DOMContentLoaded', function () {
  const handleFormSubmit = (form, webhookUrl) => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const phone = document.getElementById('formTelephone').value.trim();
      const message = document.getElementById('formMessage').value.trim();
      const contactCheckboxes = document.querySelectorAll('input[name="contacto-via[]"]:checked');
      const contactVia = Array.from(contactCheckboxes).map(cb => cb.value);

      if (!name || !email || !message) {
        alert('Por favor, complete los campos obligatorios.');
        return;
      }

      if (contactVia.length === 0) {
        alert('Por favor, seleccione al menos una opción de contacto.');
        return;
      }

      const formData = {
        nombre: name,
        email: email,
        telefono: phone,
        mensaje: message,
        contacto_via: contactVia,
      };

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (!response.ok) throw new Error(`Error del servidor: ${response.status}`);
          console.log('Formulario enviado correctamente');
          window.location.href = 'gracias.html';
        })
        .catch(error => {
          console.error('Error al enviar:', error);
          alert('Error al enviar el formulario. Intente nuevamente.');
        });
    });
  };

  // Form handlers
  const formMain = document.getElementById('formMain');
  if (formMain) {
    handleFormSubmit(formMain, 'https://placeholder-webhook-url.com/main');
  }

  const formBernstein = document.getElementById('formBernstein');
  if (formBernstein) {
    handleFormSubmit(formBernstein, 'https://placeholder-webhook-url.com/bernstein');
  }

  const formVildosola = document.getElementById('formVildosola');
  if (formVildosola) {
    handleFormSubmit(formVildosola, 'https://placeholder-webhook-url.com/vildosola');
  }
});
