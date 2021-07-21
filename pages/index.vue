<template>
  <div>
    <h1>Hello VueDC July 2021!</h1>
    <h2>Earthquake</h2>
    <ul>
      <li v-for="earthquake in earthquakeData.features" :key="earthquake.id">
        {{ earthquake.id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    earthquakeData: {}
  }),
  async created() {
    const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson'

    const response = await fetch(apiUrl).then(data => data.json())

    this.earthquakeData = response
  }
}
</script>
