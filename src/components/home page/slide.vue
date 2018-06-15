<template>
  <div id="app">
    <div :class={bigscreen:this.isbigscreen}>
      <div class="screen bg" :class={small:this.isbigscreen}>
        <ul class="tickets" v-bind="{style:'width:'+ulwidth+'rem'}">
          <li v-for='(item,index) in tickets' :key='index' ref="size">
            <div class="inner rela">
              <p class="price">￥<em>{{item.price}}</em></p>
              <p class="usable">{{item.usable}}</p>
              <div class="get abso" v-if='item.state==0'>
                <span class="get" v-tap.prevent="{ methods : toast,paramA:item }">立即领取</span>
              </div>
              <div class="get had abso" v-if='item.state==1'>
                <span class="get getsuccess">已领取</span>
              </div>
            </div>
          </li>
        </ul>
        <transition name="fade">
            <div class="toast abso border" v-if='toastshow'>
                 <img class="fl" src="../../assets/sucess.png">
                 <span class="fl">领取成功！</span>
            </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        flag:'true',
        ulwidth:0,
        // 横向滚动条隐藏
        isbigscreen:true,
        // 领取成功
        toastshow:false,
        tickets:[]
      }
    },
    created(){
      this.isPC();
      this.getTickets()
    },
    methods:{
      //判断pc端与移动端
        isPC(){
          var userAgentInfo = navigator.userAgent;
          var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
          for (let i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) != -1) { this.flag = false; break; }
          }
          if(this.flag){
            this.isbigscreen=false
          }
        },
        toast(params){
          const self=this;
          self.toastshow =true;
          setTimeout(function(){
            self.toastshow=false
          },2000);
          params.paramA.state = 1;
        },

      /*``````````````````测试````````````````````*/
      getTickets(){
        this.$http.get('../../../static/api/home.json').then((res)=>{
          this.tickets=JSON.parse(res.bodyText)[0].tickets;
          const liwidth=4.693;
          this.ulwidth=liwidth * JSON.parse(res.bodyText)[0].ticketslength
        })
      },

      /*`````````````````````````````````````````````*/

    }
  }
</script>

<style scoped>
  @import '../../../static/css/home/slide.css';
</style>
