<template>
    <div id="app">
      <orderstate></orderstate>
      <paytotal></paytotal>
      <contact class="mt"></contact>
      <lookfor class="bt"></lookfor>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import orderstate from '../myorder/sub/orderstate.vue'
  import paytotal from '../myorder/sub/paytotal.vue'
  import contact from '../myorder/sub/contact.vue'
  import lookfor from '../myorder/sub/lookfor.vue'

    export default {
        data() {
            return {}
        },
        components: {
          orderstate,
          paytotal,
          contact,
          lookfor
        },
      created(){
        this.pay_second()
      },
      computed: {
        ...mapState([
          'ispay_second',
        ])
      },
      methods:{
        ...mapMutations([
          'pay_second'
        ]),
      }
    }
</script>

<style scoped>
  .bt {
    border-top: 1px solid #DCDDDD;
  }
  .mt {
    margin-top: 0.267rem!important;
  }
</style>

