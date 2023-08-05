function fetchMovieData() {
    let searchText = document.getElementById('input').value;
    console.log(searchText);
    let search = fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=43033444`);
    search
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        showMovie(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  function showMovie(data) {
    let cardHtml = '';
    // Assuming data.Search is an array of movie results returned from the API
    if (data.Search) {
      data.Search.forEach((movie) => {
        cardHtml += `
        <div class="card">
        <img src="${movie.Poster}" alt="${movie.Title} poster" />
        <h1>${movie.Title}</h1>
        <p>Type: ${movie.Type}</p>
        <p>Release Date: ${movie.Year}</p>
        <p>Actors: ${movie.Actors}</p>
        <p>Rating: ${movie.imdbRating}</p>
        <p>Plot: ${movie.Plot}</p>
      </div>
        `;
      });
    } else {
      cardHtml = '<p>No results found</p>';
    }

    let movieDiv = document.getElementById('card-display');
    movieDiv.innerHTML = cardHtml;
  }