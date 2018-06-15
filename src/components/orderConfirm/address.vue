<template>
  <div id="app">
  <div class="address">
    <div class="nav">
      <img src="../../assets/back.png" alt="" @click="goback()">
      收货地址
    </div>
      <!--无地址页面-->
      <!--<div>-->
        <!--<div class="noaddresspic">-->
          <!--<img src="../../assets/address-empty@2x.png" alt="">-->
        <!--</div>-->
        <!--<div class="noaddressword">主人，您还没有地址呢！</div>-->
        <!--<div class="noaddressbtn">现在添加</div>-->
      <!--</div>-->
      <div class="card" v-for="message in messageList">
        <div class="name">{{message.name}}  {{message.phone}}</div>
        <div class="addressdetail">{{message.addressdetail}}</div>
        <div class="line"></div>
        <div class="last">
          <div class="default" v-show="message.status==0" @click="setdefault(message)">
            <img src="../../assets/address-default-unset.png" alt="">
            <div>设为默认</div>
          </div>
          <div class="default" v-show="message.status!=0" @click="setdefault(message)">
            <img src="../../assets/address-default-set.png" alt="">
            <div style="color: #FF6161;">已设为默认</div>
          </div>
          <div class="edit">
            <img src="../../assets/address-edit.png" alt="" @click="editaddress(message)">
            <div>编辑</div>
          </div>
          <div class="delete" @click="deleteaddress">
            <img src="../../assets/address-delete.png" alt="">
            <div>删除</div>
          </div>
        </div>
      </div>
      <div class="addaddress" @click="addaddress">
        <img src="../../assets/add-address@2x.png" alt="">
        <div>添加收货地址</div>
      </div>
    <!--添加收货地址弹窗-->
    <div class="modal-con" v-show="showModal"></div>
    <div class="modal-main-con"  v-show="showModal">
      <div class="close">
        <img src="../../assets/button-off@2x.png" alt=""  @click="close">
      </div>
      <div class="title">编辑地址</div>
      <div class="editname">
        <input type="text" placeholder="填写收货人姓名" :value="name" id="editname">
      </div>
      <div class="editphone">
        <input type="text" placeholder="联系电话" :value="phone" id="editphone">
      </div>
      <div class="selectarea">
        <cityselect id="selectarea"></cityselect>
      </div>
      <div class="editaddress">
        <textarea placeholder="请填写详细地址" :value="addressdetail" id="editaddress"></textarea>
      </div>
      <div class="saveaddress" @click="saveaddress()">保存</div>
    </div>

    <!--删除按钮的弹框-->
    <div class="drawer_screen" data-delete="close" v-show="showDeleteModalStatus"></div>
    <div class="delete_box" v-show="showDeleteModalStatus">
      <!--drawer content-->
      <div class="delete_title">提示信息</div>
      <div class="delete_content">
        确定删除该地址吗？
      </div>
      <div class="btnDelete">
        <div class="confirm" data-delete="close">确定</div>
        <div class="cancel" data-delete="close" @click="canceldelete">取消</div>
      </div>
    </div>

  </div>
  </div>
</template>
<style scoped>
  @import "address.css";
</style>
<script scoped>
  import cityselect from './cityselect/cityselect.vue'
  export default {
    name: 'address',
    data () {
      return {
        name:'',
        phone:'',
        addressdetail:'',
        messageList:[
          {
            id:2,
            name:'aa',
            phone:'15234567890',
            addressdetail:'江苏省 南京市 江宁区 天元西路去你妹的小区2栋3单元306室',
            status:0,//非默认
          },
          {
            id:4,
            name:'bb',
            phone:'15234567890',
            addressdetail:'江苏省 南京市 江宁区 天元西路去你妹的小区2栋3单元306室江苏省 南京市 江宁区 天元西路去你妹的小区2栋3单元306室',
            status:0,
          },
          {
            id:5,
            name:'cc',
            phone:'15234567890',
            addressdetail:'江苏省 南京市 江宁区 天元西路去你妹的小区2栋3单元306室',
            status:0,
          }
        ],
        showModal:false,
        showDeleteModalStatus:false
      }
    },
    methods:{
      addaddress:function () {
        this.showModal=true;
        this.name='';
        this.phone='';
        this.addressdetail='';
      },
      close:function () {
        this.showModal=false;
      },
      deleteaddress:function () {
        this.showDeleteModalStatus = true;
      },
      canceldelete:function () {
        this.showDeleteModalStatus = false;
      },
      setdefault:function (message) {
        this.messageList.forEach(n=>{
          if(message.id==n.id){
            n.status =1;
          }else{
            n.status=0;
          }
        })
      },
      editaddress:function (message) {
        this.showModal=true;
        this.name=message.name;
        this.phone=message.phone;
        this.addressdetail=message.addressdetail;
      },
      saveaddress:function () {
        var name = document.getElementById('editname').value;
        var phone = document.getElementById('editphone').value;
        var address = document.getElementById('editaddress').value;
        this.name = name;
        this.showModal=false;
      },
      goback:function () {
        this.$router.go(-1);
      }

    },
    components:{
      cityselect
    }

  }
</script>
