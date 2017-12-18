<template lang="pug">

  .roller
    slot

</template>
<style lang="stylus" scoped>

  .roller
    display: block
    overflow: hidden

</style>
<script lang="ts">

import Vue from 'vue';

import { rollerUp, rollerDown } from './roller-animations';

export default Vue.extend({

  props: {
    visible: {
      type: Boolean
    },
    duration: {
      type: Number,
      default: .4
    }
  },

  mounted() {
    if (this.visible) this.down(0);
    else this.up(0)
  },

  methods: {
    down(duration: number = null) {
      if (duration === null) duration = this.duration;
      rollerDown(this.$el, duration);
    },
    up(duration: number = null) {
      if (duration === null) duration = this.duration;
      rollerUp(this.$el, duration);
    }
  },

  watch: {
    visible: function(value, oldValue) {
      if (value === oldValue) return;
      if (value) this.down();
      else this.up();
    }
  }

});

</script>
