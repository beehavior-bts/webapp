<template>

  <div class="user-info">
    <h1>Profil</h1>
    <div class="circle" >
      <img src="@/assets/img/account_circle.svg">
    </div>
    <div class="name_id_user">
    <span> Utilisateur </span>
    <p>ID: n°id</p>
    </div>
  </div>
</template>

<style scoped>

/* formulaire */
  h1{
    color: white;
    text-align: center;
    font-family: "Montserrat";
    font-size: 90px;
  }

 .user-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2.5rem;
 }


 img{
    width:150px;
    height:150px;
    color: white;
    font-family: "Montserrat";
}
 .name_id_user {
   display: flex;
   justify-content: center;
   flex-direction: column;

 }
 .name_id_user p{
    line-height: 175px;
    text-align: center;
    color: white;
    font-family: "Montserrat";
    font-size: 40px;
    margin: 0;
 }

 .name_id_user span {

    height: 45px;

    text-align: center;
    font-size: 20px;
    color: white;
    font-weight: 400;
    font-size: 60px;
    line-height: 73px;

 }


@media screen and (max-width: 900px){
    .user-info{
      width: 100%;
    }

    .name_id_user p{
      width: 100%;
    }
    .name_id_user{
      width: 100%;
    }
  }
  @media screen and (max-width: 600px){
   .user-info{
      width: 100%;
    }
    .name_id_user p{
      width: 100%;
    }
    .name_id_user{
      width: 100%;
    }
  }
  @media screen and (max-width: 450px){
    .user-info{
      width: 100%;
    }
    .name_id_user p{
      width: 100%;
    }
    .name_id_user{
      width: 100%;
    }
  }
</style>
