<template>
    <p class="item">
        <nuxt-link :to="'services/' + id">
            {{ service_title }}
        </nuxt-link>
    </p>
</template>

<script>
    export default({
        name: 'ServiceContent',
        props: ['service_title', 'id']
    })
</script>