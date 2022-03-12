<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">
                    网站政策
                </div>
            </div>
            <div class="content">
                <div class="sd-title">网站政策</div>
                <div class="sd-content">
                    
                </div>
                

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sitemap'
    }
</script>

<style scoped>
    .main .top {
        background-image: url("/images/bg-contact.jpg");
    }

    .main .content .sd-content {
        width:100%;
        height: auto; 
        overflow: hidden; 
        background: #fff;
        border: 1px solid #ccc;
        padding: 20px; 
        box-sizing: border-box;
        margin-bottom: 30px;
    }
</style>