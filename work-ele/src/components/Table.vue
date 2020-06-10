<template>
    <div class="table">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="dialogFormVisible = true" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="dialogVisible = true">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

<!--      删除弹窗-->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteConfirm()">确 定</el-button>
        </span>
      </el-dialog>
      <!--  查看弹窗-->

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">

        <el-form ref="infoForm" :model="infoForm" :rules="rules" label-width="120px">
          <el-form-item label="活动名称" prop="a_title">
            <el-input v-model="infoForm._name"></el-input>
          </el-form-item>

          <el-form-item label="活动区域" prop="a_source">
            <el-input v-model="infoForm._area"></el-input>
          </el-form-item>

          <el-form-item label="即时配送" prop="isChecked">
            <el-switch v-model="infoForm._isChecked"></el-switch>
          </el-form-item>
          <!--使用编辑器
          -->
          <el-form-item label="详细">
            <div class="edit_container">
              <quill-editor v-model="infoForm._content"
                            ref="myQuillEditor"
                            class="editer"
                            :options="editorOption" @ready="onEditorReady($event)">
              </quill-editor>
            </div>
          </el-form-item>

          <el-form-item label="上传" :label-width="formLabelWidth">

            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>

          </el-form-item>
        </el-form>


        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit,dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>


</template>

<script>
  // import UE from "./UE";
  import { quillEditor } from 'vue-quill-editor' //调用编辑器
    export default {
      name: "Table",
      components:{
        quillEditor
      },

      methods: {
        onEditorReady(editor) {
        },
        onSubmit() {
          //提交
//this.$refs.infoForm.validate，这是表单验证
          this.$refs.infoForm.validate((valid) => {
            // if(valid) {
            //   this.$post('m/add/about/us',this.infoForm).then(res => {
            //     if(res.errCode == 200) {
            //       this.$message({
            //         message: res.errMsg,
            //         type: 'success'
            //       });
            //       this.$router.push('/aboutus/aboutlist');
            //     } else {
            //       this.$message({
            //         message: res.errMsg,
            //         type:'error'
            //       });
            //     }
            //   });
            // }
          });
        }
,











        handleClick(row) {
          console.log(row);
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        deleteConfirm(){
          console.log("dddddddd");
          this.dialogVisible = false
        },
        // =======================
        handleAvatarSuccess(res, file) {
          console.log(file)
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          console.log(file.type)
          const isJPG = file.type === 'image/jpeg';
          const isPNG = file.type === 'image/png';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isPNG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
        // =======================
      },
      data() {
        return {
          dialogVisible: false,
          dialogFormVisible: false,
          imageUrl: '',
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }],
          infoForm: {
            _name: '',
            _area: '',
            _isChecked: false,
            _content:'',
            editorOption: {}
          },
          formLabelWidth: '120px',

          //表单验证
          rules: {
            a_title: [
              {required: true, message: '请输入标题', trigger: 'blur'}
            ],
            a_content: [
              {required: true, message: '请输入详细内容', trigger: 'blur'}
            ]
          },
        }
      },



      computed: {
        editor() {
          return this.$refs.myQuillEditor.quill
        }
      },
      mounted() {
        //初始化
      },

    }
</script>

<style scoped>
.table{
  width: 1400px;
  margin: 0 auto;
}
</style>
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
