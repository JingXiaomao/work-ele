<template>
  <div>
    <p class="info">{{msg}}</p>
  </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return{
          msg:"vue你好，我第一次做项目"
        }
      }

    }
</script>

<style scoped>
  .info{
    color: red;
    font-size: 30px;
    text-align: center;
  }

</style>
