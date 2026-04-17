<template>
  <div class="jib-landing cardstack-root">
    <slot />
  </div>
</template>

<style scoped>
.cardstack-root {
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: 100vh;
}
@media (prefers-reduced-motion: reduce) {
  .cardstack-root { scroll-snap-type: none; }
}
</style>
