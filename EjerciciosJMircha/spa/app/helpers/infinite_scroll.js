export function InfiniteScroll() {
  const d = document,
    w = window;

  let query = localStorage.getItem("wpSearch"),
    apiURL,
    Component; //HOC  High Order Component
  w.addEventListener("scroll", (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
      { hash } = w.location;

    console.log(scrollTop, clientHeight, scrollHeight, hash);
  });
}
