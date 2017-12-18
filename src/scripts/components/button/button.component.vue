<template lang="pug">

  button.button(
    v-bind:class = "classNames",
    v-bind:disabled = "disabled",
    v-bind:type = "type"
  )

    .button__spinner(v-if = "spinner")
      svg-icon(name = "spinner")

    .button__icon(v-if = "icon")
      svg-icon(:name = "icon")

    .button__label
      slot

</template>
<script lang="ts">

import Vue from 'vue';

export default Vue.extend({

  props: {
    appearance: {
      type: String,
      default: 'primary'
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    spinner: {
      type: Boolean,
      default: false
    }
  },

  computed: {

    classNames() {
      return {
        'has-spinner': this['spinner'],
        'has-icon-only': !this['$slots'].default,
        'is-disabled': this['disabled']
      };
    }

  }

});

</script>
