<template>
  <div>
    <div class="main-content">
      <HiveSelector />
      <AlertEditorBox />

      <AlertCard>
        Humidité supérieure à 15%
      </AlertCard>
      <AlertCard>
        Humidité supérieure à 18%
      </AlertCard>
      <AlertCard>
        Température inférieure à 30°C
      </AlertCard>
      <AlertCard>
        Température supérieur à 40°C
      </AlertCard>
      <AlertCard>
        Masse inférieure à 75kg
      </AlertCard>
      <AlertCard>
        Masse supérieure à 120kg
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
