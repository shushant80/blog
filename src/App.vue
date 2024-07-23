<template>
  <div id="app">
    <AppHeader v-if="showHeader" />
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  setup() {
    const route = useRoute();
    const showHeader = computed(() => route.path !== '/login');
    return { showHeader };
  }
};
</script>

<style>
/* Global styles for your app can go here */
</style>
