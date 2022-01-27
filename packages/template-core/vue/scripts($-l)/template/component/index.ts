import type { App } from 'vue';
import _@CONST_COMPONENT_NAME@ from './component.vue';

const @CONST_COMPONENT_NAME@ = Object.assign(_@CONST_COMPONENT_NAME@, {
  install: (app: App) => {
    app.component(_@CONST_COMPONENT_NAME@.name, _@CONST_COMPONENT_NAME@);
  },
});

export default @CONST_COMPONENT_NAME@;