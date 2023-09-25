import { createApp } from 'vue'
import { HelloWorld } from '@/components/main.ts'
import App from '@/App.vue'

const app = createApp(App)

app
    .component('HelloWorld', HelloWorld)

app.mount('#app')