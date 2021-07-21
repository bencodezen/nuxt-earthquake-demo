<template>
  <div>
    <h1>Hello VueDC July 2021!</h1>
    <p>Count: {{ currentCount }}</p>
    <button @click="increaseCount">Increment</button>
    <p>Current Bbox: {{ newBbox }}</p>
    <h2>Earthquake</h2>
    <ul>
      <li v-for="(box, index) in earthquakeData.bbox" :key="`bbox-${index}`">
        {{ box }}
      </li>
    </ul>
    <p>{{ coordinateInput }}</p>
    <input type="number" v-model="coordinateInput" />
    <button @click="addNewCoordinate">Add new coordinate</button>
  </div>
</template>

<script>
import { reactive, ref, useAsync } from '@nuxtjs/composition-api'

export default {
  setup() {
    const dataStore = reactive({
      count: 10
    })

    const increaseCount = () => {
      dataStore.count++
    }

    const earthquakeData = useAsync(async () => {
      const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson'

      const response = await fetch(apiUrl).then(data => data.json())

      return response
    })

    const coordinateInput = ref(46)

    const addNewCoordinate = () => {
      console.log('add new coordinate')
      earthquakeData.value.bbox.push(coordinateInput.value)
    }

    return {
      addNewCoordinate,
      coordinateInput,
      dataStore,
      earthquakeData,
      increaseCount
    }
  },
  computed: {
    currentCount() {
      return this.$store.state.counter.count
    },
    newBbox() {
      return this.$store.state.earthquake.bbox
    }
  }
}
</script>
