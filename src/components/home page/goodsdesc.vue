<template>
	<div id="app">
			<div class="outer border bg" v-if="homeproduct.id==classifyid">
        <div class="goods" v-tap.prevent="{ methods : toproductdetail }">
          <img :src="homeproduct.img" class="full">
          <div class="describe rela">
            <div class="name" v-text='homeproduct.name'></div>
            <div class="same">
              <span class="cust" v-if="homeproduct.cust==2">定制</span>
              <div class="bought">{{homeproduct.bought}}人已买</div>
            </div>
            <div class="total"><span>{{homeproduct.total}}</span></div>
            <div class="earnest" :class="{'delete':homeproduct.cust==1}">{{homeproduct.earnest}}</div>
            <div class="bug abso">购买</div>
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
    props:['homeproduct'],
    computed: {
      ...mapState([
        'classifyid'
      ])
    },
    methods:{
      ...mapMutations([
        'changeclassify'
      ]),
      getinfo(id){
        this.changeclassify(id)
      },
      toproductdetail(){
        this.$router.push('/productdetail')
      }
    },
	}
</script>

<style scoped>
  @import '../../../static/css/home/goodsdesc.css';
</style>
