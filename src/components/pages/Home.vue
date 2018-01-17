<template>
    <div class="hello">
        <div class="hello container">
            <div class="field">
                <label for="" class="label"> Введите название фильма {{ counter }} </label>
                <div class="control row">
                    <input type="text" class="input" v-model="searchInput" placeholder="Movie name">
                    <button  type="button" name="btn" @click="fetchMovies()">Search</button>
                </div>
            </div>
            <div class="columns is-multiline is-mobile">
                <movie  v-for="(item, key) in movies" :movie="item" :key="key"></movie>
            </div>
            <div class="box" v-if="!movies">
                Nothing Found
            </div>
        </div>
    </div>

</template>

<script>
    import Movie from "../shared/Movie.vue"
    export default {
        name: "Home",
        components: { Movie },
        data(){
            return{
                searchInput: 'Mad'
            }
        },
        computed:{
          movies(){
              return this.$store.getters.getMovies
          },
          counter(){
              return this.$store.getters.counter //
          }
        },
        mounted(){
          this.$store.dispatch('startCounter',{}) // вызов акшена startCounter
        },

        methods: {
            fetchMovies(){
                console.log('!! fetchMovies().')

                const search = this.searchInput
                this.$store.dispatch('fetchMovies',{
                    search
                })
            }
        }
    }
</script>


<style scoped>

</style>