<template>
  <div class="main-box">
    <div class="label">
      <div class="warn-alert">
        <img src="@/assets/img/warning.svg">
      </div>
      <div class="description">
        <slot />
      </div>
    </div>
    <img class="trash" src="@/assets/img/red_trash.svg" width="58">
  </div>
</template>

<style scoped>
 .main-box{
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

 .warn-alert{

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

 .warn-alert img {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translateX(-50%) translateY(-50%);
 }

 .description{
   font-family: 'Montserrat';
   font-size: 24px;
   font-weight: 600;
   text-decoration: none;
 }

 .trash {
   margin-right: 1.75rem;
 }

@media screen and (max-width: 900px){

    .main-box{
      width: 100%;
      height: 130px;
    }
    .description{
     font-size: 20px;
    }

    .warn-alert{
      width: 50px;
    }
    .warn-alert img{
      width: 30px;
    }

    .trash{
      flex-direction: column;
      width: 50px;
      margin-right:3px;
    }
    .trash img{
      width: 50px;
      padding: 0;
    }
  }

  @media screen and (max-width: 600px){

    .main-box{
      width: 100%;
      height: 130px;
    }
    .description{
     font-size: 20px;
    }

    .warn-alert{
      width: 50px;
    }
    .warn-alert img{
      width: 30px;
    }

    .trash{
      flex-direction: column;
      width: 40px;
      margin-right:3px;
    }
    .trash img{
      width: 40px;
      padding: 0;
    }
  }
  @media screen and (max-width: 450px){

    .main-box{
      width: 100%;
      height: 130px;
    }
    .description{
     font-size: 20px;
    }

    .warn-alert{
      width: 50px;
    }
    .warn-alert img{
      width: 30px;
    }

    .trash{
      flex-direction: column;
      width: 30px;
      margin-right:3px;
    }
    .trash img{
      width: 30px;
      padding: 0;
    }
}
</style>
