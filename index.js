const moviesContainer = document.getElementById('movies-container');

const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', e => {
    e.preventDefault();
    function renderMovies(movieArray) {
        let movieHtmlArray = movieArray.map(movie => {
            return `<div class="movie card" style="width: 18rem;">
            <img src="${movie.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Add</a>
            </div>
          </div>`
        });
        return movieHtmlArray.join(``);
    }
    moviesContainer.innerHTML = renderMovies(movieData);
})