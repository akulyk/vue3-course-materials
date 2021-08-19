<template>
  <div class="page-auth container">
    <login-page v-if="!isAuthenticated" />
    <div v-else>{{ user }}</div>
  </div>
</template>

<script>
import { computed } from 'vue';
import LoginPage from './components/LoginPage';

export default {
  name: 'App',

  components: {
    LoginPage,
  },

  setup() {
    return {
      user: computed(() => null),
      isAuthenticated: computed(() => null),
    };
  },
};
</script>

<style></style>
