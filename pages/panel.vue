<template>
  <div >
    <TopBar />
    <div class="flex-row">
      <div class="main">
        <Nuxt />
      </div>
      <div class="sidecomp">
        <SideBar />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-row {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: row;
}
.main {
  position: relative;
  width: 75%;
  background-color: #9FBD94;
}

.sidecomp {
  width: 25%;
}

@media screen and (max-width: 1300px) {
  .sidecomp {
    display: none;
  }

  .main {
    width: 100%;
  }

}
</style>
