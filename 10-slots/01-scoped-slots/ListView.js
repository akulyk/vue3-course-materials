import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'ListView',

  props: {
    items: Array,
  },

  emits: {
    'update:items': null,
  },

  data() {
    return {
      localItems: [],
      newItem: '',
    };
  },

  watch: {
    items: {
      deep: true,
      immediate: true,
      handler(newValue) {
        this.localItems = [...newValue];
      },
    },
  },

  methods: {
    add() {
      this.localItems.push(this.newItem);
      this.newItem = '';
      this.$emit('update:items', [...this.localItems]);
    },

    remove(index) {
      this.localItems.splice(index, 1);
      this.$emit('update:items', [...this.localItems]);
    },
  },

  template: `
    <div>
      <form @submit.prevent="add">
        <input v-model="newItem" />
        <button>Add</button>
      </form>
      <ul>
        <li v-for="(item, index) in localItems">
          <span>{{ item }}</span>
          <button @click="remove(index)">x</button>
        </li>
      </ul>
    </div>`,
});
