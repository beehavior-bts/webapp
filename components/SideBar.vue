<template>
    <div class="sidebar-container">
        <div class="icon-button">
           <nuxt-link to="../welcome/" class="btn"> <img width="56" src="@/assets/img/home.svg">Acceuil </nuxt-link>
           <nuxt-link to="../alertes/" class="btn"> <img width="56" src="@/assets/img/add_alert.svg">Alertes </nuxt-link>
           <nuxt-link to="../compte/" class="btn"> <img width="56" src="@/assets/img/account_circle.svg">Compte </nuxt-link>
           <nuxt-link to="../admin/" class="btn"> <img width="56" src="@/assets/img/security.svg">Admin </nuxt-link>
           <nuxt-link to="../" class="btn-power"><img width="56" src="@/assets/img/power.svg"> Déconnexion </nuxt-link>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

 body{
    background:#9FBD94 ;
  }

  .sidebar-container{
    display: flex;
    position: absolute;
    width: 431px;
    height: 995px;
    right: 0;
    top: 70px;

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

    position: absolute;
    width: 299px;
    height: 358.64px;
    left: 66px;
    top: 189px;
  }

  .btn{
        /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10.4554px 9.50495px 10.4554px 0px;
    margin:auto;

    position: static;
    width: 279px;
    height: 62.91px;
    left: 10px;
    top: 10px;
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

    position: absolute;
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
    left: 35.69px;
    top: 13.4px;

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
