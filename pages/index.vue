<template>
  <div @click="loginRedirection">
    q
  </div>
</template>

<script>
// import { defineComponent, onBeforeMount, useRouter } from '@nuxtjs/composition-api'

export default {
  /* eslint-disable no-console */
  name: 'IndexPage',
  beforeMount () {
    console.log('Index Mounted')
    this.$router.push('/auth/login')
  }
}
</script>
