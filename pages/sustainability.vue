<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">サステナビリティ</div>
            </div>
            <div class="content">
                <div class="sd-title">{$sd.title}</div>
                <div class="sd-content">{$sd.content}</div>
            </div>
	    </div>
    </div>
</template>

<script>
    export default {
        name: 'sustainability'
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../images/bg-sd.jpg);
    }
</style>