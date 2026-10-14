FAUSTO PARABRISAS — SITIO WEB INFORMATIVO ESTÁTICO
===================================================

CONTENIDO
---------
- index.html: sitio principal.
- styles.css: estilos responsive.
- script.js: menú móvil y año del footer. Los formularios se envían directamente a FormSubmit.
- gracias.html: página de confirmación después del envío de un formulario.
- assets/: logos y fotografías.

CONTACTO INCORPORADO
--------------------
Dirección: Av. 10 de Julio 728, Santiago, Chile.
WhatsApp: +56 9 5431 7536.
Teléfono adicional: +56 2 3259 5800.
Correo público de Fausto mostrado en el sitio: faustoparabrisaaaf@gmail.com.
Horario publicado en Google Maps: lunes a sábado 09:00–19:00; domingo 09:00–16:00.
Instagram: https://www.instagram.com/faustoparabrisas/
Facebook: https://www.facebook.com/share/17ktDd1rfn/

FORMULARIOS — FORMSUBMIT
------------------------
Los dos formularios envían a soluciones@dymcyber.com para pruebas:
- Contacto general.
- Cotización para empresas y flotas.

IMPORTANTE: FormSubmit suele enviar un correo de activación al destinatario la primera vez que recibe un formulario. Abre ese correo y confirma la activación. Haz una prueba real de cada formulario y revisa también spam.

Ambos formularios redirigen a:
https://raulbenavides27.github.io/fausto-parabrisas/gracias.html

Cuando Fausto entregue el correo definitivo, cambia el destinatario en los dos formularios (atributo action) y actualiza el correo visible en la sección de contacto si corresponde. Cuando el sitio se mueva al dominio definitivo, actualiza el campo oculto _next de ambos formularios para apuntar a /gracias.html en el dominio nuevo.

NOTA DE SEGURIDAD
-----------------
FormSubmit es un servicio externo. No se necesita una clave API en el HTML, pero el correo destinatario queda visible en el código fuente. Para un sitio informativo de este tipo es una configuración sencilla; conviene activar el filtro antispam y revisar el buzón.

PRUEBAS LOCALES
---------------
Abre index.html en el navegador o ejecuta desde esta carpeta:
python3 -m http.server 8080
Luego abre http://localhost:8080

Para probar el envío real, se necesita conexión a Internet y completar la activación de FormSubmit. Las redirecciones _next están preparadas para la URL pública actual de GitHub Pages.
