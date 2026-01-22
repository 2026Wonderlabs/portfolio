const movieSelect = document.getElementById("movieSelect");
const genreSelect = document.getElementById("genreSelect");
const results = document.getElementById("results");

// Populate selectors
function loadSelectors() {
    const genres = new Set();

    movies.forEach(movie => {
        // Add movie titles
        const option = document.createElement("option");
        option.value = movie.title;
        option.textContent = movie.title;
        movieSelect.appendChild(option);

        // Collect genres
        genres.add(movie.genre);
    });

    // Add genres to selector
    genres.forEach(g => {
        const option = document.createElement("option");
        option.value = g;
        option.textContent = g;
        genreSelect.appendChild(option);
    });
}

function displayMovies(list) {
    results.innerHTML = "";

    list.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${movie.poster}">
            <h3>${movie.title}</h3>
            <p>${movie.year} • ${movie.genre}</p>
            <p>${movie.plot}</p>
        `;

        results.appendChild(card);
    });
}

function filterMovies() {
    const selectedMovie = movieSelect.value;
    const selectedGenre = genreSelect.value;

    let filtered = movies;

    if (selectedMovie) {
        filtered = filtered.filter(m => m.title === selectedMovie);
    }

    if (selectedGenre) {
        filtered = filtered.filter(m => m.genre === selectedGenre);
    }

    displayMovies(filtered);
}

movieSelect.addEventListener("change", filterMovies);
genreSelect.addEventListener("change", filterMovies);

loadSelectors();
displayMovies(movies);