<template>
  <div class="max-fill">
    <div class="list-bar">
      <select id="choix_ruche" v-model="hiveSelected" class="liste">
        <img class="arrow" src="@/assets/img/arrow_drop_down_circle.svg" width="58">
        <option value="00" disabled>
          Sélectionnez une Ruche
        </option>
        <option v-for="hive in hives" :key="hive.id" :value="hive.id">
          {{ hive.name }}
        </option>
      </select>
    </div>
    <div class="scrollable-content">
      <div class="fx-row period-overlap-but">
        <input v-model="start_date" type="datetime-local" placeholder="Début" name="">
        <input v-model="end_date" type="datetime-local" placeholder="Fin" name="">
        <button @click="fetchMetric()">
          Rechercher
        </button>
      </div>
      <div class="chart bg-chart fx-column" style="gap: 2rem">
        <QLineChart v-if="!hideChart" :chart-data="{ labels: compDataTime, datasets: [{ label: 'Température', borderColor: '#d44a3d', borderWidth: 4, fill: false, data: compDataTemp }]}" />
        <QLineChart v-if="!hideChart" :chart-data="{ labels: compDataTime, datasets: [{ label: 'Masse', borderColor: '#d44a3d', borderWidth: 4, fill: false, data: compDataMass }]}" />
        <QLineChart v-if="!hideChart" :chart-data="{ labels: compDataTime, datasets: [{ label: 'Humidité', borderColor: '#d44a3d', borderWidth: 4, fill: false, data: compDataHumi }]}" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapGetters } from 'vuex'

export default {
  name: 'WelcomePage',
  data () {
    return {
      hideChart: true,
      hiveSelected: null,
      data_timeline: [],
      data_temperature: [],
      data_mass: [],
      data_humidity: [],

      start_date: null,
      end_date: null
    }
  },
  computed: {
    ...mapGetters({
      hives: 'account/getUserHives'
    }),
    compDataTemp () {
      return this.data_temperature
    },
    compDataHumi () {
      return this.data_humidity
    },
    compDataMass () {
      return this.data_mass
    },
    compDataTime () {
      return this.data_timeline
    }
  },
  watch: {
    hiveSelected (_new, _old) {
      // eslint-disable-next-line no-console
      console.log('hive changed !!!!!!!')
      this.fetchMetric()
    }
  },
  mounted () {
    this.fetchMetric()
  },
  methods: {
    async fetchMetric () {
      this.hideChart = true
      await this.$axios({
        method: 'GET',
        url: '/metric' + '?hive=' + this.hiveSelected + '&start=' + new Date(this.start_date).toISOString().slice(0, 19).replace('T', ' ') + '&end=' + new Date(this.end_date).toISOString().slice(0, 19).replace('T', ' '),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.data_timeline = []
        this.data_temperature = []
        this.data_mass = []
        this.data_humidity = []
        const metricData = res.data.content
        for (const i in metricData) {
          this.data_timeline.push(metricData[i].created_on)
          this.data_humidity.push(metricData[i].humidity)
          this.data_mass.push(metricData[i].mass)
          this.data_temperature.push(metricData[i].temperature)
        }
        this.hideChart = false
      }).catch((err) => {
        console.log(err.message)
        this.data_timeline = []
        this.data_temperature = []
        this.data_mass = []
        this.data_humidity = []
      })
      console.dir(this.data_timeline)
      console.log('start : ' + this.start_date + ', end : ' + this.end_date)
    }
  },
  selectHive (hive) {
    this.hiveSelected = hive
    console.log('selected hive : ' + this.hiveSelected)
  }
}
</script>

<style scoped>

  select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    width: 100%;
    height: 30px;

    background: #F7F7F7;
    border-radius: 6px;
    box-sizing: border-box;

    gap: 1.5em;

    text-align: center;
    text-align-last: center;
    font-size: 20px;
  }

  .list-bar{
    margin-bottom: 10px;
  }

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

  .bg-chart {
    background-color: white;
    box-sizing: border-box;
    padding: 10px 0;
    border-radius: 6px;
  }

  .period-overlap-but {
    padding: 8px 16px;
    align-items: center;
    gap: 1rem;
    background-color: #434343;
    border-radius: 6px 6px 0 0;
    margin-top: 1rem;
  }

  .period-overlap-but button {
    outline: none;
    border: none;
    background-color: transparent;
    color: white;
    padding: 10px;
    border-radius: 4px;
    transition: .15s ease-in-out;
    border: 1px solid #5c5c5c;
  }

  .period-overlap-but button:hover {
    background-color: #525252;
    border: 1px solid transparent;
  }

  input[type="datetime-local"] {
    outline: none;
    border: none;
    height: 35px;
    box-sizing: border-box;
    padding: 0 10px;
    width: 200px;
    text-decoration: none;
    border-radius: 6px;
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
