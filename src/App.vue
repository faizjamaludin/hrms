<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";

// Default layout fallback

const route = useRoute();

// Compute the layout component based on route meta
const layout = computed(() => {
  const layoutName = route.meta.layout || "DefaultLayout";
  try {
    return defineAsyncComponent(() => import(`@/layouts/${layoutName}.vue`));
  } catch {
    return DefaultLayout;
  }
});

console.log(layout.value);
</script>
