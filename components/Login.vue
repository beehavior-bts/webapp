<template>
  <div class="card-body">
    <div class ="form-box">
      <center>Login</center>
      <form action="" @submit.prevent="onSubmit">
          <input type="text" placeholder="Email" v-model="name" class="form-control">
          <input type="password" placeholder="Mot de Passe" v-model="password" class="form-control">
          <nuxt-link to="/panel/welcome/" class="btn">Connexion</nuxt-link>
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


 center {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    padding: 10px 0 10px 0;

    color: #000000;
  }
  .form-box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    width: auto;
    height: auto;
    margin: auto;
    padding-bottom: 10px;

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
  .btn{

    display: flex;
    align-items: center;
    justify-content: center;
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

  input {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 15px 15px 15px;
    margin: 0 15px 0 15px;

    width: 220.73px;
    height: 50.78px;
    left: 10.14px;
    top: 10.14px;

    background: #F6F6F6;
    border: 4px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;
  }

  @media all and (max-width:1024px)
  {
    #form-box{
width:auto;
    }

    #form-group{
            width: auto;
            text-align: center;
    }
  }



</style>
