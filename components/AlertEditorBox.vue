<template>
  <div class ="box_config_alert">
    <div class="select-box">
      <select id="choix_type" class="liste-type">
        <option value="00" disabled selected>Type</option>
        <option value="01">Température</option>
        <option value="02">Humidité</option>
        <option value="03">Masse</option>
      </select>

      <div class ="condition">
        <select id="choix_condition" class="liste-condition">
        <option value="00" disabled selected>Condition</option>
        <option value="01">Inférieur à</option>
        <option value="02">Supérieur à</option>
        </select>
      </div>

      <div class ="valeur">
        <input type="number" placeholder="Value">
      </div>
    </div>

    <img  src="@/assets/img/addbutton.svg">

  </div>
</template>

<style scoped>

.box_config_alert{

  width: 100%;
  height: 100px;
  margin: auto;

  background: #434343;
  border-radius: 10px;

  display: flex;
  flex-direction:row ;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  box-sizing: border-box;
  gap: 1.5rem;
  }

.box-button{
  display: flex;
  flex-direction:row ;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem 0 1rem;
  box-sizing: border-box;
  gap: 1.5rem;
}
.select-box{
  display: flex;
  flex-direction:row ;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem 0 1rem;
  box-sizing: border-box;
  gap: 1.5rem;
}
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

    width: 151px;
  height: 40px;

  background: #F7F7F7;
  border-radius: 6px;
  box-sizing: border-box;
  padding-left: 10px;
  /*background-image: url('@/assets/img/arrow_drop_down_circle.svg') no-repeat center right;*/
}

select::after {
  content: "";
}


input{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  width: 151px;
  height: 40px;

  background: #F7F7F7;
  border-radius: 6px;
}
.add-alert{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  width: 47px;
  height: 47px;

  border-radius: 45px;

}

img{
  display: flex;
  flex-direction:row ;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem 0 1rem;
  box-sizing: border-box;
  gap: 1.5rem;
}



</style>
