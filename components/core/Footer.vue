<template>
    <v-footer id="core-footer" height="82">
        <v-spacer />
        <span class="font-weight-light copyright">
            &copy;
            {{ new Date().getFullYear() }}
            株式会社ミニクラウド
        </span>
    </v-footer>
</template>

<style>
#core-footer {
    z-index: 0;
}
</style>
