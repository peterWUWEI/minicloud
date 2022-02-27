<template>
    <div class="news-item">
        <div class="item-left">
            <nuxt-link :to="'news/' + id"></nuxt-link>
        </div>
        <div class="item-right">
            <p class="item-title"> {{ new Date(news_date).toISOString().slice(0,10).replace(/-/g,"") }}</p>
            <p class="item-desc">
                <nuxt-link :to="'news/' + id">
                    {{ news_title }}
                </nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default({
        name: 'ServiceContent',
        props: ['news_title', 'news_date', 'id']
    })
</script>