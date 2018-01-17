<template>
    <div class="hello">
        <div class="hello container">
            <div class="field">
                <label for="" class="label"> Введите название фильма </label>
                <div class="control row">
                    <input type="text" class="input" v-model="searchInput" placeholder="Movie name">
                    <button class="" type="button" name="btn" @click="fetchMovies()">Search</button>
                </div>
            </div>
            <div class="columns is-multiline is-mobile">
                <!--фильмы-->
            </div>
            <div class="box">
                Nothing Found
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                searchInput: 'Mad'
            }
        },
        methods: {
            fetchMovies(){
                console.log('!! fetchMovies().')
            }
        }
    }
</script>


<style scoped>

</style>