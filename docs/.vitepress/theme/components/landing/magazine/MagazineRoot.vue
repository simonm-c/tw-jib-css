<template>
  <div class="jib-landing magazine-root">
    <slot />
  </div>
</template>

<style scoped>
.magazine-root {
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: 100vh;
}
@media (prefers-reduced-motion: reduce) {
  .magazine-root { scroll-snap-type: none; }
}
</style>
