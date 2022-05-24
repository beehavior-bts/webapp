<template>
  <div v-if="$device.isDesktop" class="fx-row max-fill box_add_user">
    <div class="fx-row input-box">
      <input v-model="search" type="text" placeholder="Nom utilisateur">
      <input v-model="search" type="text" placeholder="Email">
    </div>
    <img class="add-img" src="@/assets/img/icons/add.svg">
  </div>
  <div v-else class="fx-column max-fill box_add_user" style="gap: 0.75rem; padding: 1rem 2rem">
    <input v-model="search" type="text" placeholder="Nom utilisateur" style="width: 100%">
    <input v-model="search" type="text" placeholder="Email" style="width: 100%">
    <div class="fx-row" style="justify-content: center; background-color: #2290F5; width: 100%; height: 2rem; border-radius: 8px">
      <img :style="[ $device.isMobile ? {'width': '16px'} : {'width': '32px'} ]" src="@/assets/img/icons/add.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAddUser'
}
</script>

<style scoped>
  .box_add_user{
    background: #434343;
    border-radius: 6px;
    justify-content: space-between;
    padding: 2rem;
    box-sizing: border-box;
    align-items: center;
  }

  .input-box {
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    gap: 1.5rem;
  }

  .add-img {
    padding: 1rem;
    background-color: #2290F5;
    border-radius: 100%;
  }

  input {
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

  input {
    width: 180px;
    flex-direction: column;
    padding-left: 10px;
    margin: 0;
  }
</style>
