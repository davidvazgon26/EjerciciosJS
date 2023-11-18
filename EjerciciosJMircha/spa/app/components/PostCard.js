export function PostCard(props) {
  let { title, date, slug, _embedded } = props;
  let dateFormat = new Date(date).toLocaleString();
  let urlPoster = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/favicon.ico";
  return `
      <article class="post-card">
      <img src="${urlPoster}" alt="${title.rendered}">
      <h2>${title.rendered}</h2>
      <p>
          <time datetime="${dateFormat}">${dateFormat}</time>
          <a href="#/${slug}">Ver Publicacion</a>
      </p>
      </article>
    `;
}
