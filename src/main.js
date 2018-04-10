// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import FBSignInButton from 'vue-facebook-signin-button'
import VueResource from 'vue-resource'

      window.fbAsyncInit = function() {
        FB.init({
          appId      : '216064342468691',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.12'
        });

        FB.AppEvents.logPageView();

      };
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(FBSignInButton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
