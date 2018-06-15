<template>
  <div>
    <div class="goodsbody border clearfix" >
      <div class="details border">
        <img class="fl" :src="productlist.img">
        <div class="imgdetail">
          <div class="title">{{productlist.title}}</div>
          <div class="cust fl" v-if='productlist.cust==2'>定制</div>
          <div class="choose">{{productlist.content}}</div>
          <div class="advance"><span>{{productlist.advance}}</span><span class="count fr">x{{productlist.count}}</span></div>
          <div class="del fl" :class="{'dele':productlist.cust==1}">{{productlist.del}}</div>
          <div class="refund fr" v-if="productlist.refund==1">退款中</div>
          <div class="refund fr" v-if="productlist.refund==2">退款成功</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    data() {
      return {}
    },
    props:['productlist']
  }
</script>

<style scoped>
  @import '../../../../static/css/myorder/product.css';
</style>
