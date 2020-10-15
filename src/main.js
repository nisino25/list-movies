import { createApp } from 'vue';

import App from './App.vue';

import TheHeader from'./components/layout/TheHeader.vue'
import BaseCard from './components/UI/BaseCard.vue';




const app = createApp(App)
app.component('the-header', TheHeader)
app.component('base-card', BaseCard)


app.mount('#app');


