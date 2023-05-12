<template>
  <!-- 新建分类 -->
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="难度">
        <el-rate v-model="model.scores.difficult" :max="10" show-score style="margin-top:0.6rem"></el-rate>
      </el-form-item>
      <el-form-item label="技能">
        <el-rate v-model="model.scores.skills" :max="10" show-score style="margin-top:0.6rem"></el-rate>
      </el-form-item>
      <el-form-item label="攻击">
        <el-rate v-model="model.scores.attack" :max="10" show-score style="margin-top:0.6rem"></el-rate>
      </el-form-item>
      <el-form-item label="生存">
        <el-rate v-model="model.scores.survice" :max="10" show-score style="margin-top:0.6rem"></el-rate>
      </el-form-item>

      <el-form-item label="称号">
        <el-input v-model="model.title"></el-input>
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
       scores:{
        
       }
      },
      categories:[]
    };
  },
  created() {
    this.id && this.fetch();
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      const res = await this.$http.get("rest/categories");
      this.categories = res.data;
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/heros/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/heros", this.model);
      }

      this.$router.push("/heros/list");
      this.$message.success("保存成功");
    },
    async fetch() {
      const res = await this.$http.get(`rest/heros/${this.id}`);
      Object.assign(this.model,res.data);
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