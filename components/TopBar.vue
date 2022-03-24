<template>
    <div id="top">
        <div class="topbar">
            <div class="wrapped-icon-title">
              <img width="56" height="56" src="@/assets/img/BeeHavior.png.svg">
              <h1> BeeHavior </h1>
            </div>
        </div>
        <img @click="handleDisplaySidebar" class="responsive-toggle-menu" width="58" height="58" src="@/assets/img/menu.svg">
        <div v-if="getDisplaySidebar()" class="icon-button">
          <nuxt-link to="/panel/welcome/" class="btn"> <img src="@/assets/img/home.svg"> </nuxt-link>
          <nuxt-link to="/panel/alertes" class="btn"> <img src="@/assets/img/add_alert.svg"> </nuxt-link>
          <nuxt-link to="/panel/compte" class="btn"> <img src="@/assets/img/account_circle.svg"> </nuxt-link>
          <nuxt-link to="/panel/admin" class="btn"> <img src="@/assets/img/security.svg"> </nuxt-link>
      </div>
    </div>
</template>

<script>
import { ref, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const displaySidebar = ref(false)

    const handleDisplaySidebar = () => {
      displaySidebar.value = !displaySidebar.value
      console.log(displaySidebar.value)
    }

    const getDisplaySidebar = () =>{
      return displaySidebar.value
    }

    return {
      displaySidebar,
      handleDisplaySidebar,
      getDisplaySidebar
    }
  }
})
 </script>

<style scoped>
  #top {
    position: absolute;
    display: flex;
    flex-direction:row ;
    top: 0;
    left: 0;
    right: 0;
    background-color: #434343;
    height: 70px;
    color: #FFFFFF;
    justify-content: space-between;
  }

  button{
    position: absolute;
    width: 50px;
    top: 50%;
    left: 90%;
    transform: translateX(-50%) translateY(-50%);
    background: #434343;
    border: none;
  }

  .wrapped-icon-title {
    display: flex;
    gap: 1.5rem;
    flex-direction: row;
    margin-left: 10px;
    width: 200px;
    padding: 5px 0 0 5px;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Monserrat';
  }

  .responsive-toggle-menu {
  }

  .icon-button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-right: 20px;

    position: static;
  }

  @media screen and (min-width: 1388px) {
    .responsive-toggle-menu {
      display: none;
    }
  }

 @media screen and (max-width: 600px) {
    h1{
      display: none;
    }
  }
</style>
