// stylesheets
import './app.css'

// vue libraries
import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

// components
import App from './App.vue'

// Views
import Home from './components/Home.vue'

/* eslint-disable no-new */
var router = new Router()

router.map({
  '/': {
    component: Home
  }
})

router.redirect({
   '*': '/home'
})

router.start(App, "app")
