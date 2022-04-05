<template>
<div class="main-content">
  <UserInfos />
  <UserForm />
</div>
</template>

<style scoped>
  .main-content {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: auto;
    transform: translateX(-50%) translateY(-50%);
    width: 850px;
    height: 95%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .main-content::-webkit-scrollbar {
    display: none;
  }

    @media screen and (max-width: 900px){
    .main-content{
      width: 650px;
    }
  }

  @media screen and (max-width: 600px){
    .main-content{
      width: 450px;
    }
  }
  @media screen and (max-width: 450px){
    .main-content{
      width: 380px;
    }
  }
</style>
