
var map = L.map('map', {
	center : [47.02604, 28.83422],
	zoom : 12,
	attributionControl : false,
	minZoom : 8,
	maxZoom : 18,
	layers : [L.tileLayer('http://localhost:3000/{z}/{x}/{y}.png')],
	maxBounds : L.latLngBounds([45.3599, 26.1749], [48.5457, 30.3497])
});
