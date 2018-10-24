<template>
    <div class="info-base">
        <div>
            <p class="base-title">账号资料</p>
            <div class="base-content">
                <div class="base-item">
                    <span>姓名:</span>
                    <span>{{userInfo.residentVO.resName}}</span>
                </div>
                <div  class="base-item">
                    <span>绿色账号：</span>
                    <span>{{userInfo.residentVO.userCode}}</span>
                </div>
                <div  class="base-item">
                    <span>绿色账户卡类型：</span>
                    <span>{{userInfo.residentVO.accountType}}</span>
                </div>
            </div>
        </div>
        <div>
            <p class="base-title">地址信息</p>
            <div class="base-content">
                <div class="base-item">
                    <span>区县：</span>
                    <span>{{userInfo.residentVO.districtName}}</span>
                </div>
                <div  class="base-item">
                    <span>街道：</span>
                    <span>{{userInfo.residentVO.address}}</span>
                </div>
                <div  class="base-item">
                    <span>居委：</span>
                    <span>{{userInfo.residentVO.committeeName}}</span>
                </div>
                 <div class="base-item">
                    <span>小区：</span>
                    <span>{{userInfo.residentVO.communityName}}</span>
                </div>
                <div  class="base-item">
                    <span>楼号：</span>
                    <span>{{userInfo.residentVO.buildingNumber}}</span>
                </div>
                <div  class="base-item">
                    <span>门号：</span>
                    <span>{{userInfo.residentVO.doorNumber}}</span>
                </div>
            </div>
        </div>
        <div>
            <p class="base-title">注册信息</p>
            <div class="base-content">
                <div class="base-item">
                    <span>电话：</span>
                    <span>{{userInfo.residentVO.telephone}}</span>
                </div>
                <div  class="base-item">
                    <span>证件类型：</span>
                    <span>{{userInfo.residentVO.certType}}</span>
                </div>
                <div  class="base-item">
                    <span>证件号码：</span>
                    <span>{{userInfo.residentVO.certNumber}}</span>
                </div>
                 <div  class="base-item">
                    <span>绿龄：</span>
                    <span>{{userInfo.Age}}</span>
                </div>
            </div>
        </div>
        <div>
            <p class="base-title">虚拟卡</p>
            <div class="base-content">
                <div class="base-item">
                   <div class="green-card">
                       <p>卡名：{{userInfo.residentVO.resName}}</p>
                       <p>注册日期：{{userInfo.residentVO.createDate}}</p>
                   </div>
                </div>
               
            </div>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            userInfo:''
        }
    },
    computed: mapGetters({
        token:"token"
    }),
    mounted(){
        api.getuserdetail({
            "token":this.token
        }).then(res =>{
            this.userInfo=res.data
            console.log(res)
        })
    }
}
</script>

