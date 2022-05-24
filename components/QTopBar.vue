<template>
  <div class="top-bar">
    <div class="top-bar-container">
      <img width="60" src="@/assets/img/icons/BeeHavior.png.svg" alt="BeeHavior">
      <h1>BeeHavior</h1>
    </div>
  </div>
</template>

<style scoped>
  .top-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: calc(100% - 85px);
    overflow: hidden;
    background-color: #434343;
  }

  .top-bar-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 1rem;
    gap: 1.5rem;
  }

  .top-bar-container h1 {
    color: white;
  }
</style>
