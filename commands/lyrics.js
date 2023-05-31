const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const fetch = require('node-fetch');

async function fetchSongLyrics(message) {
	try {
		const apiKey = process.env.MUSIXMATCH_API_KEY;
		let url = `https://api.musixmatch.com/ws/1.1/track.search?format=json&callback=callback&q_track_artist=${message}&f_has_lyrics=1&s_track_rating=desc&apikey=${apiKey}`;

		let response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		let data = await response.json();
		let trackList = data.message.body.track_list;

		if (!trackList || trackList.length === 0) {
			url = `https://api.musixmatch.com/ws/1.1/track.search?format=json&callback=callback&q_lyrics=${message}&f_has_lyrics=1&s_track_rating=desc&apikey=${apiKey}`;
			response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			data = await response.json();
			trackList = data.message.body.track_list;
		}

		if (trackList && trackList.length > 0) {
			const trackId = trackList[0].track.track_id;
			const lyricsResponse = await fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=json&callback=callback&track_id=${trackId}&apikey=${apiKey}`);
			if (!lyricsResponse.ok) {
				throw new Error(`HTTP error! status: ${lyricsResponse.status}`);
			}
			const lyricsData = await lyricsResponse.json();
			const lyrics = lyricsData.message.body.lyrics.lyrics_body;
			return lyrics;
		}

		return 'No se encontraron letras para esta canción.';
	} catch (error) {
		console.error(`Could not fetch lyrics: ${error}`);
		return 'Hubo un error al buscar las letras de la canción.';
	}
}

module.exports = {
	fetchSongLyrics,
};