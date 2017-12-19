import Vue from 'vue';

export default Vue.extend({

  name: 'svg-icon',

  props: {
    name: {
      type: String,
      default: null
    }
  },

  computed: {

    symbolLink() {
      return `#svg-symbol__${this['name']}`;
    }

  }

});
