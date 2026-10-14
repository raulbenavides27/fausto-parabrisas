const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

const WHATSAPP = '56954317536';
const MENSAJE_WHATSAPP = 'Hola, quisiera cotizar un servicio para mi vehículo. ¿Me pueden ayudar?';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAJE_WHATSAPP)}`;

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Los formularios se envían directamente a FormSubmit mediante sus atributos action y method.
// No interceptar el submit: FormSubmit debe recibir los datos y gestionar su confirmación.
