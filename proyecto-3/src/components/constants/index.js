//heroku a través de su servicio disponibiliza llamadas
const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://api.musixmatch.com/ws/1.1/';
const chart_tracks_get = 'chart.tracks.get?chart_name=top&page=1&page_size=10&f_has_lyrics=true';
const track_search = 'track.search?q_track=';
const track_search_params = '';
const track_lyrics_get = 'track.lyrics.get?commontrack_id=';
const track_get = 'track.get?commontrack_id=';
const api_key = '&apikey=35c75521a1e5ba05f652f30b33cce030';

export const chartTracksGet = () => `${cors_anywhere}${base_url}${chart_tracks_get}${api_key}`;
export const trackSearch = q_track => `${cors_anywhere}${base_url}${track_search}${q_track}${track_search_params}${api_key}`;
export const trackLyricsGet = commontrack_id => `${cors_anywhere}${base_url}${track_lyrics_get}${commontrack_id}${track_search_params}${api_key}`;
export const trackGet = commontrack_id => `${cors_anywhere}${base_url}${track_get}${commontrack_id}${track_search_params}${api_key}`;
