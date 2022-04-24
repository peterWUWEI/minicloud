<template>
    <div id="app">
        <client-only>
            <vue-editor v-model="content"></vue-editor>
        </client-only>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
    components: {
        VueEditor,
    },

    props: {
        value: {
            default: '',
        },
    },

    computed: {
        data: {
            set(value) {
                this.content = value;
                this.$emit('input', value);
            },
            get() {
                return this.content;
            },
        },
    },

    data() {
        return {
            content: '',
        };
    },
};
</script>
