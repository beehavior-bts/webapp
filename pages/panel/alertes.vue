<template>
  <div class="max-fill">
    <QHiveSelector />
    <QAddRule />
  </div>
</template>

<script>
export default {
  name: 'AlertPage'
}
</script>

<style scoped>
  .main-content {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: auto;
    transform: translateX(-50%) translateY(-50%);
    width: 850px;
    height: 95%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .main-content::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 900px){
    .main-content{
      width: 600px;
    }
  }

  @media screen and (max-width: 600px){
    .main-content{
      width: 430px;
    }
  }
  @media screen and (max-width: 450px){
    .main-content{
      width: 380px;
    }
  }
</style>
