import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'LoginPage',

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  methods: {
    handleSubmit() {},
  },

  template: `
    <form class="form" @submit.prevent="handleSubmit">
      <h2 class="page-auth__title">Вход</h2>

      <div class="form-group">
        <label class="form-group__label">Email</label>
        <div class="input-group">
          <input class="form-control" type="email" placeholder="demo@email" v-model="email" />
        </div>
      </div>

      <div class="form-group">
        <label class="form-group__label">Password</label>
        <div class="input-group">
          <input class="form-control" type="password" placeholder="password" v-model="password" />
        </div>
      </div>

      <div class="form__buttons">
        <button class="button button_primary">Login</button>
      </div>
    </form>`,
});
