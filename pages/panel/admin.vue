<template>
 <div>
    <div class="main-content">
      <SearchBar />
      <AdminAddUser />
      <div class="filter-container">
        <component v-for="item in buttons" :is="item" :key="item.id" :buttons="buttons" />
        <img src="@/assets/img/addbutton.svg" @click="add">
      </div>
    </div>
  </div>
</template>

<script>
const dynamicComponentFilter = () => import("@/components/UserCard");

export default {
  data() {
    return {
      buttons: []
    }
  },

  methods: {
    add() {
      this.buttons.push(dynamicComponentFilter);
    }
  }
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
      width: 450px;
    }
  }
  @media screen and (max-width: 450px){
    .main-content{
      width: 350px;
    }
  }
</style>
