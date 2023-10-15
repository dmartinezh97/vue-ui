import { App } from 'vue';
import * as components from './components.ts'


// Función install para la instalación a nivel global
const install = (app: App): void => {
  app.component('VButton', components.default.VButton);
  app.component('VTextField', components.default.VTextField);
  // ... Registra otros componentes según sea necesario
};

// Exportando la función install junto con los componentes
export {
  install,
  components,
};