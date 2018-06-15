<template>
  <div id="app">
    <div id="code"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        appId:'wx658d1c29047c3776',
        secret:'87fd29002ee418fa4ba0de6665b9e7dc',
        redirect_url:'http%3a%2f%2fm.u1zhai.com'
      }
    },
    mounted(){
      this.isWeiXin ();
    },
    methods:{
      isWeiXin (){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
          window.open("https://open.weixin.qq.com/connect/oauth2/authorize?appid="+this.appId+"&redirect_uri="+this.redirect_url+"&response_type=code&scope=snsapi_userinfo#wechat_redirect");
        }else{
          /*var hey = {
            locationSearch: (function () {
              var search = window.location.search.substring(1),
                obj = {};
              if (search) {
                var arr = search.split("&"),
                  length = arr.length;

                while (length) {
                  let attr = arr[--length].split("=");
                  obj[decodeURIComponent(attr[0])] = !!attr[1] ? decodeURIComponent(attr[1]) : undefined;
                }
              }
              return obj;
            }())
          };*/
          //    第一步，获取Code
          var obj = new WxLogin({
            id:"code",
            appid: this.appId,
            scope: "snsapi_login",
            redirect_uri: this.redirect_url
          });

  //    第二步，获取accessToken
  //           let CODE='081oyOMi2wqERI0iaDOi2fCVMi2oyOMS';
  //           let CODE=hey.locationSearch.code;

          /*axios.get('https://api.weixin.qq.com/sns/oauth2/access_token',{
            params:{
              appid:'wx658d1c29047c3776',
              secret:'87fd29002ee418fa4ba0de6665b9e7dc',
              code:'081TnElO0CBv5a2p5alO0wtUlO0TnElW',
              grant_type:'authorization_code'
            }
          })
          this.$ajax({
            method: 'get',
            url: 'https://api.weixin.qq.com/sns/oauth2/access_token',
            data: {
              appid:'wx658d1c29047c3776',
              secret:'87fd29002ee418fa4ba0de6665b9e7dc',
              code:'081TnElO0CBv5a2p5alO0wtUlO0TnElW',
              grant_type:'authorization_code'
            }
          })*/

          /*this.$http.jsonp(" https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx658d1c29047c3776&secret=87fd29002ee418fa4ba0de6665b9e7dc&code=081TnElO0CBv5a2p5alO0wtUlO0TnElW&grant_type=authorization_code").then((res) => {
            console.log(res.body);
            https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx658d1c29047c3776&secret=87fd29002ee418fa4ba0de6665b9e7dc&code=081TnElO0CBv5a2p5alO0wtUlO0TnElW&grant_type=authorization_code
            {
            "access_token": "5_ddQaWc4TiCRHNWfgdkqBdCCU9KJzPlp7eeIDrUSQMn_C2PpuGgOpv3XsowthqSn0IlD85UIbfQJM2PAbUG0tQA",
            "expires_in": 7200,
            "refresh_token": "5_7LrmtAKCFxGQBZnz5s8VhlHc8EA9q_wSaFpbcLHgK2IAf0tDIFPb4BRKf2Ome073JwSiXYp9UixZzDmsLioRsw",
            "openid": "o2qyd0kKNlIWs5LHUMVEnFQuWKpE",
            "scope": "snsapi_login",
            "unionid": "oDEmzuDWU1Ze3IU7Vc-nT3x0uYfU"

          });}*/
  //    第三步，获取用户信息
          /*let ajaxUrl="https://api.weixin.qq.com/sns/userinfo?access_token="+token3+"&openid="+openid3;
          this.$http.get(ajaxUrl).then((res)=> {
          console.log(res);
          https://api.weixin.qq.com/sns/userinfo?access_token=5_XK3kQpSkl-s4aVoPq9nsmezkb1zr4QDuNrRmLdWWlt8k1o7xnyGdVI6uj3gFTtT36WWHypb4L_66u7aM4pftvw&openid=o2qyd0rgy3n61ICte-yEcYL_R5qY
            {
            "openid": "o2qyd0kKNlIWs5LHUMVEnFQuWKpE",
            "nickname": "鍌叉參",
            "sex": 2,
            "language": "zh_CN",
            "city": "Yancheng",
            "province": "Jiangsu",
            "country": "CN",
            "headimgurl": "http://wx.qlogo.cn/mmopen/vi_32/kQQ7zt3ZDC02eicpGKciatT29DcPFv1L5wyuPJ7RP9oCWmibq7VmGcMUkSgiaW3EVaYjEOhdpVDAQUAfazAOVHicTZA/0",
            "privilege": [],
            "unionid": "oDEmzuDWU1Ze3IU7Vc-nT3x0uYfU"
            }
          });*/

        }
      },
    }
  }
</script>

<style scoped>
  #code  {
    text-align: center;
    margin-top: 100px;
  }
</style>
