<template>
  <div>
    <Login />
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  mounted () {
    if (window.localStorage.getItem('beehavior-token') !== null) {
      this.$router.push('/panel/welcome')
    }
  }
}
</script>
