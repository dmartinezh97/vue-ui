import { createApp } from 'vue'
import { HelloWorld } from '@/components/main.ts'

const app = createApp({})

app
    .component('HelloWorld', HelloWorld)

app.mount('#app')

export { HelloWorld };