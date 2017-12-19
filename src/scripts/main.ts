import './../styles/main.styl';

import Vue from 'vue';
import { TweenMax, TweenConfig } from 'gsap';
import 'gsap/ScrollToPlugin';

import { components } from './components';

Object.keys(components).forEach((componentName) => {
  Vue.component(componentName, components[componentName]);
});

new Vue({

  el: '.vue',

  data() {
    return {
      textVisible: false
    };
  },

  methods: {

    scrollToText() {
      TweenMax.to(window, .4, {
        scrollTo: {
          y: '#text',
          offsetY: 80
        }
      } as TweenConfig);
    }

  }

});
