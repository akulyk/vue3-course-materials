import { defineComponent } from './vendor/vue.esm-browser.js';
import ListView from './ListView.js';

export default defineComponent({
  name: 'App',

  components: {
    ListView,
  },

  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },

  template: `<list-view v-model:items="list" />`,
});
