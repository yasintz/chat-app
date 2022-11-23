<template>
  <h3>Pure mode</h3>
  <AAWithPure>
    <div class="flex-sub">A</div>
    <div class="flex-sub">B</div>
    <div class="flex-sub">C</div>
  </AAWithPure>
</template>

<script setup>
import { applyPureReactInVue } from 'veaury';
// React component AA
import AAReact from './aa';

// Children and slots in the component will be rendered completely as pure ReactNode
const AAWithPure = applyPureReactInVue(AAReact);
</script>

<style scoped>
.slot {
  background: aquamarine;
  padding: 10px;
  margin: 10px;
}
.flex-sub {
  width: 50px;
  height: 50px;
  background: dodgerblue;
  line-height: 50px;
  margin: 5px;
}
</style>
