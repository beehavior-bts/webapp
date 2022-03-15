<template>
    <div class="topbar-container">
        <div class="topbar">
            <div class="wrapped-icon-title">
              <img width="56" height="56" src="@/assets/img/BeeHavior.png.svg">
              <h1> BeeHavior </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .topbar-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #434343;
    height: 70px;
    color: #FFFFFF
  }

  .wrapped-icon-title {
    display: flex;
    gap: 1.5rem;
    flex-direction: row;
    margin-left: 10px;
    width: 200px;
    padding: 5px 0 0 5px;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Monserrat';
  }

</style>
