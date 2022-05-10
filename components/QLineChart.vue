<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true,
      default: () => {
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            {
              label: 'Température',
              borderColor: '#d44a3d',
              borderWidth: 4,
              fill: false,
              data: [100, 150, 300, 200]
            },
            {
              label: 'Masse',
              borderColor: '#4bcc96',
              borderWidth: 4,
              fill: false,
              data: [240, 200, 190, 300]
            },
            {
              label: 'Humidité',
              borderColor: '#5da7cf',
              borderWidth: 4,
              fill: false,
              data: [120, 100, 200, 210]
            }
          ]
        }
      }
    },
    chartOptions: {
      type: Object,
      required: true,
      default: () => {
        return {
          maintainAspectRatio: false,
          responsive: true
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>
