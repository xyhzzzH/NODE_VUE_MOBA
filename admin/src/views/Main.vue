<template>
  <el-container style="height: 100vh">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message">内容管理</i></template>
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="/categories/create">新建分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">物品</template>
          <el-menu-item index="/items/create">新建物品</el-menu-item>
          <el-menu-item index="/items/list">物品列表</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">英雄</template>
          <el-menu-item index="/heros/create">新建英雄</el-menu-item>
          <el-menu-item index="/heros/list">英雄列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu> 
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {

}
</script>

<style>

</style>