<template>
    <div class="twonet-contain">
        <div class="notmatch" v-if="!userdetail.alaBinding.info=='ACCOUNT_BLIND'">
            <div class="twonet-item userInfo-item">
                <div class="twonet-itemname userInfo-itemname">
                    <span class="musticon">*</span>
                    <span>绿色账户号:</span>
                </div>
                <div class="twonet-iteminput userInfo-iteminput">
                    <p>1111111111111111111111</p>
                </div>
            </div>
            <div class="twonet-item userInfo-item">
                <div class="twonet-itemname userInfo-itemname">
                    <span class="musticon">*</span>
                    <span>阿拉环保账号:</span>
                </div>
                <div class="twonet-iteminput userInfo-iteminput">
                    <el-input v-model="thirdAccountCode" ></el-input>
                </div>
            </div>
            <div class="twonet-item userInfo-item">
                    <div class="twonet-itemname userInfo-itemname">
                    <span class="musticon">*</span>
                    <span>阿拉环保密码:</span>
                </div>
                <div class="twonet-iteminput userInfo-iteminput">
                    <el-input v-model="thirdPwd" type="password"></el-input>
                </div>
            </div>
            <div class="twonet-item userInfo-item">
                <button class="twonet-subbtn userInfo-btn" @click="blind">确定</button>
            </div>
        </div>
        <div class="match" v-if="userdetail.alaBinding.info=='ACCOUNT_BLIND'">
             <div class="twonet-item userInfo-item">
                <div class="twonet-status userInfo-status">
                    <span class="musticon">*</span>
                    <span>已绑定</span>
                </div>
            </div>
            <div class="twonet-item userInfo-item">
                <div class="twonet-itemname userInfo-itemname">
                    <span>绿色账户号:</span>
                </div>
                <div class="twonet-iteminput userInfo-iteminput">
                    <p>{{userdetail.residentVO.userCode}}</p>
                </div>
            </div>
            <div class="twonet-item userInfo-item">
                <div class="twonet-itemname userInfo-itemname">
                    <span>阿拉环保账号:</span>
                </div>
                <div class="twonet-iteminput userInfo-iteminput">
                    <p>{{userdetail.alaBinding.thirdAccountCode}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import api from "@/api/api.js";
export default {
    data(){
        return {
            thirdAccountCode:"",
		    thirdPwd:""
        }
    },
     computed: mapGetters({
        token:"token",
         userdetail:"userdetail"
    }),
   created(){
        
    },
    methods:{
        blind(){
            api.blind({
                data:{
                    thirdAccountCode:this.thirdAccountCode,
		            thirdPwd:this.thirdPwd
                },
                "token":this.token
            }).then(res =>{
                 if(res.msg=='操作成功！'){
                    alert(res.data.msg)
                }
            })
        }
    }
}
</script>

