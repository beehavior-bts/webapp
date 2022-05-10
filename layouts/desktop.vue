<template>
  <div>
    <QTopBar />
    <QNavBarDesktop />
    <div class="main-view">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopLayout'
}
</script>

<style scoped>
  .main-view {
    position: absolute;
    top: 85px;
    left: 0;
    right: 300px;
    bottom: 0;
    background-color: #9FBD94;
    overflow: hidden;
  }
</style>
