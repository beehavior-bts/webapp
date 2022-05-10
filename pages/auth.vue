<template>
  <div class="bg">
    <!--<TopBar forceHideMenu="true" />-->
    <QTopBar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'AuthPage'
}
</script>

<style scoped>
.bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('@/assets/img/Welcom-Background.svg');
  }
</style>
