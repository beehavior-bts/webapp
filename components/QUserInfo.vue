<template>
  <div class="fx-column user-info">
    <div class="fx-row user-static">
      <div class="user-pp">
        <h3>{{ datas.username[0].toUpperCase() }}</h3>
      </div>
      <div class="fx-column">
        <p>ID : {{ datas.id }}</p>
        <p>NOM : {{ datas.username }} </p>
        <p>EMAIL : {{ datas.email }}</p>
      </div>
    </div>
    <input v-model="userInfo.username" type="text" placeholder="Nom utilisateur" :disabled="blockInputs">
    <input v-model="userInfo.email" type="email" placeholder="Email" :disabled="blockInputs">
    <input v-model="userInfo.phone" type="tel" placeholder="Téléphone" :disabled="blockInputs">
    <div class="fx-row bot-button">
      <button class="btn-lock" @click="blockInputs = !blockInputs">
        {{ blockInputs ? 'Débloquer' : 'Bloquer' }}
      </button>
      <button class="btn-save" @click="applyNewSettings(userInfo)">
        Enregistrer
      </button>
    </div>
    <button v-if="$device.isMobile" class="btn-disconnect" @click="logout()">
      Déconnexion
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'QUserInfo',
  props: {
    datas: {
      type: Object,
      required: true,
      default: () => {
        return {
          id: 546,
          username: 'John Doe',
          email: 'john.doe@gmail.com',
          phone: '+33656815522'
        }
      }
    }
  },
  data () {
    return {
      userInfo: {
        username: this.datas.username,
        email: this.datas.email,
        phone: this.datas.phone
      },
      blockInputs: true
    }
  },
  methods: {
    ...mapActions({
      logout: 'account/logout',
      applyNewSettings: 'account/applyNewSettings'
    })
  }
}
</script>

<style scoped>

  p {
    margin: 0;
  }

  .user-info {
    width: 100%;
    margin: 0 auto;
    background-color: #434343;
    border-radius: 6px;
    padding: 1rem;
    box-sizing: border-box;
    gap: 1rem;
    color: white;
  }

  .user-static {
    align-items: center;
    gap: 1rem;
  }

  .user-pp {
    position: relative;
    width: 57px;
    height: 57px;
    background-color: rgb(89, 154, 214);
    color: white;
    border-radius: 50%;
  }

  .user-pp h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  input {
    font-size: 16px;
    outline: none;
    border: none;
    background-color: rgb(243, 243, 243);
    padding: 12px 12px;
    border-radius: 6px;
    transition: .5s ease-in-out;
    border: 2px solid transparent;
  }

  input:focus {
    border: 2px solid rgb(89, 154, 214);
  }

  button {
    outline: none;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    color: white;
  }

  button:hover {
    opacity: 0.9;
  }

  .bot-button {
    gap: 1rem;
    height: 40px;
  }

  .btn-lock {
    width: 130px;
    height: 100%;
    background-color: rgb(163, 163, 163);
  }

  .btn-save {
    width: 100%;
    background-color: rgb(55, 206, 135);
  }

  .btn-disconnect {
    height: 40px;
    background-color: rgb(255, 59, 59);
    color: white;
  }
</style>
