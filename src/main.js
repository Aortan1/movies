import Vue from 'vue'
import App from './App.vue'
import store from './stores/index'
import router from './router'
//import firebase from 'firebase'
import 'bulma/css/bulma.css'
//import 'font-awesome/css/font-awesome.min.css'


Vue.config.productionTip = false

const config={

}

//firebase.initializeApp(config)


new Vue({
  el: '#app',
  router,
  store,
  //template: '<App/>',
  //components: {App},
  render: h => h(App)
})
