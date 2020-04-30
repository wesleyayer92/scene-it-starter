const moviesContainer = document.getElementById('movies-container');
// function saveToWatchlist(movieId) {
//   const movie = movieData.find(currentMovie => currentMovie.imdbID == movieId);
//   console.log(movie);
//   let watchlistJSON = localStorage.getItem('watchlist');
//   let watchlist = JSON.parse(watchlistJSON);
//   // console.log(watchlistJSON);
//   if (watchlistJSON == null) {
//     let watchlist = [];
//     watchlist.push(movie);
//     watchlistJSON = JSON.stringify(watchlist);
//     localStorage.setItem('watchlist', watchlistJSON);
//     // console.log('set');
//     // console.log(watchlist);
//   } else {
//     watchlist = JSON.parse(watchlistJSON);
//     console.log(watchlist);
//   }

 function saveToWatchlist(imdbID) { const movie = movieData.find(function(currentMovie){ return currentMovie.imdbID == imdbID; }); let watchlistJSON = localStorage.getItem('watchlist'); let watchlist = JSON.parse(watchlistJSON); if (watchlist == null) { watchlist = []; watchlist.push(movie); console.log(watchlist); watchlistJSON = JSON.stringify(watchlist); localStorage.setItem('watchlist', watchlistJSON); } else { watchlist.push(movie); console.log(watchlist); watchlistJSON = JSON.stringify(watchlist); localStorage.setItem('watchlist', watchlistJSON); } }
  // let watchlist = JSON.parse(watchlistJSON) || [];
  // console.log(watchlist);
  // if (watchlist == null) {
  //   watchlist = [];
  // }
  // watchlist.push(movie);
  // watchlistJSON = JSON.stringify(watchlist);
  // localStorage.setItem('watchlist', watchlistJSON);
// }

const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchString = document.querySelector('input').value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    axios.get(`http://www.omdbapi.com/?apikey=b43843a0&s=${urlEncodedSearchString}`)
          .then(r => moviesContainer.innerHTML = renderMovies(r.data.Search));
    function renderMovies(movieArray) {
        let movieHtmlArray = movieArray.map(movie => {
            return `<div class="movie card" style="width: 18rem;">
            <img src="${movie.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${movie.imdbID}')">Add</a>
            </div>
          </div>`
        });
        return movieHtmlArray.join(``);
    }
    moviesContainer.innerHTML = renderMovies(movieData);
})
