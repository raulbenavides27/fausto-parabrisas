FAUSTO PARABRISA — PROYECTO WEB ESTÁTICO
==========================================

Esta es la versión de proyecto del concepto visual solicitado:
- Diseño negro / blanco / gris con naranja Fausto.
- Logo real entregado por el usuario en assets/logo-fausto.png.
- Header con navegación.
- Hero de alto impacto.
- Barra de beneficios.
- Servicios organizados por categorías.
- Galería de trabajos.
- Empresas y flotas.
- Formulario B2B.
- Productos.
- Nosotros.
- FAQ.
- Contacto.

ARCHIVOS
--------
index.html
styles.css
script.js
assets/logo-fausto.png
preview-concepto.png

IMÁGENES
--------
Las tarjetas de servicios utilizan fondos CSS provisionales para que el proyecto
funcione inmediatamente sin depender de imágenes externas. La estructura está
preparada para reemplazarlas por las fotografías reales de Fausto.

DATOS PENDIENTES
----------------
El proyecto no inventa información de contacto. Hay que completar:
- WhatsApp
- teléfono
- correo
- dirección
- horarios
- fotografías reales
- datos definitivos de servicios/productos

WHATSAPP
--------
En script.js existe:
const WHATSAPP = '';

Ingresar el número internacional sin + ni espacios.
Ejemplo para Chile:
const WHATSAPP = '569XXXXXXXX';

EJECUCIÓN
---------
Abrir index.html directamente en el navegador.

Para desarrollo:
python3 -m http.server 8080
y abrir http://localhost:8080
