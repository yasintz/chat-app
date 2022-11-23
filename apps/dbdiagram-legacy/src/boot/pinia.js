import { createPinia } from 'pinia';
import plugin from '../store/plugin';

export default ({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
  pinia.use(plugin);
};
