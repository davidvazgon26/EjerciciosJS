export function ContactForm() {
  const d = document,
    $form = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");

  $styles.innerHTML = `
  .contact-form {
    --form-ok-color: #4caf50;
    --form-error-color: #f44336;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}

/* Todos los hijos de esta clase */
.contact-form {
    --form-ok-color: #4caf50;
    --form-error-color: #f44336;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}

.contact-form>* {
    padding: 0.5rem;
    margin: 1rem auto;
    display: block;
    width: 100%;
}

.contact-form textarea {
    resize: none;
}

.contact-form legend,
.contact-form-response {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}

.contact-form input,
.contact-form textarea {
    font-size: 1rem;
    font-family: sans-serif;
}

.contact-form input[type="submit"] {
    width: 50%;
    font-weight: bold;
    cursor: pointer;
}

.contact-form *::placeholder {
    color: #000;
}

.contact-form [required]:valid {
    border: thin solid var(--form-ok-color);
}

.contact-form [required]:invalid {
    border: thin solid var(--form-error-color);
}

.contact-form-loader {
    text-align: center;
}

.contact-form-error {
    margin-top: -1rem;
    font-size: 80%;
    background-color: var(--form-error-color);
    color: #fff;
    transition: all 800ms ease;
}

.contact-form-error.is-active {
    display: block;
    animation: show-message 1s 1 normal 0s ease-out both;
}

.none {
    display: none;
}

@keyframes show-message {
    0% {
        visibility: hidden;
        opacity: 0;
    }

    100% {
        visibility: visible;
        opacity: 1;
    }
}
  
  `;

  $form.innerHTML = `<legend>Envianos tus comentarios</legend>
    <input type="text" name="name" placeholder="Escribe tu nombre"
        title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required>
    <input type="email" name="email" placeholder="email" title="Ingresa un email valido"
        pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>

    <input type="text" name="subject" placeholder="Asunto a tratar" title="El asunto es requerido" required />
    <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios"
        title="Tu comentario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
    <input type="submit" value="Enviar">
    <div class="contact-form-loader none">
        <img src="../ejerciciosLeccion80/assets/grid.svg " alt="Cargando">
    </div>
    <div class="contact-form-response none">
        <p>Lo datos han sido enviados</p>
    </div>`;

  return $form;
}
