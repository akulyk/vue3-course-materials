import { defineComponent } from './vendor/vue.esm-browser.js';
import LoginPage from './LoginPage.js';

export default defineComponent({
  name: 'App',

  components: {
    LoginPage,
  },

  computed: {
    user() {},

    isAuthenticated() {},
  },

  template: `
    <div class="page-auth container">
      <login-page v-if="!isAuthenticated"/>
      <div v-else>{{ user }}</div>
    </div>`,
});
