<template>
  <div class ="list-bar">
    <select id="choix_ruche" class="liste"><img class="arrow" src="@/assets/img/arrow_drop_down_circle.svg" width="58">
      <option value="00" disabled >Sélectionnez une Ruche </option>
      <option value="01">Ruche1</option>
      <option value="02">Ruche2</option>
      <option value="03">Ruche3</option>
    </select>
  </div>
</template>

<style scoped>

  select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    width: 100%;
    height: 30px;
    margin: auto;

    background: #F7F7F7;
    border-radius: 6px;
    box-sizing: border-box;

    gap: 1.5em;

    text-align: center;
    text-align-last: center;
    font-size: 20px;
  }

  .list-bar{

  margin-bottom: 30px;

  }

  @media screen and (max-width: 900px){
  .list-bar{
      width: 100%;
      height: 30px;
    }
    .liste{
      width: 100%;
      height: 30px;

    }
  }
  @media screen and (max-width: 600px){
    .list-bar{
      width: 100%;
      height: 30px;
    }
    .liste{
      width: 100%;
      height: 30px;

    }
  }


  @media screen and (max-width: 450px){
    .list-bar{
        width: 100%;
        height: 30px;
      }
      .liste{
        width: 100%;
        height: 30px;

      }
    }
</style>

