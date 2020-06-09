<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
    <Login></Login>
    <Nav :menu="menu" :website="website" :addMenu="addMenu"></Nav>
    <router-link to="/menu1">菜单1</router-link>
    <router-link to="/menu2">菜单2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Login from "./login";
  import Nav from "./components/Nav"
export default {
  name: 'App',
  components: {Login,Nav},
  data(){
    return{
      menu:[
        {id:1,name:"政治"},
        {id:2,name:"历史"},
        {id:3,name:"地理"},
        {id:4,name:"生物"},
        {id:5,name:"数学"},
      ],
      website:{
        url:"http://www.baidu.com",
        title:"你是一只猪"
      },
      addMenu(item){
        return this.menu.push(item);
      }
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
