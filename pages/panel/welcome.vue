<template>
  <div>
    <div class="main-content">
      <HiveSelector />
      <Graph>
        [Zone Graphique Données]
      </Graph>
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
    margin: auto;
    transform: translateX(-50%) translateY(-50%);
    width: 850px;
    height: 95%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  @media screen and (max-width: 900px){
    .main-content{
      width: 650px;
    }
  }

  @media screen and (max-width: 600px){
    .main-content{
      width: 450px;
    }
  }
  @media screen and (max-width: 450px){
    .main-content{
      width: 380px;
    }
  }
</style>
