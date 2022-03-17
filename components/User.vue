<template>
  <div class="main">

    <div class="user-info">
      <div class="circle">
        U
      </div>
      <div class="name_id_user">
      <span> Utilisateur </span>
      <p>ID: n°id</p>
      </div>
    </div>

    <div class="card-body">

      <div class ="mdp-box">
          <center>Changer de mot de passe</center>
          <form action="" @submit.prevent="onSubmit">
            <input type="password" placeholder="mot-de-passe" v-model="tel" class="form-mdp">
            <input type="password" placeholder="Nouveau mot-de-passe" v-model="tel" class="form-mdp">
            <button class="btn2">Appliquer</button>
          </form>
      </div>

      <div class ="form-box">

          <form action="" @submit.prevent="onSubmit">
            <input type="text" placeholder="Utilisateur" v-model="name" class="form-user">
            <input type="tel" placeholder="Tel" v-model="tel" class="form-user">
            <input type="text" placeholder="Email" v-model="name" disabled= "disabled" class="form-user">
            <button class="btn">Appliquer</button>
          </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

/* formulaire */

 .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5rem;
 }

 .card-body{
   display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10rem;
    margin: auto;

 }

 .circle{
    margin:auto;
    width:165px;
    background:#C77575;
    height:165px;
    text-align:center;
    border-radius: 200px;
    line-height: 175px;
    color: white;
    font-family: "Montserrat";
    font-size: 90px;
}
 .user-info{
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 2rem;
 }center {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    gap: 1em;
    color: #000000;
  }
 .name_id_user p{
    line-height: 175px;
    color: white;
    font-family: "Montserrat";
    font-size: 40px;
    margin: auto;
 }

 .user-info span {

    width: 100%;
    height: 45px;
    margin: auto;

    text-align: center;
    font-size: 20px;
    color: white;
    font-weight: 400;
    font-size: 60px;
    line-height: 73px;

 }

  center {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    background:#F6F6F6 ;
    border-radius:10px 10px 0 0 ;
    gap: 1em;
    color: #434343;
  }
  .form-box{
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 15rem;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    gap: 1.5rem;
  }
  .mdp-box{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 40%;
    gap: 2rem;

    background: #434343;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
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
    width: 70%;
    height: 45px;
    margin-bottom: 10px;

    border-radius: 10px;
    background-color: #FFC265;
    font-size: 24px;
    font-weight: 600;
    border: none;
  }
  .form-user{
    text-align: center;
    display: flex;
    align-items: center;

    width: 300px;
    height: 30px;

    background: #F6F6F6;
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
