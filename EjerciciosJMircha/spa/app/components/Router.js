import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

export function Router() {
  const d = document;
  const $post = d.getElementById("posts");
  const w = window;

  let { hash } = location;

  console.log(hash);

  $post.innerHTML = null;

  if (!hash || hash === "#/") {
    $post.innerHTML = "<h2>Seccion del Home</h2>";
  } else if (hash.includes("#/search")) {
    $post.innerHTML = "<h2>Seccion del Buscador</h2>";
  } else if (hash === "#/contacto") {
    $post.innerHTML = "<h2>Seccion de Contacto</h2>";
  } else {
    $post.innerHTML =
      "<h2>Aqui cargara el contenido del post previamente seleccionado</h2>";
  }

  // ajax({
  //   url: api.POSTS,
  //   cbSuccess: (posts) => {
  //     console.log(posts);
  //     let html = "";
  //     posts.forEach((post) => (html += PostCard(post)));
  //     d.querySelector(".loader").style.display = "none";
  //     d.getElementById("posts").innerHTML = html;
  //   },
  // });
}
