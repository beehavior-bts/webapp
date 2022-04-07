<template>
  <div class="main">
    <div class="main-box">
        <div class="description">
          <slot />
        </div>
    </div>
    <div>
    <SearchDate />
    </div>
  </div>
</template>


<script>

export default {

}
</script>

<style scoped>

.main{
  gap: 1.5rem;
}

.main-box{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   flex-wrap: nowrap;
   width: 100%;
   margin-top:30px ;
   background-color: white;
   height: 530px;
   border-radius: 10px;

 }

.description{
   font-family: 'Montserrat';
   font-size: 24px;
   font-weight: 600;
   text-decoration: none;
 }
</style>
