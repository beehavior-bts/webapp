<template>
  <div class="form-box">

      <div class ="user-box">
        <form action="" @submit.prevent="onSubmit">
          <input type="text" placeholder="Utilisateur" v-model="name" class="form-user">
          <input type="tel" placeholder="Tel" v-model="tel" class="form-user">
          <input type="text" placeholder="Email" v-model="Email" disabled= "disabled" class="form-user">
          <button class="btn">Appliquer</button>
        </form>
      </div>

      <div class ="mdp-box">
        <center>Changer votre mot de passe</center>
        <form action="">
          <input type="password" placeholder="mot-de-passe" v-model="password" class="form-mdp">
          <input type="password" placeholder="Nouveau mot-de-passe" v-model="password" class="form-mdp">
          <button class="btn2">Appliquer</button>
        </form>
      </div>


    </div>
</template>

<style scoped>

.form-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
 }
  .mdp-box title{

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    gap: 1em;
    color: #000000;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    gap: 1.5rem;
  }
  .user-box{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 230px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 270px;
    border-radius: 10px;
    background: #434343;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  }
  .mdp-box{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 230px;
    background: #434343;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .form-user{
    text-align: center;
    display: flex;
    align-items: center;

    width: 70%;
    height: 40px;

    background: #F6F6F6;
    box-sizing: border-box;
    border-radius: 10px;

    font-size-adjust: 1;

  }

  .form-mdp {
    text-align: center;
    display: flex;
    align-items: center;

    width: 70%;
    height: 40px;

    background: #F6F6F6;
    box-sizing: border-box;
    border-radius: 10px;

    font-size-adjust: 1;
  }
  center {
      font-family: 'Montserrat';
      font-style: normal;
      width: 100%;
      font-weight: 600;
      font-size: 40px;
      line-height: 50px;
      text-align: center;
      color: #000000;
      border-radius: 10px 10px 0 0;
      background: #EDEDED;
    }

  .btn{
    border: none;
    text-decoration: none;
    width: 70%;
    height: 45px;
    background: #6BDA68;
    border-radius: 10px;
    margin:auto;
    color: #FFFFFF;

    font-size: 24px;
    font-weight: 600;
  }
  .btn2{

    text-decoration: none;
    width: 70%;
    height: 45px;
    margin-bottom: 10px;

    border-radius: 10px;
    background-color: #FFC265;
    font-size: 24px;
    font-weight: 600;
    border: none;
  }

    @media screen and (max-width: 900px){
    .form-box{
      width: 600px;
    }
  }

  @media screen and (max-width: 600px){
    .form-box{
      width: 450px;
    }
  }
  @media screen and (max-width: 450px){
    .form-box{
      width: 350px;
    }
  }
</style>
