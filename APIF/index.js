const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://spotify-downloader9.p.rapidapi.com/downloadPlaylist?playlistId=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F2erlPnqkQL4KNA8HtJ5D0Q');
xhr.setRequestHeader('x-rapidapi-key', 'c3b93a0339msh35ecf69d1e8ba20p176fb9jsn58def1a6f871');
xhr.setRequestHeader('x-rapidapi-host', 'spotify-downloader9.p.rapidapi.com');

xhr.send(data);