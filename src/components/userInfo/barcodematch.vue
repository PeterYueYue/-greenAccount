<template>
    <div class="barcode-contain">
        <div class="barcode-item userInfo-item">
            <div class="barcode-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>粘贴条码号:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput">
                <el-input v-model="accountBarcode" @change="retest" ></el-input>
                <p class="input-tool">粘贴条码号为18位，开头为3</p>
            </div>
        </div>
        <div class="barcode-item userInfo-item">
                <div class="barcode-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>确认条码号:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput">
                <el-input v-model="rebarcode"></el-input>
            </div>
        </div>
        <div class="barcode-item userInfo-item">
            <button class="barcode-subbtn userInfo-btn" @click="submitHandle">确认绑定</button>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            accountBarcode:'',
            rebarcode:''
        }
    },
    computed: mapGetters({
        token:"token",
    }),
    methods:{
        retest(){
            var reg =/^3.{17}$/;
            if(!reg.test(this.accountBarcode)){
                alert('粘贴条码格式不正确');
                this.accountBarcode=''
            }
        },
        submitHandle(){
            if(this.accountBarcode==''){
                alert('粘贴条码不能为空');
                return
            }
            if(this.accountBarcode==this.rebarcode){
                api.getbarCodeMatch({
                    data:{
                        accountBarcode:this.accountBarcode
                    },
                    "token":this.token
                }).then(res => {
                    if(res.msg=='token不能为空'||res.msg=='token已失效'){
                        alert('请重新登录');
                         this.$router.push({
                            path:'/login'
                        })
                    }
                   if(res.data.msg){
                       alert('匹配成功')
                   }else{
                       alert('粘贴条码已被匹配，请核对正确后输入')
                   }
                })
            }
        }
    }
}
</script>

