<template>
  <div class="fx-row user-card">
    <div class="fx-column user-info">
      <h3>{{ data.username }}</h3>
      <p>{{ data.email }}</p>
    </div>
    <div class="fx-row icon-list">
      <div class="outline-icon green" @click="hiveToggle = !hiveToggle">
        <h3>
          i
        </h3>
      </div>
      <div class="outline-icon black">
        <h3>
          +
        </h3>
      </div>
      <div class="outline-icon red">
        <img src="@/assets/img/red-trash.svg" alt="">
      </div>
    </div>
    <div v-if="hiveToggle">
      <h2 v-for="hive in data.hives" :key="hive.id">
        {{ hive.name }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {
        return {
          id: 456,
          username: 'John Doe',
          email: 'john.doe@gmail.com',
          phone: '+33656815522',
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
        }
      }
    }
  },
  data () {
    return {
      hiveToggle: false
    }
  }
}
</script>

<style scoped>
  p, h3 {
    padding: 0;
    margin: 0;
  }

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 15px;
  }

  .user-card {
    width: 100%;
    height: 6rem;
    border-radius: 8px;
    background-color: white;
    box-sizing: border-box;
    padding: 0 1rem;
    justify-content: space-between;
    margin-top: 10px;
  }

  .user-info {
    margin: auto 0;
    width: 200px;
    overflow: hidden;
  }

  .icon-list {
    margin: auto 0;
    gap: 10px;
  }

  .outline-icon {
    position: relative;
    padding: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  .green {
    border: 1px solid #69885E;
    color: #69885E;
  }

  .black {
    border: 1px solid black;
  }

  .red {
    border: 1px solid #FF0000;
  }

  .outline-icon * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
</style>
