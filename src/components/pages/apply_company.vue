<template>
  <div class="apply_wrap">
    <div class="apply_title">申请成为爱心单位</div>
    <div class="apply_head">请如实填写相关资料，以便我们及时处理您的申请</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm app apply_form">
      <el-form-item label="公司名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入公司名称" class="apply_input"></el-input>
      </el-form-item>
      <el-form-item label="公司地址" prop="address">
        <el-input v-model="ruleForm.address" placeholder="请输入公司地址" class="apply_input"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="contacts">
        <el-input v-model="ruleForm.contacts" placeholder="请输入联系人" class="apply_input"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="ruleForm.tel" placeholder="请输入联系电话" class="apply_input"></el-input>
      </el-form-item>
      <el-form-item label="E-mail" prop="email">
        <el-input v-model="ruleForm.email" placeholder="请输入E-mail" class="apply_input"></el-input>
      </el-form-item>
      <el-form-item label="公司简介" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入公司简介" class="apply_textarea"></el-input>
      </el-form-item>
      <el-form-item label="申请事由" prop="cause">
        <el-input type="textarea" v-model="ruleForm.cause" placeholder="请输入申请事由" class="apply_textarea"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" placeholder="请输入验证码" class="apply_input"></el-input>
        <img :src="pcrImgSrc" alt="" class="apply_pcrImg" @click="pcrImg">
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('ruleForm')" class="apply_btn">立即申请</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import '@/assets/pages/apply.css';

  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          address: '',
          contacts: '',
          tel: '',
          email: '',
          desc: '',
          cause: '',
          code: '',
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 2, message: '大于2个中文字符', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请输入公司地址', trigger: 'blur'},
            {min: 5, message: '大于5个非特殊符号的字符', trigger: 'blur'}
          ],
          contacts: [
            {required: true, message: '请输入联系人', trigger: 'blur'},
            {min: 2, message: '大于2个非特殊符号的字符', trigger: 'blur'}
          ],
          tel: [
            {required: true, message: '请输入联系电话', trigger: 'blur'},
          ],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          desc: [
            {required: true, message: '请填写公司简介', trigger: 'blur'},
            {min: 5, message: '大于5个非特殊符号的字符', trigger: 'blur'}
          ],
          cause: [
            {required: true, message: '请填写申请事由', trigger: 'blur'},
            {min: 5, message: '大于5个非特殊符号的字符', trigger: 'blur'}
          ],
        },
        pcrImgSrc: ''
      }
    },
    mounted() {
      this.pcrImg();
    },
    methods: {
      submitForm(formName) {
        api.caringUnitSubmit({
          data: {
            "id": "-1",
            "cname": "1231212",
            "address": "123123",
            "contacts": "123123",
            "contectsTel": "13999999999",
            "email": "123@qq.com",
            "scale": "fwfdsdf",
            "content": "sdfsd",
            "yzm": "r7p7",
          },
        }).then(res => {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        })
      },
      pcrImg() {
        api.pcrimg({}).then(res => {
          this.pcrImgSrc = 'data:image/png;base64,' + res.data
        })
      },

    }
  }
</script>