const movieList = document.getElementById("posterwall");
const urlImdb = "https://www.imdb.com/title/";

function createMovie(movie) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");
  img.setAttribute("src", movie.poster);
  a.setAttribute("href", urlImdb + movie.imdbID);
  a.setAttribute("target", "_blank");
  li.appendChild(a).appendChild(img);
  return li;
}

function addMoviesToDom(movies) {
  const items = movies.map(createMovie);
  items.forEach((item) => {
    movieList.appendChild(item);
  });
}

addMoviesToDom(movies);

function removeLi() {
  while (movieList.firstChild) {
    movieList.removeChild(movieList.firstChild);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.getElementsByName("movieselector");
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", handleOnChangeEvent);
  });
});

function handleOnChangeEvent(event) {
  switch (event.target.value) {
    case "new movies":
      const newestMovie = movies.filter((movie) => {
        if (movie.year >= 2014) {
          return movie;
        }
      });
      removeLi();
      addMoviesToDom(newestMovie);
      break;
    case "avenger":
      const avengerMovies = movies.filter((movie) =>
        movie.title.includes("Avenger")
      );
      removeLi();
      addMoviesToDom(avengerMovies);
      break;
    case "x-men":
      const xmenMovies = movies.filter((movie) =>
        movie.title.includes("X-Men")
      );
      removeLi();
      addMoviesToDom(xmenMovies);
      break;
    case "princess":
      const princessMovies = movies.filter((movie) =>
        movie.title.includes("Princess")
      );
      removeLi();
      addMoviesToDom(princessMovies);
      break;
    case "batman":
      const batmanMovies = movies.filter((movie) =>
        movie.title.includes("Batman")
      );
      removeLi();
      addMoviesToDom(batmanMovies);
      break;
  }
}
