<template>
  <div>
    <a :href="website.url" :title="website.title" target="_blank">
    <img src="../assets/logo.png" alt="" >
    </a>
    <ul>
      <li v-for="(item,index) in menu" :key="item.id">
        <a :href="'www.baidu.com/'+index">{{item.name}}</a>
      </li>
    </ul>
    <input type="text" v-model="content">
    <button @click="add">添加菜单栏</button>
  </div>
</template>
<script>
  export default {
    name:"Nav",
    props:["menu","website","addMenu"],
    data(){
      return{
        content:''
      }
    },
    methods:{
      add(){
        const content = this.content.trim();
        if(!content){
          alert("不能为空");
          return;
        }
        let item = {name:content,id:10};
        this.addMenu(item);

      }
    }

  }

</script>
<style>


</style>
