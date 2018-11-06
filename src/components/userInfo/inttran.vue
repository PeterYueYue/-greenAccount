<template>
    <div class="inttran-contain">
        <div class="barcode-item userInfo-item">
            <div class="inttran-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>新卡号:</span>
            </div>
            <div class="inttran-iteminput userInfo-iteminput">
                <el-input v-model="newGreenCode"></el-input>
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
                <el-input v-model="pwd"  type="password"></el-input>
            </div>
        </div>
        <div class="inttran-item userInfo-item">
            <div class="inttran-itemname userInfo-itemname">
                <span class="musticon">*</span>
                <span>验证码:</span>
            </div>
            <div class="barcode-iteminput userInfo-iteminput yzminput">
                <el-input v-model="yzm"></el-input>  
            </div>
            <div class="inttran-itemyzm userInfo-itemyzm" @click="getpcrimg">
                <img src="" alt="" ref="inttranyzm">
            </div>
        </div>
        <div class="inttran-item userInfo-item">
            <button class="inttran-subbtn userInfo-btn" @click="pointTransInfo">确认绑定</button>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            newGreenCode:'',
            recardcode:'',
            pwd:'',
            yzm:'',
            uuId:''
        }
    },
    mounted(){
        this.getpcrimg()
    },
    computed: mapGetters({
        token:"token",
    }),
    methods:{
         getpcrimg(){
            api.pcrimg().then(res=>{
                this.$refs.inttranyzm.setAttribute('src','data:image/png;base64,'+res.data.pcrImg);
                this.uuId=res.data.uuid;
                this.yzm=''
            })
        },
        pointTransInfo(){
            if(this.newGreenCode==''){
                alert('新卡号不能为空');
                return
            }
            if(this.recardcode==''){
                alert('确认卡号不能为空');
                return
            }
            if(this.pwd==''){
                alert('密码不能为空');
                return
            }
            if(this.yzm==''){
                alert('验证码不能为空');
                return
            }
            if(this.newGreenCode!=this.recardcode){
                alert('两次卡号不一致');
                return
            }
            api.pointTransInfo({
                data:{
                    uuId:this.uuId,
                    pwd:this.pwd,
                    yzm:this.yzm,
                    account:this.newGreenCode
                },
                token:this.token
            }).then(res =>{
                if(res.msg=='token不能为空'||res.msg=='token已失效'){
                    alert('请重新登录');
                        this.$router.push({
                        path:'/login'
                    })
                }
                if(res.status=='error'&&res.msg!='token不能为空'&&res.msg!='token已失效'){
                    alert(res.msg)
                }else {
                    alert(res.data.msg)
                }
            })
        }
    }
}
</script>

