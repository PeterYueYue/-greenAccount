<template>
    <div class="login-contain">
        <div>

        </div>
        <form class="login-form">
            <div class="form-item">
                <span class="form-item-name">绿账卡号：</span>
                <el-input v-model="account" placeholder="请输入绿账卡号/手机号" width="410"></el-input>
            </div>
             <div class="form-item">
                <span class="form-item-name">密码：</span>
                <el-input v-model="pwd" placeholder="请输入密码" type="password"></el-input>
            </div>
            <div class="form-item">
                <span class="form-item-name">验证码：</span>
                <el-input v-model="yzm" placeholder="请输入验证码" class="yanzhengma"></el-input>
                <img src="" alt="" ref="yanzhengma" style="width:117px;height:44px;" class="yzm-img" @click="getpcrimg">
            </div>
            <div class="form-item login">
                <button @click.prevent="login" class="submit-btn">登录</button>
            </div>
        </form>
        <div>
            <p class="tool">
                温馨提示：登录初始密码，套卡为身份证后6位单独卡密码为"111111"
            </p>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import '@/assets/pages/login.css'
export default {
    data(){
        return {
            account:'',
            pwd:'',
            yzm:'',
            uuId:''
        }
    },
    mounted(){
        this.getpcrimg()
    },
    methods:{
        login(){
            api.userlogin({
                data:{
                    account:this.account,
                    pwd:this.pwd,
                    yzm:this.yzm,
                    uuId:this.uuId,
                }
            }).then(res =>{
                console.log(res.data)
                if(res.data.msg){
                    alert(res.data.msg);
                    this.getpcrimg();
                    
                }else {
                     res.data.islogin=true
                     this.$store.dispatch('getToken', res.data);
                     
                     this.$cookies.set("token",res.data.token,res.data.expire);
                     this.$cookies.set("username",res.data.userName,res.data.expire);
                     
                }
            })
        },
        getpcrimg(){
            api.pcrimg().then(res=>{
                this.$refs.yanzhengma.setAttribute('src','data:image/png;base64,'+res.data.pcrImg);
                this.uuId=res.data.uuid;
                this.yzm=''
            })
        }
    }
    
}
</script>

