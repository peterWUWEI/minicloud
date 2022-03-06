<template>
    <p class="item">
        <nuxt-link :to="'contacts/' + id">
            {{ title }}
        </nuxt-link>
    </p>
</template>

<script>
    export default({
        name: 'ContactContent',
        props: ['title', 'id']
    })
</script>