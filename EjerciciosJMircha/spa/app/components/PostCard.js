export function PostCard(props) {
  let { title, date, slug, id, _embedded } = props;
  let dateFormat = new Date(date).toLocaleString();
  let urlPoster = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/favicon.ico";

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId", e.target.dataset.id); //Cargando una parte del link a la publicacion en local storage, la otra parte viene en el slug
  });

  return `
      <article class="post-card">
      <img src="${urlPoster}" alt="${title.rendered}">
      <h2>${title.rendered}</h2>
      <p>
          <time datetime="${dateFormat}">${dateFormat}</time>
          <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
      </p>
      </article>
    `;
}
