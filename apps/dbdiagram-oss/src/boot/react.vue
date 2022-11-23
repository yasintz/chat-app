<template>
  <div ref="container" />
</template>
<script>
import reactStore from '../store/react';

export default {
  data() {
    return {
      id: Math.random().toString(),
    };
  },
  props: {
    component: Function,
    props: Object,
  },
  mounted() {
    reactStore.render({ id: this.id, component: this.component, props: this.props, container: this.$refs.container });
  },
  beforeUnmount() {
    reactStore.remove(this.id);
  },
};
</script>
