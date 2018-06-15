<template>
	<div id="app">
		<div class="header">
      <img class="back fl" src="../../../assets/back.png" v-tap.prevent="{ methods : togo }">
			<p class="logistics fl">物流信息</p>
		</div>
		<div class="type bg border rela">
			<div class="logo fl"><img src="../../../assets/logistics.png"></div>
			<div class="fl right">
				<div class="company"><p>物流公司:<span>{{logistics[0].company}}</span></p></div>
				<div class="serial"><p class="fl">运单编号:<span>{{product[0].ordernum}}</span></p>
          <button class="copy abso bg"
                  type="button"
                  v-clipboard:copy="product[0].ordernum"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError">复制</button></div>
			</div>
		</div>
    <div class="tracking bg border">
				<div class="image clearfix">
					<img v-for="item in productlists" :src="item.img">
				</div>
      <p class="tail">物流跟踪</p>
      <div class="particulars">
        <div class="success border rela">
        	<img class="abso" src="../../../assets/succeed.png">
          <p class="status">{{logistics[0].newest.b_status}}</p>
          <p class="date">{{logistics[0].newest.b_date}}</p>
        </div>
        <div class="flow success border rela" v-for='item in logistics[1]'>
          <div class="dot abso"></div>
          <p class="b_status">{{item.b_status}}</p>
          <p class="b_date">{{item.b_date}}</p>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
	data(){
		return {}
	},
  computed: {
  ...mapState([
      'logistics','productlists','product'
    ])
  },
  methods:{
    onCopy: function (e) {
      console.log('复制成功');
    },
    onError: function (e) {
      console.log('复制失败');
    },
    togo(){
      this.$router.go(-1)
    }
  }
}

</script>

<style scoped>
  @import '../../../../static/css/myorder/logistics.css';
</style>
