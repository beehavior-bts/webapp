<template>
    <div class="sidebar-container">
      <div class="icon-button">
          <nuxt-link to="/panel/welcome/" class="btn"> <img src="@/assets/img/home.svg">Accueil </nuxt-link>
          <nuxt-link to="/panel/alertes" class="btn"> <img src="@/assets/img/add_alert.svg">Alertes </nuxt-link>
          <nuxt-link to="/panel/compte" class="btn"> <img src="@/assets/img/account_circle.svg">Compte </nuxt-link>
          <nuxt-link to="/panel/admin" class="btn"> <img src="@/assets/img/security.svg">Admin </nuxt-link>
      </div>
      <div class="disconnected">
        <nuxt-link to="/" class="btn-power"><img src="@/assets/img/power.svg"> Déconnexion </nuxt-link>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .sidebar-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    gap: 2rem;

    background: #434343;
    }

  .icon-button{
          /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-family: 'Montserrat';

    position: static;
  }

  .btn{
        /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 9px 10px 0px;
    margin:auto;

    position: static;
    width: 279px;
    height: 62.91px;
    border-radius: 10px;

    background: #DDDDDD;
    font-size: 24px;
    font-weight: 600;
    border: none;
    color: #777373;
    text-decoration: none;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 29px 0px;
  }
  .btn-power{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 33px 26px;

    position: static;
    width: 321px;
    height: 126px;
    top: 550px;


    background:  #DDDDDD;
    border: 4px solid #9FBD94;
    box-sizing: border-box;
    border-radius: 7px;
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    color: #777373;
  }



  img{

    position: static;
    width: 36.12px;
    height: 36.12px;

    font-family: Material Icons;
    font-style: normal;
    font-weight: normal;
    font-size: 36.1188px;
    line-height: 36px;

    /* identical to box height */
    display: flex;
    align-items: center;
    text-align: center;

    color: #777373;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 17px;
  }

</style>
