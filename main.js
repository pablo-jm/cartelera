const requestURL = "../json/films.json";

async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies => {
    for(let index = 0; index < movies.films.length; index++){
        const moviesSection = document.getElementById("movieSection");

        let id = movies.films[index].id;
        let title = movies.films[index].title;
        let poster = movies.films[index].poster;
        let year = movies.films[index].year;
        let length = movies.films[index].length;
        let director = movies.films[index].director;
        let synopsis = movies.films[index].synopsis;
        
        moviesSection.innerHTML += `
    <div class="container2 col-6 mb-4">
      <div class="card text-bg-dark border-light">
                <img src="${poster}" class="card-img-top" alt="Film poster">
        <div class="card-body text-center ">
                <h5 class="card-title">${title}</h5>
                <p class="card-text"><span class="h6">${year}</span> - ${length}</p>
                <p class="card-text mb-4"><span class="h7">${director}</span></p>
                <a href="#" class="btn btn-sm btn-light btn-outline-dark mb-3">Synopsis</a>
        </div>
      </div>
    </div>       `;
    }
    //<p class="card-text">${synopsis}</p> Detrás del botón de synopsis
});