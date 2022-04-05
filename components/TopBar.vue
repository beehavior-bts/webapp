<template>
    <div id="top">
      <div class="topbar">
          <div class="wrapped-icon-title">
            <img width="56" height="56" src="@/assets/img/BeeHavior.png.svg">
            <h1> BeeHavior </h1>
          </div>
      </div>
      <ul class="dropdownmenu" v-show="!forceHideMenu">
        <li>
          <a id="clickable-dropdown" href="#">
            <img width="46" height="46" src="@/assets/img/double_arrow.svg">
          </a>
          <ul class="dropdownsubmenu">
            <li><nuxt-link to="/panel/welcome/"> <img src="@/assets/img/home.svg"><br> Accueil </nuxt-link></li>
            <li><nuxt-link to="/panel/alertes"> <img src="@/assets/img/add_alert.svg"><br>Alertes </nuxt-link></li>
            <li><nuxt-link to="/panel/compte"> <img src="@/assets/img/account_circle.svg"><br>Compte </nuxt-link></li>
            <li><nuxt-link to="/panel/admin"> <img src="@/assets/img/security.svg"><br>Admin </nuxt-link></li>
            <li><nuxt-link to="/"><img src="@/assets/img/power.svg"><br>Déconnexion </nuxt-link></li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
import { ref, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    forceHideMenu: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
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

  .icon-button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-right: 20px;

    position: static;
  }

  .responsive-toggle-menu{
    margin-right: 10px;
    margin-top: 5px;
  }

  /* Dropdown menu */
.dropdownmenu {
  background-color: #666;
}
.dropdownmenu,
.dropdownmenu ul {
  /* Suppression des puces et des marges pour les listes du menu et des sous-menus */
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
.dropdownmenu ul {
  /* Masquage des sous-menu par defaut */
  display: none;
}
.dropdownmenu li {
  /* Disposition horizontale des elements de menu */
  display: inline-block;
  height: 100%;

  /* Positionnement relative des elements de menu pour pouvoir positionner les
                   sous-menu correctement en absolu */
  position: relative;
}
.dropdownmenu a {
  /* On transforme les liens en bloc pour pouvoir les dimensionner */
  display: block;

  /* Dimensions des liens */
  width: 115px;
  height: 70px;
  line-height: 30px; /* Doit etre equivalent a la hauteur du menu pour centrer le texte verticalement */
  border-bottom: 1px solid black;
  text-align: center;
}
/* avec le > on s'assure de ne pas afficher les sous-listes*/
.dropdownmenu li:hover > ul {
  /* Affichage du soumenu au survol */
  display: block;

  /* Positionnement du sous-menu */
  position: absolute;
  top: 70px; /* Hauteur du menu + hauteur du padding top et bottom : 30 + 3 + 3 = 36 */
  left: 0px; /* Decalage du sous-menu par rapport aux liens du menu*/
  z-index: 100; /* Gestion de la superposition des sous-menus par rapport au reste de la page */
}
.dropdownsubmenu > a::after {
  content: "";
}
.dropdownsubmenu ul {
  position: absolute;
  top: 0px !important;
  left: 120px !important;
}

.dropdownsubmenu li {
  position: relative;
}

.dropdownsubmenu li a {
  text-align: center;
}





/* Gestion des couleurs */
.dropdownmenu li {
  background-color: #666; /* Couleur d'arriere-plan du menu */
}

.dropdownmenu ul li {
  background-color: #DDDDDD; /* Couleur d'arriere-plan des sous-menu */
}

.dropdownmenu ul li a {
  color: #434343; /* Couleur du texte des sous-menu */
  text-decoration: none;
}
.dropdownmenu ul li:hover a {
  color: red; /* Couleur du texte des sous-menu au survol */
}

#clickable-dropdown {
  position: relative;
  height: 100%;
}

#clickable-dropdown img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

  @media screen and (min-width: 1319px) {
    .dropdownmenu{
      display: none;
    }
  }

 @media screen and (max-width: 600px) {
    h1{
      display: none;
    }
  }
</style>
