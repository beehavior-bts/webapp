<template>
  <div class="main-flex-container" :style="[ $device.isDesktop ? {'padding': '5px 5px 0 5px'} : {'padding': '0'} ]">
    <Nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PanelPage',
  layout (context) {
    return context.$device.isMobile ? 'mobile' : 'desktop'
  },
  async mounted () {
    await this.fetchInfo()
  },
  methods: {
    ...mapActions({
      fetchInfo: 'account/fetchInfo'
    })
  }
}
</script>

<style scoped>
  .main-flex-container {
    display: flex;
    width: 100%;
    max-width: 1000px;
    height: 100%;
    margin: auto auto;
    /* background-color: black; */
    /* border: 1px solid black; */
    box-sizing: border-box;
    overflow: hidden;
  }
</style>
