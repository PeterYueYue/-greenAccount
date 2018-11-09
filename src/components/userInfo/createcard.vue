<template>
    <div class="createcard-contain">
        <div class="createcard-stepone" v-show="step">
            <div class="createcard-item userInfo-item">
                <div class="createcard-itemname userInfo-itemname">
                    <span class="musticon">*</span>
                    <span>身份证号:</span>
                </div>
                <div class="createcard-iteminput userInfo-iteminput">
                    <el-input v-model="userIdcard" @change="idCardtest"></el-input>
                </div>
            </div>
            <div class="createcard-item userInfo-item">
                <button class="createcard-btn userInfo-btn" @click="nextStep">下一步</button>
            </div>
        </div>
        <div  class="createcard-steptwo" v-show="!step">
            <div class="createcard-item userInfo-item">
                <p class="createcard-int">当前可用绿色积分：<span>0</span></p>
                <p class="createcard-tools"> (单次补卡需扣除200绿色积分，不足200积分将扣除当前全部积分)</p>
            </div>
            <div class="createcard-item userInfo-item">
                 <div class="createcard-itemname userInfo-itemname">
                    <span class="musticon">*</span>
                    <span>地址:</span>
                </div>
                <div class="createcard-iteminput userInfo-iteminput">
                    <el-input v-model="address"></el-input>
                </div>
            </div>
            <div class="createcard-item userInfo-item">
                 <div class="createcard-itemname userInfo-itemname">
                    <span class="musticon">*</span>
                    <span>姓名:</span>
                </div>
                <div class="createcard-iteminput userInfo-iteminput">
                    <el-input v-model="user_name"></el-input>
                </div>
            </div>
            <div class="createcard-item userInfo-item">
                 <div class="createcard-itemname userInfo-itemname">
                    <span class="musticon">*</span>
                    <span>联系电话:</span>
                </div>
                <div class="createcard-iteminput userInfo-iteminput">
                    <el-input v-model="telephone" @change="teltest"></el-input>
                </div>
            </div>
            <div class="createcard-item userInfo-item">
                 <div class="createcard-itemname userInfo-itemname">
                    <span class="musticon">*</span>
                    <span>邮编:</span>
                </div>
                <div class="createcard-iteminput userInfo-iteminput">
                    <el-input v-model="post_code"></el-input>
                </div>
            </div>
            <div class="createcard-item userInfo-item">
                <button class="createcard-btn userInfo-btn" @click="submitHandle">确认绑定</button>
            </div>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
export default {
    data:function(){
        return {
            step:true,
            userIdcard:'',
            address:'',
            user_name:'',
            telephone:'',
            post_code:''
        }
    },
    computed: mapGetters({
        token:"token",
    }),
    methods:{
        idCardtest:function(){
            var idtest=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
            if(!idtest.test(this.userIdcard)){
                alert('请输入设置正确的身份证')
                this.userIdcard=''
            }
        },
        nextStep:function(){
            if(this.userIdcard==''){
                alert('身份证不能为空');
                return
            }
            this.step=false
        },
        submitHandle:function(){
            if(this.userIdcard==''){
                alert('地址不能为空');
                return
            }
            if(this.address==''){
                alert('地址不能为空');
                return
            }
            if(this.user_name==''){
                alert('姓名不能为空');
                return
            }
            if(this.telephone==''){
                alert('电话不能为空');
                return
            }
            if(this.post_code==''){
                alert('邮编不能为空');
                return
            }
            api.getfillCard({
                data:{
                    address:this.address,
                    user_name:this.user_name,
                    telephone:this.telephone,
                    post_code:this.post_code
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
                    alert(res.data.msg)
                }
            })
        },
        teltest:function(){
            var tel = /^1[3456789]\d{9}$/;
            if(!tel.test(this.telephone)&&this.telephone!=''){
                alert('请输入设置正确的手机号格式')
                this.telephone=''
            }
        }
    }
}
</script>

