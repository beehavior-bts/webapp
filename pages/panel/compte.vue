<template>
  <div class="max-fill">
    <div class="scrollable-content">
      <QUserInfo :datas="userInfo" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AccountPage',
  computed: {
    ...mapGetters({
      userInfo: 'account/getUserInfo'
    })
  }
}
</script>

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

  .scrollable-content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .scrollable-content::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 900px) {
    .main-content{
      width: 650px;
    }
  }

  @media screen and (max-width: 600px) {
    .main-content{
      width: 450px;
    }
  }
  @media screen and (max-width: 450px) {
    .main-content{
      width: 380px;
    }
  }
</style>
