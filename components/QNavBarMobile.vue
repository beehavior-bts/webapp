<template>
  <div class="navbar-mobile">
    <div class="navbar-container">
      <nuxt-link to="/panel/welcome">
        <img width="31" height="31" src="@/assets/img/icons/home.svg" alt="Home">
        <h5>Home</h5>
      </nuxt-link>
      <nuxt-link to="/panel/alertes">
        <img width="31" height="31" src="@/assets/img/icons/add_alert.svg" alt="Alerts">
        <h5>Alerts</h5>
      </nuxt-link>
      <nuxt-link to="/panel/compte">
        <img width="31" height="31" src="@/assets/img/icons/account_circle.svg" alt="Settings">
        <h5>Settings</h5>
      </nuxt-link>
      <nuxt-link to="/panel/admin">
        <img width="31" height="31" src="@/assets/img/icons/security.svg" alt="Admnistrator Page">
        <h5>Admin</h5>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
  .navbar-mobile {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 110px;
    background-color: #434343;
  }

  .navbar-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  a {
    position: relative;
    padding: 16px 22px 34px 22px;
    border-radius: 10px;
    /*border: 1px solid rgb(100, 100, 100);*/
    text-decoration: none;
  }

  a:hover {
    background-color: #2c2c2c;
  }

  a h5 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-decoration: none;
    color: rgb(116, 116, 116);
  }
</style>
