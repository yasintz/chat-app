<template>
  <q-layout view="hHh lpr lfr">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title shrink>
          <q-avatar rounded>
            <q-img src="~assets/logo.png" />
          </q-avatar>
        </q-toolbar-title>
        <T></T>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <E></E>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import E from '../pages/Editor/Index.vue';
import T from '../pages/Editor/Toolbar.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
