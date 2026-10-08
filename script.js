const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const toast = document.querySelector('#toast');

const WHATSAPP = '56985039272';
const MENSAJE_WHATSAPP =
  'Hola, quisiera cotizar un servicio para mi vehículo. ¿Me pueden ayudar?';

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    showToast(
      'Formulario preparado. Configura los datos reales de contacto para activar el envío.'
    );
  });
});

// Configurar todos los botones que digan "WhatsApp"
document.querySelectorAll('a[href="#contacto"]').forEach(link => {
  if (
    link.textContent.toLowerCase().includes('whatsapp') &&
    WHATSAPP
  ) {
    link.href =
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAJE_WHATSAPP)}`;

    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
});