import axios from 'axios';


const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'd73c176ef00ae8d6f43850cec169d290';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;
// const MOVIE_ID2 = 335983
const MOVIE_ID2 = 100

// const BASE_URL_ =`https://api.themoviedb.org/3/movie/${MOVIE_ID2}?api_key=${API_KEY}`


// const BASE_URL =`https://api.themoviedb.org/3/movie/343611?api_key=${API_KEY}`


// Define action types
export const GET_MOVIES = 'FETCH_MOVIES';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';

// export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
// export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';


export const getMovieById = (id) => {
  try{
    return async (dispatch) => {
       const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
       if (response.status === 200) {
         dispatch({
           type: GET_MOVIE_BY_ID,
           payload: response.data
         });
       }
  }
  }catch(error){
    console.log(error);
  }
}


export const getMovies = () => {
    try {
        return async (dispatch) => {
            const response = await axios.get(BASE_URL );
            if (response.data) {
                dispatch({ type: GET_MOVIES, payload: response.data.results });
            }
            else {
                console.log('Unable To fetch');
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}

// export const addFavorite = movie => dispatch => {
//     dispatch({
//       type: ADD_FAVORITE_ITEM,
//       payload: movie,
//     });
//   };
  
// export const removeFavorite = movie => dispatch => {
//     dispatch({
//       type: REMOVE_FAVORITE_ITEM,
//       payload: movie,
//     });
//   };
