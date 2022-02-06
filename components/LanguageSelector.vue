<template>
  <div>
    <b-form-select v-model="selected" @change= "onChange(selected)" :options="options" size="m" class="mt-3"></b-form-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: this.$i18n.locale,
        options: [
          { value: 'jp', text: '日本語' },
          { value: 'tw', text: '繁體中文' },
          { value: 'cn', text: '简体中文' },
          { value: 'en', text: 'English' },
        ]
      }
    },
    methods: {
        onChange(event) {
            this.$router.replace(this.switchLocalePath(event));
        }
    }
  }
</script>