<template>
  <div>
    <div class="main-content">
      <HiveSelector />
      <AlertEditorBox />
      <AlertCard>
        Humidité inférieur à 18%
      </AlertCard>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'welcomePage'
  }
</script>

<style scoped>
  .main-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    margin: auto;
    width: 850px;
    height: 95%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
</style>
