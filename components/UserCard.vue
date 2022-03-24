<template>
  <div class="main">
    <div class="label">
      <div class="user-image">
        <img src="@/assets/img/account_circle.svg">
      </div>
      <div class="description">
        <slot />
      </div>
    </div>
    <div class="icon">
      <img  src="@/assets/img/info.svg">
      <img  src="@/assets/img/add-black.svg">
      <img class="trash" src="@/assets/img/red_trash.svg" width="58">
    </div>
  </div>
</template>

<style scoped>
 .main {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   flex-wrap: nowrap;
   width: 100%;
   margin-top:30px ;
   background-color: white;
   height: 130px;
   border-radius: 10px;
 }

 .label {
   display: flex;
   flex-direction: row;
   height: 100%;

   align-items: center;
   gap: 1.5rem;
 }

 .user-image{

   position: relative;
   height: 100%;
   background: #EDEDED;
   border-radius: 10px 0 0 10px;
   display: flex;
   gap: 1.5rem;
   flex-direction: row;
   width: 100px;
   align-items: center;
   justify-content: flex-start;
 }

 .user-image img {
   position: absolute;
   width: 50px;
   top: 50%;
   left: 50%;
   transform: translateX(-50%) translateY(-50%);
 }

 .icon img{
   padding: 0 10px 0 10px;
 }

 .description{
   font-family: 'Montserrat';
   font-size: 24px;
   font-weight: 600;
   text-decoration: none;
 }

 .trash {
   margin-right: 1.2rem;
 }

@media screen and (max-width: 900px){
    .description{
     font-size: 20px;
    }

    .user-image{
      width: 50px;
    }
    .user-image img{
      width: 30px;
    }

    .icon{
      flex-direction: column;
      width: 30px;
      margin-right:3px;
    }
    .icon img{
      width: 30px;
      padding: 0;
    }
  }

  @media screen and (max-width: 600px){
    .description{
      font-size: 16px;
    }
  }
  @media screen and (max-width: 450px){
    .description{
      font-size: 12px;
    }
  }

</style>
