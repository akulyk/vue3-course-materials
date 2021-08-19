import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiBadge from './UiBadge.js';
import UiCard from './UiCard.js';

export default defineComponent({
  name: 'MeetupsListItem',

  components: {
    UiBadge,
    UiCard,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isoDate() {
      return new Date(this.meetup.date).toISOString().split('T')[0];
    },

    localeDate() {
      return new Date(this.meetup.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },

  template: `
    <ui-card :cover="meetup.image" class="meetup-card">
      <template #header>
        {{ meetup.title }}
      </template>

      <template #default>
        <ui-badge v-if="meetup.organizing" type="success" class="meetup-card__badge">Организую</ui-badge>
        <ui-badge v-if="meetup.attending" type="primary" class="meetup-card__badge">Участвую</ui-badge>
        <ul class="meetup-info">
          <li class="meetup-info__item">
            <img class="meetup-info__icon icon" src="/assets/icons/icon-user.svg" alt="user" />
            {{ meetup.organizer }}
          </li>
          <li class="meetup-info__item">
            <img class="meetup-info__icon icon" src="/assets/icons/icon-map.svg" alt="map" />
            {{ meetup.place }}
          </li>
          <li class="meetup-info__item">
            <img class="meetup-info__icon icon" src="/assets/icons/icon-cal-lg.svg" alt="cal-lg" />
            <time :datetime="isoDate">{{ localeDate }}</time>
          </li>
        </ul>
      </template>
    </ui-card>
  `,
});
