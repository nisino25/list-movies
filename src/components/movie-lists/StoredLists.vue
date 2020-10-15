<template>
  <ul>
    <individual-list
      v-for="data in movieData"
      :key="data.id"
      :id="data.id"
      :title="data.title"
      :description="data.description"
      :link="data.link"
      :year="data.year"
      :rating="data.rating"

    ></individual-list>
  </ul>
</template>

<script>
import IndividualList from './IndividualList.vue';

export default {
  inject: ['movieData'],
  components: {
    IndividualList
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>