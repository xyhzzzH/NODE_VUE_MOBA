<template>
  <!-- 分类列表 -->
  <div class="about">
    <h1>英雄列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <!-- <el-table-column prop="parent.name" label="上级分类"></el-table-column> -->
      <el-table-column prop="name" label="英雄名称"></el-table-column>
      <el-table-column prop="title" label="称号"></el-table-column>
      <el-table-column prop="categories" label="定位">
         <template slot-scope="scope">
          <span v-for="item in scope.row.categories" :key="item._id">{{item.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="icon" label="图标">
        <template slot-scope="scope">
          <img :src="scope.row.icon" style="height:3em">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180" >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/heros/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/heros");
      this.items = res.data;
    },
    async remove(row){
       const confirmRes = await this.$confirm(`是否确定要删除分类[${row.name}]`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        if(confirmRes !== 'confirm'){
          return this.$message.warning('已取消删除')
        }
        const res = await this.$http.delete(`rest/heros/${row._id}`)
        this.$message.success('删除成功')
        this.fetch()

    }
  },
};
</script>

<style>
</style>