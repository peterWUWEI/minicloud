<template>
    <div class="news-item">
        <div class="item-left">
            <nuxt-link :to="'news/' + id"></nuxt-link>
        </div>
        <div class="item-right">
            <p class="item-title">
                {{ new Date(news_date).toISOString().slice(0, 10).replace(/-/g, '') }}
            </p>
            <p class="item-desc">
                <nuxt-link :to="'news/' + id">
                    {{ news_title }}
                </nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsContent',
    props: ['news_title', 'news_date', 'id'],
};
</script>

<style scoped>
.news-item {
    height: auto;
    border-left: 5px solid #ccc;
    padding-left: 10px;
}

.news-item .item-left {
    display: none;
}

.news-item .item-right {
    margin-left: 0;
    height: auto;
}

.news-item .item-right .item-title {
    line-height: 25px;
}

.news-item .item-right .item-desc {
    font-size: 16px;
    color: #000;
    line-height: 25px;
}
</style>
