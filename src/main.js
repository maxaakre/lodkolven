import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from "./router";

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log("Registered service worker"))
      .catch((error) => console.log("Error register service worker ", error));
  }
}
registerServiceWorker();