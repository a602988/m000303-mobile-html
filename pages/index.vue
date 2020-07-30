<template>
  <div>
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        <nuxt-link :to="switchLocalePath('zh-Hant')">zh-Hant</nuxt-link>

        <nuxt-link to="/en">en</nuxt-link>
        <nuxt-link to="/">tw</nuxt-link>
  </div>
</template>

<script>

export default {
  head () {
    return {

    }
  },
  computed: {

  },
  components: {
  }
}
</script>
