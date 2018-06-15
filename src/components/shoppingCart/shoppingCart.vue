<template>
  <div id="app">
    <div class="shoppingcart">
      <div class="nav">
        <div class="home">
          <img src="../../assets/home.png" alt="" @click="goHome">
        </div>
        <div class="title">购物车</div>
        <div class="manage" @click="manage">管理</div>
      </div>

      <div class="scard" v-for="(product,index) in productList">
          <div class="sproduct">
            <input type="checkbox" :value="index" v-model="product.checked" class="inputCheck" @click="select(product)">
            <div class="spicIcon">
              <img :src="product.img" alt="">
            </div>
            <div class="sproductdetail">
              <div class="sname">{{product.name}}</div>
              <div class="ssize">{{product.size}}</div>
              <div class="sprice" v-if="product.fkfs==1">¥{{product.price}}</div>
              <div class="sprice" v-if="product.fkfs==2">预定金：¥{{product.price}}</div>
              <div class="soriginalprice" v-if="product.fkfs==1">¥{{product.originalprice}}</div>
              <!--定制产品-->
              <div class="soriginalprice" v-if="product.fkfs==2" style="text-decoration: none">
                <div class="custom">定制</div>
                ¥{{product.custommoney}}
              </div>
              <div class="kucun">{{product.kucun}}</div>
              <div class="snum">
                <img src="../../assets/less/active.png" alt="" v-on:click="numChange(index, -1)" v-bind:class="{ 'disable' : product.countnum==1 }">
                <input type="number" class="number" v-model="product.countnum"/>
                <img src="../../assets/add.png" alt="" v-on:click="numChange(index, 1)" v-bind:class="{ 'disable' : product.countnum==product.kucun }">
              </div>
            </div>
          </div>
      </div>
      <!--失效物品-->
      <div class="card" v-for="product in failproductList">
        <div class="product">
            <div class="picIcon">
              <img :src="product.img" alt="">
            </div>
            <div class="productdetail">
              <div class="name">{{product.name}}</div>
              <div class="size">失效</div>
              <div class="price">¥{{product.price}}</div>
              <div class="originalprice">¥{{product.originalprice}}</div>
              <div class="num" @click="deletefailproduct()">X删除</div>
            </div>
        </div>
      </div>
      <div class="footer">
        <div class="left">
          <input type="checkbox" class="checkbox" v-model="wholeChecked" id="checkbox" @click="selectAll()" />
            <span style="margin-left:8px;line-height:49px;">全选</span>
        </div>
        <div class="heji" v-show="!flag">
          <div>合计：<span style="color:#FF5353;">¥</span><span style="font-size: 17px;color:#FF5353 " v-html="totalprice()"></span></div>
          <div class="freecarry">免运费</div>
        </div>
        <div class="right" v-show="!flag" @click="orderConfirm()">结算</div>
        <div class="right" v-show="flag" @click="deleteproduct()">删除</div>
      </div>

      <!--库存不足提醒框-->
      <div class="remind" v-show="remindshow">
        <div class="image">
          <img src="" alt="">
        </div>
        <div class="remindname">
          <div class="one">北欧布艺沙发 多种组合可选 多种北欧布艺沙发北欧布艺沙发北欧布艺沙发</div>
          <div class="two">库存不足，请修改数量!</div>
        </div>
      </div>

      <!--删除按钮的弹框-->
      <div class="drawer_screen" data-delete="close" v-show="showDeleteModalStatus"></div>
      <div class="delete_box" v-show="showDeleteModalStatus">
        <!--drawer content-->
        <div class="delete_title">提示信息</div>
        <div class="delete_content">
          确定删除该商品吗？
        </div>
        <div class="btnDelete">
          <div class="confirm" data-delete="close">确定</div>
          <div class="cancel" data-delete="close" @click="canceldelete">取消</div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'shoppingCart',
    data () {
      return {
        selectArr: [],
        checkCount:0,
        wholeChecked:false,
        productList:[
          {
            id:33,
            fkfs:2,//二次付款
            img:require('../../assets/images/sale2.png'),
            name:'北欧布艺沙发 多种组合可选 多种多种组合可选 多种',
            size:'已选择“复古蓝”“大三人195*84*78cm”两行',
            price:'1000',
            custommoney:'123/块',
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
        failproductList:[
          {
            id:22,
            fkfs:1,//一次付款
            name:'床 多种组合可选 多种多种组合可选 多种',
            img:require('../../assets/images/sale2.png'),
            size:'已选择“复古蓝”“大三人195*84*78cm”两行',
            price:'1000',
            originalprice:'1600',
            num:'1',
            countnum:2,
            kucun:'8'
          }
        ],
        flag:false,
        remindshow:false,
        showDeleteModalStatus:false
      }
    },
    methods: {
      select:function (product) {
        if(product.checked) {
          console.log("uncheck");
          this.checkCount--;
          if(this.wholeChecked) {
            this.wholeChecked = false;
          }
        } else {
          console.log("check");
          this.checkCount++;
          if(this.checkCount == this.productList.length) {
            this.wholeChecked = true;
          }
        }
      },
      selectAll:function() {
        var list = this.productList;
        if(this.wholeChecked){
          for(var i=0;i<list.length;i++){
            list[i].checked = false;
          }
          this.checkCount =0;
        }else{
          for(var i=0;i<list.length;i++){
            list[i].checked = true;
          }
          this.checkCount = list.length;
        }

      },
      numChange : function(index, numChange) {
        var goods = this.productList[index];
        if ( numChange == 1 ) {
          goods.countnum++;
        } else if ( numChange == -1 ) {
          goods.countnum--;
        }

        if ( goods.countnum <= 1 ) {
          goods.countnum = 1;
        }

        if ( goods.countnum >= goods.kucun ) {
          goods.countnum = goods.kucun;
          this.remindshow = true;
        }else{
          this.remindshow = false;
        }
      },
      //计算总价
      totalprice:function (index) {
        var totalmoney = 0;
        var list = this.productList;
        list.forEach(function(item, index) {
          if (list[index]['checked'] ) {
            totalmoney += parseFloat(item.price) * parseFloat(item.countnum);
          }
        });
        return totalmoney.toFixed(2);
     },
      manage:function () {
        this.flag = ! this.flag;
      },
      goHome:function () {
        this.$router.push('/');
      },
      orderConfirm:function () {
        if(this.checkCount!=0){
          this.$router.push('/orderConfirm/orderConfirm');
        }
      },
      deleteproduct:function () {
        if(this.checkCount!=0) {
          this.showDeleteModalStatus = true;
        }
      },
      canceldelete:function () {
        this.showDeleteModalStatus = false;
      },
      deletefailproduct:function () {
        this.showDeleteModalStatus = true;
      }
    }
  }
</script>
<style scoped>
  @import "shoppingCart.css";
</style>

