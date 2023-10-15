import components from './components.ts'
import { App } from 'vue';

const plugin = {
  install(app: App) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        app.component(component.name, component);
      }
    }
  },
};

export default plugin;