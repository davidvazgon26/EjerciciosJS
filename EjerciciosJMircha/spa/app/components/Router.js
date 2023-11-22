import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router() {
  const d = document;
  const $main = d.getElementById("main");
  const w = window;

  let { hash } = location;

  console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        d.getElementById("main").innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");

    if (!query) return false;

    await ajax({
      url: `${api.SEARCH}/${query}`,
      cbSuccess: (search) => {
        console.log(search);
        // $main.innerHTML = Post(post);
      },
    });
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Seccion de Contacto</h2>";
  } else {
    // console.log(`${api.POSTS}/${localStorage.getItem("wpPostId")}`);
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}