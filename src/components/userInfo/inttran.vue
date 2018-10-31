<template>
    <div class="inttran-contain">
        <div class="barcode-item userInfo-item">
            <div class="inttran-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>新卡号:</span>
            </div>
            <div class="inttran-iteminput userInfo-iteminput">
                <el-input v-model="cardcode"></el-input>
            </div>
        </div>
        <div class="inttran-item userInfo-item">
                <div class="inttran-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>确认卡号:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput">
                <el-input v-model="recardcode"></el-input>
            </div>
        </div>
        <div class="inttran-item userInfo-item">
                <div class="inttran-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>密码:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput">
                <el-input v-model="password"></el-input>
            </div>
        </div>
        <div class="inttran-item userInfo-item">
            <div class="inttran-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>验证码:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput yzminput">
                <el-input v-model="yzm" type="password"></el-input>  
            </div>
            <div class="inttran-itemyzm userInfo-itemyzm" @click="getpcrimg">
                <img src="" alt="" ref="inttranyzm">
            </div>
        </div>
        <div class="inttran-item userInfo-item">
            <button class="inttran-subbtn userInfo-btn">确认绑定</button>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
export default {
    data(){
        return {
            cardcode:'',
            recardcode:'',
            password:'',
            yzm:'',
            uuId:''
        }
    },
    mounted(){
        this.getpcrimg()
    },
    methods:{
         getpcrimg(){
            api.pcrimg().then(res=>{
                this.$refs.inttranyzm.setAttribute('src','data:image/png;base64,'+res.data.pcrImg);
                this.uuId=res.data.uuid;
                this.yzm=''
            })
        }
    }
}
</script>

