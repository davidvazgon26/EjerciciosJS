const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    // console.log("entrie: ", entries);

    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href = "#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href = "#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observe = new IntersectionObserver(cb, {
    //root
    //rootMargin: "-270px",
    threshold: [0.5, 0.75],
  });

  $sections.forEach((el) => observe.observe(el));
}
