<template>
    <div class="anime-block">
        <div class="anime-block__image">
            <img :src="anime.images.jpg.image_url" :alt="anime.title">
        </div>
        <div class="anime-block__info">
            <span @click="detailedInfo">
                {{ anime.title }}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'anime-block',
    props: {
        anime: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {

        }
    }
}
</script>
<style>

</style>