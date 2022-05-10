<template>
  <div class="search-wrapper">
    <input v-model="search" type="text" placeholder="Rechercher un utilisateur">
    <br>
    <br>
  </div>
  <!--<img  src="@/assets/img/search.svg"> -->
</template>

<style scoped>
  input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    width: 100%;
    height: 45px;

    background: #F7F7F7;
    border-radius: 6px;
    box-sizing: border-box;

    gap: 1.5em;

    text-align: center;
    font-size: 20px;
  }

  .search-wrapper{
  }
</style>
