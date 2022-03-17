<template>
  <div class="icon-wrapped-on-searchbar">
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Rechercher un utilisateur" /> <br> <br>

    </div>
    <!--<img  src="@/assets/img/search.svg"> -->
  </div>
</template>

<style scoped>

  input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    width: 100%;
    height: 45px;
    margin: auto;

    background: #F7F7F7;
    border-radius: 6px;
    box-sizing: border-box;

    gap: 1.5em;

    text-align: center;
    font-size: 20px;
  }

  .search-wrapper{

  margin-bottom: 30px;

  }
</style>

