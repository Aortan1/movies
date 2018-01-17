
import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  movies: []
}

const getters = {
    getMovies: state => {
        return state.movies
    }
}

const mutations = {
    [types.FETCH_MOVIES](state, { moviesList }){ // ??
        state.movies = moviesList
    }
}

const actions = {
    fetchMovies({commit}, {search}) {
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=de3acb3b&s=${search}`)
            .then(data => {
                let moviesList = data.data.Search
                commit('FETCH_MOVIES', {moviesList})

                console.log("search: ", {search})
                console.log("movieList: ", moviesList)

            })

            .catch(err => console.log(err))
    }
}

// commit - метод, отправляет данные в mutation

export default {
  state,
  getters,
  mutations,
  actions
}
