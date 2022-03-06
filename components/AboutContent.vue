<template>
    <p class="item">
        <nuxt-link :to="'about/' + id">
            {{ title }}
        </nuxt-link>
    </p>
</template>

<script>
    export default({
        name: 'AboutContent',
        props: ['title', 'id']
    })
</script>