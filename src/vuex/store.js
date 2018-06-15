import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  // 分类的开关
  isopen:false,
  none:true,
  // 登陆状态
  succeed:false,

  // 待付款
  ispay:false,
  // 待发货
  isdeliver:false,
  // 全部交易完成
  iscomplete:false,
  // 全部交易关闭
  isclose:false,
  // 待收货
  isaccept:false,
  // 退款
  isreturn:false,
  // 二次付款
  ispay_second:false,
  // 一次付款
  ispay_first:false,

  // 我的订单状态
  status: 1,

  // 商品详情
  productlists:[],

  // 商品订单信息
  product:[],

  // 商品价格信息
  prices:[],

  // 分类id
  classifyid:0,

  //物流信息
  logistics:[],
//取消框的显示
  iscancel:false
};

const mutations = {
  // 分类的开关
  open:function(){
    state.isopen=!state.isopen
  },

  // 订单状态详情页
  allfalse:function(){
    state.ispay=false;
    state.ispay=false;
    state.isdeliver=false;
    state.iscomplete=false;
    state.isclose=false;
    state.isaccept=false;
    state.isreturn=false;
    state.ispay_second=false;
    state.ispay_first=false;
  },
  // 待付款
  wait:function(){
    mutations.allfalse();
    state.ispay=true;
  },
  // 待发货
  deliver:function(){
    mutations.allfalse();
    state.isdeliver=true;
  },
  // 退款
  return:function(){
    mutations.allfalse();
    state.isreturn=true;
  },
  // 全部交易关闭
  close:function(){
    mutations.allfalse();
    state.isclose=true;
  },
  // 全部交易完成
  complete:function(){
    mutations.allfalse();
    state.iscomplete=true;
  },
  // 待收货
  accept:function(){
    mutations.allfalse();
    state.isaccept=true;
  },
  // 二次付款
  pay_second:function(){
    mutations.allfalse();
    state.ispay_second=true;
  },
  // 一次付款
  pay_first:function(){
    mutations.allfalse();
    state.ispay_first=true;
  },

// 我的订单状态
  toall:function(state,status){
    state.status=status;
  },

  // 商品详情信息
  post:function(state,list){
    state.productlists=list;
  },

  // 获取订单信息
  getordernumber:function(state,list){
    state.product=list;
  },

  // 获取价格的详细信息
  getprices:function (state,prices) {
    state.prices=prices;
  },

  // 切换分类名
  changeclassify:function(state,id){
    state.classifyid=id;
  },
  //获取物流信息
  getlogistics:function(state,info){
    state.logistics=info;
  },

  // 取消框的显示隐藏
  cancel:function(state,bool){
    state.iscancel=bool
  }
};



/*const getters = {
  status: state => {return state.status}
}*/

export default new Vuex.Store({
  state, mutations
})
