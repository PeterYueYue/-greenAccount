<template>
    <div class="feedback-contain">
        <div class="feedback-item userInfo-item">
            <div class="feedback-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>意见标题:</span>
            </div>
            <div class="feedback-iteminput userInfo-iteminput">
                <el-input v-model="adviceTitle" @change="feedtitletest"></el-input>
            </div>
        </div>
        <div class="feedback-item userInfo-item">
                <div class="feedback-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>意见内容:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput userInfo-textarea">
                <el-input v-model="adviceContent" type="textarea" maxlength="250" @change="contenttest"></el-input>
            </div>
        </div>
        <div class="feedback-item userInfo-item">
                <div class="feedback-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>联系人姓名:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput">
                <el-input v-model="contactName" @change="nametest"></el-input>
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
                <el-input v-model="email" @change="emailtest"></el-input>
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
            <button class="feedback-subbtn userInfo-btn" @click="submitHandle">提交</button>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
export default {
    data:function(){
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
    mounted:function(){
         this.getpcrimg();
    },
    computed: mapGetters({
        token:"token",
    }),
    methods:{
        feedtitletest(){
            var titletest=/^[\u4e00-\u9fa5\w-]{2,20}$/
            if(!titletest.test(this.adviceTitle)&&this.adviceTitle!=''){
                alert('请填写2-20个字的意见标题');
                this.adviceTitle=''
            }
        },
        contenttest(){
            var content=/^[\u4e00-\u9fa5\w-]{5,250}$/
            if(!content.test(this.adviceContent)&&this.adviceContent!=''){
                alert('请填写5-250个字的意见内容，以便我们更好地提供帮助');
                this.adviceContent=''
            }
        },
        nametest(){
            var nametest=/^[\u4e00-\u9fa5\w-]{2,20}$/
            if(!nametest.test(this.contactName)&&this.contactName!=''){
                alert('请填写2-20字符的联系人姓名');
                this.contactName=''
            }
        },
        emailtest(){
            var emailtest=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
            if(!emailtest.test(this.email)&&this.email!=''){
                alert('请填写正确的邮箱');
                this.email='';
            }
        },
         getpcrimg:function(){
            api.pcrimg().then(res=>{
                this.$refs.feedbackyzm.setAttribute('src','data:image/png;base64,'+res.data.pcrImg);
                this.uuId=res.data.uuid;
                this.yzm=''
            })
        },
        teltest:function(){
             var tel = /^1[3456789]\d{9}$/;
            if(!tel.test(this.contactPhone)&&this.contactPhone!=''){
                alert('请输入设置正确的手机号格式')
                this.contactPhone=''
            }
        },
        submitHandle:function(){
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
                if(res.msg=='操作成功！' ){
                    alert(res.data.message)
                }
            })
        }
    }
}
</script>
