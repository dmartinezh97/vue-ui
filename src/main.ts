import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

const componentFiles = import.meta.globEager('./components/**/*.vue');

Object.keys(componentFiles).forEach((path) => {
  const componentConfig = componentFiles[path];
  const componentName = path
  .split('/')
  .pop()
  .replace(/\.\w+$/, '');
  
  app.component(componentName, componentConfig.default || componentConfig);
});

app.mount('#app')
