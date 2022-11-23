import { boot } from 'quasar/wrappers';
import React from './react.vue';

export default boot(({ app }) => {
  app.component('react', React);
});
