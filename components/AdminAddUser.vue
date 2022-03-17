<template>
  <div class ="box_add_user">
    <div class="input-box">

      <input type="text" v-model="search" placeholder="Nom utilisateur" /> <br> <br>
      <input type="text" v-model="search" placeholder="Email" /> <br> <br>

    </div>
      <img  src="@/assets/img/addbutton.svg">
  </div>
</template>

<style scoped>

.box_add_user{

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

.input-box{
  display: flex;
  flex-direction:row ;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem 0 1rem;
  box-sizing: border-box;
  gap: 1.5rem;
}

input{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  width: 300px;
  height: 40px;

  background: #F7F7F7;
  border-radius: 6px;
  box-sizing: border-box;
  padding-left: 10px;
  /*background-image: url('@/assets/img/arrow_drop_down_circle.svg') no-repeat center right;*/
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
