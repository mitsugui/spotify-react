function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then(response => response.json())
        .then(result => displayResults(result));
}

function displayResults(result) {
    const resultsArtists = document.getElementById('result-artist');
    const resultPlaylist = document.getElementById('result-playlists');

    resultPlaylist.classList.add('hidden');

    const artistName = document.getElementById('artist-name');
    const artistGenre = document.getElementById('artist-genre');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
        artistGenre.innerText = element.genre;
    });

    resultsArtists.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchInput = document.getElementById('search-input');
    const resultsArtists = document.getElementById('result-artist');
    const resultPlaylist = document.getElementById('result-playlists');

    const searchValue = searchInput.value.toLowerCase();
    if (searchValue === '') {
        resultsArtists.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
        return;
    }

    requestApi(searchValue);
});