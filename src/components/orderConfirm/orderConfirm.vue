<template>
  <div id="app">
    <div class="orderConfirm">
    <div class="nav">
        <img src="../../assets/back.png" alt="" @click="goback()">
      订单确认页
    </div>
        <div class="address" @click="addaddress" v-if="orderaddress.length==0">
          <img src="../../assets/add-address@2x.png" alt="">
          添加收货地址
        </div>
      <div class="addresscard" v-if="orderaddress.length!=0">
        <div class="icon">
          <img src="../../assets/address.png" alt="">
        </div>
        <div class="info">
          <div class="one">
            收货人：{{name}} 13812345678
          </div>
          <div class="two">
            江苏省 南京市 江宁区 天元西路去你妹的小区2栋3单元306室
          </div>
        </div>
        <router-link to="/orderConfirm/address">
          <div class="arrow">
            <img src="../../assets/chose-address.png" alt="">
          </div>
        </router-link>
      </div>
    <div class="fenge"></div>
    <div class="orderproduct">
      <!--产品块儿-->
      <div class="product" v-for="product in productList">
        <div class="picIcon">
          <img :src="product.img" alt="">
        </div>
        <div class="productdetail">
          <div class="name">{{product.name}}</div>
          <div class="size">{{product.size}}</div>
          <div class="price" v-if="product.fkfs==1">¥{{product.price}}</div>
          <div class="price" v-if="product.fkfs==2">预定金:¥{{product.price}}</div>

          <div class="originalprice" v-if="product.fkfs==1">¥{{product.originalprice}}</div>
          <div class="originalprice" v-if="product.fkfs==2" style="text-decoration: none;">
            <div class="custom">定制</div>
            ¥{{product.custommoney}}
          </div>
          <div class="num">X{{product.num}}</div>
        </div>
      </div>

      <div class="buyway">
        <span>配送方式:</span>
        <div>快递免邮</div>
      </div>
      <div class="message">
        <span>买家留言:</span>
        <input type="text" placeholder="选填:对本次交易说明或其它要求备…">
      </div>
    </div>
    <div class="fenge"></div>

    <div class="ticket" @click="getticket">
      <span>抵用券</span>
      <div class="redticket" v-if="diyongticket==0">
        <img src="../../assets/ordar-ticket.png" alt="">
        <div class="ticketnum">{{ticketnum}}张券可用</div>
      </div>
      <div class="diyongticket" v-if="diyongticket!=0">{{diyongticket}}</div>
      <div class="arrow">
        <img src="../../assets/details-service.png" alt="">
      </div>
    </div>
     <div class="diyongjin">
        <div class="diyongmoney">
          <span>可用抵用金¥{{isOn?diyongjin:0}}</span>
          <div class="on-of">
            <img src="../../assets/off.png" alt="" @click="open()" v-if="!isOn">
            <img src="../../assets/on.png" alt="" @click="open()" v-if="isOn">
          </div>
        </div>
       <div class="diyongrule">
         <span>抵用金规则</span>
         <img src="../../assets/guizeopen@2x.png" alt="" @click="toggle()" v-if="!isShow">
         <img src="../../assets/guizeclose@2x.png" alt="" @click="toggle()" v-if="isShow">
         <div v-show="isShow" class="ruledetail">
           抵用金为前期消费金额所得的抵扣的金额，可用于购买产品。金额计算公式：消费金额x1%=抵用金。
         </div>
       </div>
     </div>

      <div class="fenge"></div>
      <div class="footer">
        <div class="left">
          <div>
            <span style="font-size:12px;">合计:</span>
            <span style="color:#ff5353;">¥</span>
            <span style="color:#FF5353;font-size:17px;">1000</span>
          </div>
        </div>
        <div class="right" @click="gopayment">提交订单</div>
      </div>

      <!--抵用券弹窗-->
      <div class="modal-con" v-show="showtickets"></div>
      <div class="modal-main-con" v-show="showtickets">
        <div class="quan" v-for="quan in quanlist">
          <img src="../../assets/background-t.png" alt="">
          <div class="money">
            <span>¥{{quan.money}}</span>
            <span class="quantype">{{quan.quantype}}</span>
          </div>
          <div class="description">
            {{quan.description}}
          </div>
          <div class="use" @click="useticket" :id="quan.id">
            <div v-if="quan.isget==0">使用</div>
            <div v-else>
              <img src="../../assets/used.png" alt="" style="width:30px;height:30px;">
            </div>
          </div>
        </div>
        <div class="confirm" @click="confirm">确定</div>
      </div>

      <!--添加收货地址弹窗-->
      <div class="address-modal-con" v-show="showaddress"></div>
      <div class="address-modal-main-con" v-show="showaddress">
        <div class="close">
          <img src="../../assets/button-off@2x.png" alt=""  @click="closeaddress">
        </div>
        <div class="title">编辑地址</div>
        <div class="editname">
          <input type="text" placeholder="填写收货人姓名" id="editname">
        </div>
        <div class="editphone">
          <input type="text" placeholder="联系电话">
        </div>
        <div class="selectarea">
          <cityselect v-on:selectarea = "getselectarea()"></cityselect>
        </div>
        <div class="editaddress">
          <textarea placeholder="请填写详细地址"></textarea>
        </div>
        <div class="saveaddress" @click="saveaddress()">保存</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  @import "orderConfirm.css";
</style>
<script>
  import cityselect from './cityselect/cityselect.vue'
export default {
  name: 'orderConfirm',
  data () {
    return {
      showtickets:false,
      showaddress:false,
      productList:[
        {
          id:33,
          fkfs:2,//二次付款
          img:require('../../assets/images/sale2.png'),
          name:'北欧布艺沙发 多种组合可选 多种多种组合可选 多种',
          size:'已选择“复古蓝”“大三人195*84*78cm”两行',
          price:'1000',
          custommoney:'800/件',
          num:'1',
          countnum:1,
          kucun:'10'
        },
        {
          id:44,
          fkfs:1,//一次付款
          img:require('../../assets/images/Group2.png'),
          name:'床 多种组合可选 多种多种组合可选 多种',
          size:'已选择“复古蓝”“大三人195*84*78cm”两行',
          price:'2000',
          originalprice:'2600',
          num:'1',
          countnum:2,
          kucun:'8'
        }
      ],
      quanlist:[
        {
          id:2,
          isget:0,
          money:'1000',
          quantype:'通用券',
          description:'每满1000减50，可累计使用不限品牌、品类，用完作废',
          minus:'-50'
        },
        {
          id:34,
          isget:0,
          money:'900',
          quantype:'通用券',
          description:'每满1000减40，可累计使用不限品牌、品类，用完作废',
          minus:'-40'
        },
        {
          id:22,
          isget:0,
          money:'800',
          quantype:'通用券',
          description:'每满1000减30，可累计使用不限品牌、品类，用完作废',
          minus:'-30'
        },{
          id:4,
          isget:0,
          money:'700',
          quantype:'通用券',
          description:'每满1000减20，可累计使用不限品牌、品类，用完作废',
          minus:'-20'
        }
      ],
      countnum:'1',
      isShow:false,
      isOn:false,
      diyongjin:'12',
      ticketnum:'4',
      diyongticket:'0',
      orderaddress:[],
      name:'',
      area:'',
    }
  },
  methods:{
    getticket:function () {
      this.showtickets = true;
    },
    confirm:function () {
      this.quanlist.forEach(n=>{
        if(n.isget==1){
          this.diyongticket = n.minus;
        }
      })
      this.showtickets=false;
    },
    useticket:function (e) {
      var id = e.currentTarget.id;
      this.quanlist.forEach(n=>{
        if(n.id==id){
          if(n.isget==0){
            n.isget=1;
          }else{
            n.isget=0;
          }
        }else{
          n.isget=0;
        }
      })
    },
    addaddress:function () {
      this.showaddress = true;
    },
    closeaddress:function () {
      this.showaddress = false;
    },
    gopayment:function () {
      this.$router.push('/orderConfirm/payment');
    },
    toggle:function(){
      this.isShow = !this.isShow;
    },
    open:function () {
      this.isOn =!this.isOn;
    },
    goback:function () {
      this.$router.go(-1);
    },
    getselectarea:function (somedata) {
      console.log('传过来了');
      console.log(somedata);
    },
    saveaddress:function () {
      var name = document.getElementById('editname').value;
      this.name = name;
      this.orderaddress.push(name);
      console.log(this.orderaddress);
      this.showaddress = false;
    }
  },
  components: { cityselect }
}
</script>
