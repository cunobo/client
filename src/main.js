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

/* eslint-disable no-new */
var router = new Router()

router.start(App, "app")
