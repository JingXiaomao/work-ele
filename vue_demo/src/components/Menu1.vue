<template>
    <div>
      <router-link to="/menu1/subMenu1">我是子菜单1</router-link>
      <router-link to="/menu1/subMenu2">我是子菜单2</router-link>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>
