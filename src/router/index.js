import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home page/home'
import login from '@/components/home page/login'
import search from '@/components/home page/search'
import myorder from '@/components/myorder/allorders/myorder'
import logistics from '@/components/myorder/allorders/logistics'
import order_detail from '@/components/myorder/allorders/order_detail'
import failure from '@/components/pay page/failure'
import ProductDetail from '@/components/product/ProductDetail'
import ProductDetailTwo from '@/components/product/ProductDetailTwo'
import orderConfirm from '../components/orderConfirm/orderConfirm.vue'
import address from '../components/orderConfirm/address.vue'
import myticket from '../components/myticket/myticket.vue'
import shopingCart from '../components/shoppingCart/shoppingCart.vue'
import payment from '../components/orderConfirm/payment.vue'
import paysuccess from '@/components/pay page/paysuccess'
import payfirst from '@/components/pay page/payfirst'
import paymentfinish from '../components/orderConfirm/paymentfinish/paymentfinish.vue'
import paymentfail from '../components/orderConfirm/paymentfinish/paymentfail.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path:'/search',
      name:'search',
      component:search
    },
    {
      path: '/myorder/:status',
      name: 'myorder',
      component: myorder
    },
    {
      path: '/logistics',
      name: 'logistics',
      component: logistics
    },
    {
      path: '/order_detail',
      name: 'order_detail',
      component: order_detail
    },
    {
      path: '/failure',
      name: 'failure',
      component: failure
    },
    {
      path: '/orderConfirm/orderConfirm',
      name: 'orderConfirm',
      component: orderConfirm
    },
    {
      path: '/orderConfirm/address',
      name: 'address',
      component: address
    },
    {
      path: '/orderConfirm/myticket',
      name: 'myticket',
      component: myticket
    },
    {
      path: '/shopingCart/shopingCart',
      name: 'shopingCart',
      component: shopingCart
    },
    {
      path:'/orderConfirm/payment',
      name:'payment',
      component:payment
    },
    {
      path:'/paysuccess',
      name:'paysuccess',
      component:paysuccess
    },
    {
      path:'/payfirst',
      name:'payfirst',
      component:payfirst
    },
    {
      path:'/orderConfirm/paymentfinish/paymentfinish',
      name:'paymentfinish',
      component:paymentfinish
    },
    {
      path:'/orderConfirm/paymentfinish/paymentfail',
      name:'paymentfail',
      component:paymentfail
    },
    {
      path: '/ProductDetailTwo',
      name: 'ProductDetailTwo',
      component: ProductDetailTwo
    },


  ]
})
