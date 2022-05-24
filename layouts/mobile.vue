<template>
  <div>
    <div class="main-view">
      <Nuxt />
    </div>
    <QNavBarMobile />
  </div>
</template>

<script>
export default {
  name: 'MobileLayout'
}
</script>

<style scoped>
  .main-view {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 110px;
    background-color: #9FBD94;
    padding: 5px 5px 0 5px;
    overflow: hidden;
  }
</style>
