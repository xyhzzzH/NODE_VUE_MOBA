<template>
  <!-- 新建分类 -->
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}物品</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <!-- <el-form-item label="上级分类">
        <el-select v-model="model.parent" clearable>
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {
      
      },
    };
  },
  created() {
    this.id && this.fetch();
    this.fetchParents();
  },
  methods: {
    async fetchParents() {
      const res = await this.$http.get("rest/categories");
      this.parents = res.data;
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/items/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/items", this.model);
      }

      this.$router.push("/items/list");
      this.$message.success("保存成功");
    },
    async fetch() {
      const res = await this.$http.get(`rest/items/${this.id}`);
      this.model = res.data;
    },
    afterUpload(res){
      this.$set(this.model,'icon',res.url)
    }
  },
};
</script>

<style>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>