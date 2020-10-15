<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }} &nbsp;&nbsp; <small style="color:grey">{{rating}}</small></h3>
        <base-button mode="flat" @click="deleteList(id)">Delete</base-button>
      </header>
      <p>{{ description }}</p>
      <p v-if="year">{{ year }} released </p>
      <nav>
        <img :src="link" style="width:125px;height:150px;">
        <br>
        
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link','rating','year'],
  inject: ['deleteList']
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>