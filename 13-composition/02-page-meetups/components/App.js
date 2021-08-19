import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupsPage from './MeetupsPage.js';

export default defineComponent({
  name: 'App',

  components: {
    MeetupsPage,
  },

  template: `<meetups-page />`,
});
