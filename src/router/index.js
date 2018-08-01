import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/index/index"
import carSeries from '@/components/carSeries/carSeries'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index'

    }, {
        path: '/index',
        name: 'Index',
        component: Index
    }, {
        path: '/carSeries',
        name: 'carSeries',
        component: carSeries
    }]
})