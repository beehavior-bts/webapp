<template>
  <div class="max-fill">
    <SearchBar @click.native="fetchLogin({email: 'ristich.esteban.lgm@gmail.com', password: 'TwlA55J$mny3o%e'})" />
    <AdminAddUser @click.native="fetchInfo()" />
    <div class="scrollable-content">
      <UserCard v-for="user in usersList" :key="user.id" :data="user" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AdminPage',
  data () {
    return {
      usersList: [
        {
          id: 456,
          username: 'John Doe',
          email: 'john.doe@gmail.com',
          phone: '+3365633322',
          hives: [
            {
              id: 'BEE0000000000000',
              name: 'Ruche Test',
              owner: 7
            },
            {
              id: 'FFFFFFFFFFFFFFFF',
              name: 'Super Ruche',
              owner: 7
            }
          ]
        },
        {
          id: 457,
          username: 'Frederic Canson',
          email: 'fred.canson@gmail.com',
          phone: '+3365555522',
          hives: [
            {
              id: 'BEE00000FFFFFFFF',
              name: 'Goerli',
              owner: 7
            },
            {
              id: '00000FFFFFFFFFFF',
              name: 'Ropsten',
              owner: 7
            }
          ]
        }
      ]
    }
  },

  mounted () {
    // eslint-disable-next-line no-console
    console.log('Admin Panel Mounted!')
  },

  methods: {
    ...mapActions({
      fetchLogin: 'account/fetchLogin',
      fetchInfo: 'account/fetchInfo'
    }),
    delUser () {
      //
    },

    addUser () {
      //
    },

    addHive () {
      //
    },

    delHive () {
      //
    }
  }
}
</script>

<style scoped>
  .main-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    margin: auto;
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

  @media screen and (max-width: 900px){
    .main-content{
      width: 600px;
    }
  }

  @media screen and (max-width: 600px){
    .main-content{
      width: 450px;
    }
  }
  @media screen and (max-width: 450px){
    .main-content{
      width: 350px;
    }
  }
</style>
