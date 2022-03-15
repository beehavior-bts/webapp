<template>
  <div class="main">
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
</style>
