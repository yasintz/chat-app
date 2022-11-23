// eslint-disable-next-line
// @ts-ignore
import { createReactMissVue, VueContainer } from 'veaury';
// eslint-disable-next-line
// @ts-ignore
import pinia from '@dbdiagram-legacy/boot/pinia';
import * as Quasar from 'quasar';
import type { App } from 'vue';

const [useReactMissVue, ReactMissVue, ReactMissVueContext] = createReactMissVue(
  {
    useVueInjection() {
      return {
        //   fooStore: useFooStore(),
        //   vueRouter: useRouter(),
        //   vueRoute: useRoute()
      };
    },
    beforeVueAppMount(app: App) {
      pinia({ app });
      Object.entries(Quasar).forEach(([key, c]) =>
        app.component(key, c as any)
      );
    },
  }
);

export { ReactMissVue };
