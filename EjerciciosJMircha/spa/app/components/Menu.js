export function Menu() {
  const $menu = document.createElement("nav");
  $menu.classList.add("menu");
  $menu.innerHTML = `
    <a href="#/">Home</a>
    <span>-</span>
    <a href="#/search">Busqueda</a>
    <span>-</span>
    <a href="https://aprenderjavascript.org" target="_blank" rel="noopener">Aprender JS</a>
  `;
  return $menu;
}
