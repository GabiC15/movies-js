const apikey = "8fa8fe67b5f6b84aedfe04b2350639db";

const peticion = fetch(
  `https://api.themoviedb.org/3/movie/550?api_key=${apikey}`
);

peticion
  .then((resp) => resp.json())
  .then(({ title, overview, poster_path }) => {
    const h1 = document.createElement("h1");
    h1.innerHTML = title;
    document.body.append(h1);

    const p = document.createElement("p");
    p.innerHTML = overview;
    document.body.append(p);

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
    document.body.append(img);
  })
  .catch(console.warn);
