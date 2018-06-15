<template>
      <router-link to="/logistics">
        <div class="sign border bg">
          <div class="signinner border rela">
            <p class="signed">{{logistics[0].newest.b_status}}</p>
            <div class="signdate">{{logistics[0].newest.b_date}}</div>
            <img class="abso" src="../../../assets/to.png">
          </div>
        </div>
      </router-link>
</template>

<script>
  export default {
    data(){
      return {}
    },
    props:['logistics'],
  }
</script>

<style scoped>
  @import '../../../../static/css/myorder/orderdetail.css';
</style>
