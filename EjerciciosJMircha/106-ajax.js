// Con XMLHttpRequest
(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Exito");
      console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log("Error");
      const message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  //Si quiciera hacerlo local:
  //   xhr.open("GET", "assets/users.json");

  xhr.send();
})();

// Con Fetch
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https:jsonplaceholder.typicode.com/users")
    .then((res) => {
      // recuerda que puedes convertir en json, text o blob
      console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log("Este es el error: ", err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(
      console.log(
        "Este codigo siempre se ejecutara independientemente de la respuesta"
      )
    );
})();

// Con Async y await
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let result = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await result.json();

      // if(!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos")
      if (!res.ok)
        throw { status: result.status, statusText: result.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log("Se ejecuta de cualquier forma");
    }
  }
  getData();
})();

// Con Axios
(() => {
  const $axio = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axio.appendChild($fragment);
    })
    .catch((err) => {
      let message = err.response.statusText || "Ocurrio un error";
      $axio.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      console.log("Se ejecuta de cualquier forma para axios");
    });
})();

// Con Axios con async y await
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("De todos modos axion con async await");
    }
  }

  getData();
})();
