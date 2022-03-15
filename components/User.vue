<template>
    <div class="card-body">
      <div class ="mdp-box">
          <center2>Changer de mot de passe</center2>
                      <form action="" @submit.prevent="onSubmit">
                          <input type="password" placeholder="mot-de-passe" v-model="tel" class="form-mdp">
                          <input type="password" placeholder="Nouveau mot-de-passe" v-model="tel" class="form-mdp">
                          <button class="btn2">Appliquer</button>
                      </form>
         </div>
      <div class ="form-box">
          <center>Infos Utilisateur</center>
                      <form action="" @submit.prevent="onSubmit">
                          <input type="text" placeholder="Utilisateur" v-model="name" class="form-user">
                          <input type="tel" placeholder="Tel" v-model="tel" class="form-user">
                          <input type="text" placeholder="Email" v-model="name" class="form-user">
                          <button class="btn">Appliquer</button>
                      </form>
        </div>

      </div>
</template>
<script>
export default {

}
</script>

<style scoped>

/* formulaire */

 .card-body{
   display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10rem;

 }

 center {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    padding: 10px 0 10px 0;
    gap: 1em;
    color: #000000;
  }
  center2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    padding: 10px 0 10px 0;
    gap: 1em;
    color: #FFFFFF;
  }
  .form-box{
     display: flex;
    flex-direction: column;
    width: 20%;
    height: 50%;
    gap: 2rem;

    background: #FFFFFF;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 22.3106px;
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction:column;
    gap: 1rem;
  }
  .mdp-box{

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    height: 40%;
    gap: 2rem;

    background: #434343;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 22.3106px;
  }
  .btn{

    text-decoration: none;
    width: 182px;
    height: 50px;
    left: 62.59px;
    top: 260.46px;

    background: #6BDA68;
    border-radius: 10px;
    margin:auto;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 600;
    border: none;
  }
  .btn2{

    text-decoration: none;
    width: 182px;
    height: 50px;
    left: 62.59px;
    top: 260.46px;

    background: #6BDA68;
    border-radius: 10px;
    margin:auto;
    background-color: #FFC265;
    font-size: 24px;
    font-weight: 600;
    border: none;
  }
  .form-user{
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 15px 15px 15px;
    margin: auto;

    width: 220px;
    height: 50px;
    left: 10px;
    top: 10px;

    background: #F6F6F6;
    border: 4px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;

    font-size-adjust: 1;
  }

  .form-mdp {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 15px 15px 15px;
    margin: auto;

    width: auto;
    height: auto;
    left: auto;
    top: auto;

    background: #F6F6F6;
    border: 4px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;

    font-size-adjust: 1;
  }

  @media screen and (max-width: 1300px) {

    .card-body{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 10rem;
 }

  }



</style>
