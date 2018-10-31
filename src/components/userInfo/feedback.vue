<template>
    <div class="feedback-contain">
        <div class="feedback-item userInfo-item">
            <div class="feedback-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>意见标题:</span>
            </div>
            <div class="feedback-iteminput userInfo-iteminput">
                <el-input v-model="adviceTitle"></el-input>
            </div>
        </div>
        <div class="feedback-item userInfo-item">
                <div class="feedback-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>意见内容:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput userInfo-textarea">
                <el-input v-model="adviceContent" type="textarea"></el-input>
            </div>
        </div>
        <div class="feedback-item userInfo-item">
                <div class="feedback-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>联系人姓名:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput">
                <el-input v-model="contactName"></el-input>
            </div>
        </div>
         <div class="feedback-item userInfo-item">
                <div class="feedback-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>联系人电话:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput">
                <el-input v-model="contactPhone" @change="teltest"></el-input>
            </div>
        </div>
         <div class="feedback-item userInfo-item">
                <div class="feedback-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>联系人邮箱:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput">
                <el-input v-model="email"></el-input>
            </div>
        </div>
        <div class="feedback-item userInfo-item">
            <div class="feedback-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>验证码:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput yzminput">
                <el-input v-model="yzm" type="password"></el-input>  
            </div>
            <div class="feedback-itemyzm userInfo-itemyzm" @click="getpcrimg">
                <img src="" alt="" ref="feedbackyzm">
            </div>
        </div>
        <div class="feedback-item userInfo-item">
            <button class="feedback-subbtn userInfo-btn" @click="submitHandle">确认绑定</button>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            adviceTitle:'',
            adviceContent:'',
            contactName:'',
            contactPhone:'',
            email:'',
            uuId:'',
            yzm:''
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
                this.$refs.feedbackyzm.setAttribute('src','data:image/png;base64,'+res.data.pcrImg);
                this.uuId=res.data.uuid;
                this.yzm=''
            })
        },
        teltest(){
             var tel = /^1[3456789]\d{9}$/;
            if(!tel.test(this.contactPhone)&&this.contactPhone!=''){
                alert('请输入设置正确的手机号格式')
                this.contactPhone=''
            }
        },
        submitHandle(){
            if(this.adviceTitle==''){
                alert('标题不能为空');
                return
            }
            if(this.adviceContent==''){
                alert('内容不能为空');
                return
            }
            if(this.contactName==''){
                alert('姓名不能为空');
                return
            }
            if(this.contactPhone==''){
                alert('手机号不能为空');
                return
            }
            if(this.email==''){
                alert('邮箱不能为空');
                return
            }
             if(this.yzm==''){
                alert('验证码不能为空');
                return
            }
            api.ideacreate({
                data:{
                    adviceInfo:{
                        adviceTitle:this.adviceTitle,
                        adviceContent:this.adviceContent,
                        contactName:this.contactName,
                        contactPhone:this.contactPhone,
                        email:this.email, 
                    },
                    uuId:this.uuId,
                    yzm:this.yzm
                },
                "token":this.token
            }).then(res =>{
                if(res.msg=='token不能为空'||res.msg=='token已失效'){
                    alert('请重新登录');
                        this.$router.push({
                        path:'/login'
                    })
                }
                if(res.msg=='操作成功! '){
                    alert(res.data.message)
                }
            })
        }
    }
}
</script>
