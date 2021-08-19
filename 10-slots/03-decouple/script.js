import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const MeetupsFilters = defineComponent({
  name: 'MeetupsFilters',

  props: {
    filter: {
      type: String,
      required: true,
    },
  },

  emits: {
    'update:filter': null,
  },

  template: `
    <div class="filters">
      <input :value="filter" @input="$emit('update:filter', $event.target.value)">
    </div>`,
});

const MeetupsView = defineComponent({
  name: 'MeetupsFilters',

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  template: `
    <div class="meetups-view">
      <ul>
        <li v-for="meetup in meetups" :key="meetup.id">{{ meetup.title }}</li>
      </ul>
    </div>`,
});

const MeetupsPage = defineComponent({
  name: 'MeetupsPage',

  components: { MeetupsView, MeetupsFilters },

  data() {
    return {
      filter: '',
      meetups: null,
    };
  },

  computed: {
    filteredMeetups() {
      return this.meetups?.filter((meetup) => meetup.title.includes(this.filter));
    },
  },

  mounted() {
    fetch(`${API_URL}/meetups`)
      .then((res) => res.json())
      .then((meetups) => {
        this.meetups = meetups;
      });
  },

  template: `
    <div>
      <meetups-filters v-model:filter="filter" />
      <meetups-view v-if="meetups" :meetups="filteredMeetups"/>
    </div>`,
});

const App = defineComponent({
  name: 'App',

  components: { MeetupsPage },

  template: `
    <div class="container">
      <meetups-page />
    </div>`,
});

createApp(App).mount('#app');
