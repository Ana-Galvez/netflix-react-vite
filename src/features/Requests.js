const API_KEY='b24635095c17c7711e155e0df0d9e914'

const requests ={
  fetchTrading:`/trending/all/week?api_key=${API_KEY}&language=es-ES`,
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-ES`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests