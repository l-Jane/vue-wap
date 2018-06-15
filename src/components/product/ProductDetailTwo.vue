<template>
  <div id="app">
    <div id="ProductDetail">
      <div class="nav">
        <img src="../../assets/home.png" alt="" @click="goHome">
        商品详情页
      </div>
      <div class="productPic">
        <img :src="pic" alt="">
      </div>
      <div class="name">
        {{name}}
      </div>
      <div class="sname">
        <div class="custom">定制</div>
        <div class="smallname">{{smallName}}</div>
      </div>
      <div class="price"><span style="font-size:15px;">¥</span>{{price}}/单位</div>
      <div class="oprice">
        <div class="originalPrice">
          <div class="subscription">预定金</div>
          ¥{{originalPrice}}
        </div>
        <div class="buyer">{{buyer}}人已买</div>
      </div>
      <div class="customrule">
        <div>剩余尾款根据实际面积计算</div>
        <div class="rule" @click="checkrule()">定制规则 <img src="../../assets/guize@2x.png" alt=""></div>
      </div>
      <div class="fenge">
        <div class="service" v-for="service in serviceList">
          <img src="../../assets/details-label-copy@2x.png" alt="">
          {{service.title}}
        </div>
      </div>
      <div class="line"></div>
      <div class="content"></div>
      <div class="end">— END —</div>
      <div class="footer">
        <div class="shoppingcart">
          <router-link to="/shopingCart/shopingCart">
            <img src="../../assets/Rectangle.png" alt="">
            <div class="dot">{{num}}</div>
          </router-link>
        </div>
        <div class="shu"></div>
        <div class="home">
          <img src="../../assets/home.png" alt="" @click="goHome">
        </div>
        <div class="goin" v-on:click="select">加入购物车</div>
        <div class="buynow" v-on:click="select">立即购买</div>
      </div>
      <!--弹窗-->
      <div class="modal-con" v-show="showModal"></div>
      <div class="modal-main-con" v-show="showModal">
        <form>
          <div class='img-con'>
            <img class='madal-img' :src="pic"></img>
          </div>
          <div class='modal-infos-con' style="overflow-y: auto;">
            <div class='top-con'>
              <div>
                <div class='modal-price'>¥5000</div>
                <div class="kucun">库存充足</div>
                <div class='selected-text'>已选择“{{selcolor}}”“{{selsize}}”</div>
              </div>
              <img class='close-img' src="../../assets/button-off@2x.png" v-on:click="close"></img>
            </div>
            <div class='line-con'></div>
            <div class='scroll-con'>
              <div class='params-con'>

                <div class='param-title'>颜色分类</div>
                <div class='param-items-con'>
                  <div class="param-item" :class="{'selected':selcolor === color.title}" v-for="(color,index) in colors" @click="selectcolor(color.title)">{{color.title}}</div>
                </div>


                <div class='param-title'>规格</div>
                <div class='param-items-con'>
                  <div class="param-item" v-for="(size,index) in sizes" :class="{'selected':selsize === size.title}" @click="selectsize(size.title)">{{size.title}}</div>
                </div>

                <div class='buy-num-con'>
                  <div class='num-title'>购买数量</div>
                  <div class='num-action-con'>
                    <img src="../../assets/less/active.png" alt="" @click="countless">
                    <div>{{countnum}}</div>
                    <img src="../../assets/add.png" alt="" @click="countadd">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='confirm-btn' @click="confirmorder">
            确定
          </div>
        </form>
      </div>
      <!--定制规则弹窗-->
      <div class="modal-con-rule" v-show="showRuleModal"></div>
      <div class="modal-main-con-rule" v-show="showRuleModal">
        <div class="close">
          <img src="../../assets/button-off@2x.png" alt=""  @click="closerule()">
        </div>
        <div class="title">定制规则</div>
        <div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pic from '../../assets/images/sale2.png'
  export default {
    data () {
      return {
        pic: pic,
        name: '左右布沙发组合简约现代客厅大户型转角可拆转角可拆冼布艺沙发3506-1 左右布沙发组合简约现代客厅大户型转角可拆转角可拆冼布艺沙发3506-1',
        smallName: '简约现可拆冼布艺沙发',
        price: '1234',
        originalPrice: '1500',
        buyer: '125',
        serviceList: [
          {
            title: '3倍补差价'
          },
          {
            title: '7天无理由退换'
          },
          {
            title: '上门安装'
          }
        ],
        num: '10',
        showModal: false,
        showRuleModal:false,
        colors: [
          {
            id:1,
            title: '红色'
          },
          {
            id:2,
            title: '蓝色'
          },
          {
            id:3,
            title: '绿色'
          },
          {
            id:4,
            title: '黄色'
          }
        ],
        sizes: [
          {
            title: '单人 90*84*78cm'
          },
          {
            title: '三人 165*84*78cm'
          },
          {
            title: '大三人 195*84*78cm'
          },
          {
            title: '小单人 90*84*78cm'
          },
          {
            title: '小三人 165*84*78cm'
          },
          {
            title: '小大三人 195*84*78cm'
          }
        ],
        countnum:'0',
        selcolor:'',
        selsize:''
      }
    },
    methods : {
      select:function () {
        this.showModal=true;
      },
      close:function () {
        this.showModal=false;
      },
      countadd:function () {
        this.countnum++;
      },
      countless:function () {
        if(this.countnum>0){
          this.countnum--;
        }
      },
      selectcolor:function(color){
        this.selcolor = color;
      },
      selectsize:function (size) {
        this.selsize = size;
      },
      confirmorder:function () {
        alert(this.selcolor +' '+ this.selsize + ' '+ this.countnum);
        this.$router.push('/orderConfirm/orderConfirm')

      },
      goHome:function () {
        this.$router.push('/')
      },
      checkrule:function () {
        this.showRuleModal = true;
      },
      closerule:function () {
        this.showRuleModal = false;
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "ProductDetailTwo.css";
</style>
