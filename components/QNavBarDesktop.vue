<template>
  <div class="navbar-desktop">
    <div class="navbar-container">
      <div class="fx-column link-button-container">
        <nuxt-link to="/panel/welcome">
          <img width="31" height="31" src="@/assets/img/icons/home.svg" alt="Home">
          <h3>Home</h3>
        </nuxt-link>
        <nuxt-link to="/panel/alertes">
          <img width="31" height="31" src="@/assets/img/icons/add_alert.svg" alt="Alerts">
          <h3>Alerts</h3>
        </nuxt-link>
        <nuxt-link to="/panel/compte">
          <img width="31" height="31" src="@/assets/img/icons/account_circle.svg" alt="Settings">
          <h3>Settings</h3>
        </nuxt-link>
        <nuxt-link v-if="userInfo.is_admin" to="/panel/admin">
          <img width="31" height="31" src="@/assets/img/icons/security.svg" alt="Admnistrator Page">
          <h3>Admin</h3>
        </nuxt-link>
      </div>
      <div class="disconnect-container">
        <h3>{{ userInfo.username }}</h3>
        <a href="#" @click="logout()">
          <img width="22" src="@/assets/img/icons/power.svg" alt="Disconnect">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'QNavBarDesktop',
  computed: {
    ...mapGetters({
      userInfo: 'account/getUserInfo'
    })
  },
  methods: {
    ...mapActions({
      logout: 'account/logout'
    })
  }
}
</script>

<style scoped>
  .navbar-desktop {
    position: absolute;
    top: 85px;
    bottom: 0;
    left: calc(100% - 300px);
    right: 0;
    background-color: #434343;
  }

  .navbar-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 4rem 0;
  }

  .link-button-container {
    justify-content: center;
    align-items: space-around;
    margin: 0 auto;
    gap: 1rem;
  }

  .link-button-container a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 30px;
    border-radius: 8px;
    /* border: 1px solid rgb(100, 100, 100); */
    color: rgb(116, 116, 116);
    text-decoration: none;
  }

  .link-button-container a:hover {
    background-color: #2c2c2c;
  }

  .disconnect-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 225px;
    height: 110px;
    border-radius: 10px;
    background-color: #2c2c2c;
    padding: 20px;
    box-sizing: border-box;
    color: #8b8b8b;
  }

  .disconnect-container img {
    padding: 9px;
    border-radius: 100%;
    /* border: 1px solid black; */
  }

  .disconnect-container img:hover {
    background-color: #3d3d3d8c;
  }
</style>
