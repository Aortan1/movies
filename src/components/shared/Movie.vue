<template lang="pug">

.card
    .card-image
        figure.image.is-4by3(:style="{'background-image': 'url('+ movie.Poster + ')', 'background-size': 'cover'}")
    .card-content
        .content
            h4.is-title {{ movie.Title }}
            strong.timestamp {{ movie.Year }}
    footer.card-footer

</template>

<script>
    export default {
        name: 'Movie',
        props: ['movie'],
        data: function() {
            return {
              image1: ""
            }
        }

    }
</script>

<style lang="sass">
    .hello
        color: black
</style>