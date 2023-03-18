const API_KEY = "10050495d77bd38d009fb05af57bd80b";

const requests = {
    trendingMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    originalMovies: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRatedMovies: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;