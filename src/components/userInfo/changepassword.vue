<template>
    <div class="changepassword-contain">
        <div class="changepassword-item userInfo-item">
            <div class="changepassword-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>原密码:</span>
            </div>
            <div class="changepassword-iteminput userInfo-iteminput">
                <el-input v-model="pwd"></el-input>
            </div>
        </div>
        <div class="changepassword-item userInfo-item  userInfo-includetools">
                <div class="changepassword-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>新密码:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput">
                <el-input v-model="newPwd" @change="pwdtest"></el-input>
                <p class="input-tool">8-20位,区分大小写，必须包含数字，大小写字母</p>
            </div>
        </div>
        <div class="changepassword-item userInfo-item">
                <div class="changepassword-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>重复新密码:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput">
                <el-input v-model="reNewPwd"></el-input>
            </div>
        </div>
        <div class="changepassword-item userInfo-item">
            <div class="changepassword-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>验证码:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput yzminput">
                <el-input v-model="yzm" type="password"></el-input>  
            </div>
            <div class="changepassword-itemyzm userInfo-itemyzm" @click="getpcrimg">
                <img src="" alt="" ref="changepasswordyzm">
            </div>
        </div>
        <div class="changepassword-item userInfo-item">
            <button class="changepassword-subbtn userInfo-btn" @click="submitHandle">确认绑定</button>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            pwd:'',
		    newPwd:'',
		    reNewPwd:'',
		    yzm:'',
            uuId:'',   
        }
    },
    mounted(){
        this.getpcrimg();
    },
    computed: mapGetters({
        token:"token",
    }),
    methods:{
        getpcrimg(){
            api.pcrimg().then(res=>{
                this.$refs.changepasswordyzm.setAttribute('src','data:image/png;base64,'+res.data.pcrImg);
                console.log(res.data.uuid)
                this.uuId=res.data.uuid;
                this.yzm=''
            })
        },
        pwdtest(){
            var pwdtest = /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/
            if(!pwdtest.test(this.newPwd)){
                alert('请输入设置正确的密码格式')
                this.newPwd=''
            }
        },
        submitHandle(){
             if(this.pwd==''){
                alert('原密码不能为空');
                return
            }
            if(this.newPwd==''){
                alert('新密码不能为空');
                return
            }
            if(this.reNewPwd==''){
                alert('电重复新密码不能为空');
                return
            }
            if(this.yzm==''){
                alert('验证码不能为空');
                return
            }
            if(this.newPwd!=this.reNewPwd){
                alert('两次新密码不一致');
                return
            }
            api.editPwd({
                data:{
                    pwd:this.pwd,
                    newPwd:this.newPwd,
                    reNewPwd:this.reNewPwd,
                    yzm:this.yzm,
                    uuId:this.uuId
                },
                "token":this.token
            }).then(res =>{
                if(res.msg=='token不能为空'||res.msg=='token已失效'){
                    alert('请重新登录');
                        this.$router.push({
                        path:'/login'
                    })
                }
                if(res.msg=='操作成功！'){
                    console.log('22222')
                    alert(res.data.message)
                }
            })
        }
    }
}
</script>
