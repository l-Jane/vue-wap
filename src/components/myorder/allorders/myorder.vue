<template>
    <div id="app">
      <div class="zindex abso" v-show="iscancel" ref="distance">
        <div class="confirm border" @click='cancel(false)'></div>
        <div class="prompt bg border clearfix abso">
          <div class="hint">提示信息</div>
          <div class="hintchoose" v-if="this.selected==2">您确定要取消订单吗</div>
          <div class="hintchoose" v-if="this.selected==1">您确定要删除订单吗</div>
          <button class="ok bg fl">确定</button>
          <button class="cancel bg fr" @click='cancel(false)'>取消</button>
        </div>
      </div>
      <div class="header">
        <router-link to="/"><img class="back fl" src="../../../assets/home.png"></router-link>
        <p class="logistics fl">我的订单</p>
      </div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待付款</mt-tab-item>
        <mt-tab-item id="3">待发货</mt-tab-item>
        <mt-tab-item id="4">待收货</mt-tab-item>
        <mt-tab-item id="5">退换货</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
           <blank v-if="count[0]==0"></blank>
           <allorders v-else></allorders>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
           <blank v-if="count[1]==0"></blank>
           <allorders v-else></allorders>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
           <blank v-if="count[2]==0"></blank>
           <allorders v-else></allorders>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
           <blank v-if="count[3]==0"></blank>
           <allorders v-else></allorders>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
           <blank v-if="count[4]==0"></blank>
           <allorders v-else></allorders>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
    import { Header } from 'mint-ui';
    import { Navbar, TabItem } from 'mint-ui';
    import { mapState, mapMutations } from 'vuex'
    import allorders from '../allorders/allorders.vue'
    import blank from '../sub/blank.vue'

    export default {
        data() {
            return {
              // 商品的状态
              selected:'',
              // 各状态的订单数
              count:[]
            }
        },
      created(){
        this.getordercount();
        this.selected = this.$route.params.status;
      },
        computed: {
          ...mapState([
            'status','iscancel'
          ])
        },
      mounted(){
        document.addEventListener('scroll',this.scroll);
      },
      beforeDestroy () {
        document.removeEventListener('scroll',this.scroll);
      },
        methods:{
        ...mapMutations([
            'toall','cancel'
          ]),
          scroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.$refs.distance.style.top=scrollTop+'px';
            if(this.iscancel){
              this.cancel(false)
            }
          },
      /*``````````````````测试````````````````````*/
        getordercount(){
          this.$http.get("../../../../static/api/data.json").then(
              function(res){
                this.count=[res.body[0].allorders,res.body[0].payorders,res.body[0].deliverorders,res.body[0].acceptorders,res.body[0].returnorders]
              }
            )
        },

      /*`````````````````````````````````````````````*/
          getselected () {
            this.$store.commit('toall',this.selected);
            this.$router.push({name:'myorder',params:{status:this.selected}});
          }
        },
        watch: {
          selected () {
              this.getselected()
          }
        },
        components: {
          allorders,
          blank
        },
      }
</script>

<style scoped>
  @import '../../../../static/css/myorder/myorder.css';
  @import '../../../../static/css/myorder/logistics.css';
  @import '../../../../static/css/myorder/confirm.css';
</style>
<style>
  .mint-tab-item .mint-tab-item-label {
    font-size: 0.4rem;
  }
</style>
