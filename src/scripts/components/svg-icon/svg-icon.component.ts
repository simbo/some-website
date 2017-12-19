import Vue from 'vue';

export default Vue.extend({

  props: {
    name: {
      type: String,
      default: 'unicorn'
    }
  },

  computed: {

    symbolLink() {
      return `#svg-symbol__${this['name']}`;
    }

  }

});
