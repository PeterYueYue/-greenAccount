<template>
    <div class="info-base">
        <div>
            <p class="base-title">账号资料</p>
            <div class="base-content">
                <div class="base-item">
                    <span>姓名:</span>
                    <span>{{userdetail.residentVO.resName}}</span>
                </div>
                <div  class="base-item">
                    <span>绿色账号：</span>
                    <span>{{userdetail.residentVO.userCode}}</span>
                </div>
                <div  class="base-item">
                    <span>绿色账户卡类型：</span>
                    <span>{{userdetail.residentVO.accountType}}</span>
                </div>
            </div>
        </div>
        <div>
            <p class="base-title">地址信息</p>
            <div class="base-content">
                <div class="base-item">
                    <span>区县：</span>
                    <span>{{userdetail.residentVO.districtName}}</span>
                </div>
                <div  class="base-item">
                    <span>街道：</span>
                    <span>{{userdetail.residentVO.address}}</span>
                </div>
                <div  class="base-item">
                    <span>居委：</span>
                    <span>{{userdetail.residentVO.committeeName}}</span>
                </div>
                 <div class="base-item">
                    <span>小区：</span>
                    <span>{{userdetail.residentVO.communityName}}</span>
                </div>
                <div  class="base-item">
                    <span>楼号：</span>
                    <span>{{userdetail.residentVO.buildingNumber}}</span>
                </div>
                <div  class="base-item">
                    <span>门号：</span>
                    <span>{{userdetail.residentVO.doorNumber}}</span>
                </div>
            </div>
        </div>
        <div>
            <p class="base-title">注册信息</p>
            <div class="base-content">
                <div class="base-item">
                    <span>电话：</span>
                    <span>{{userdetail.residentVO.telephone}}</span>
                </div>
                <div  class="base-item">
                    <span>证件类型：</span>
                    <span>{{userdetail.residentVO.certType}}</span>
                </div>
                <div  class="base-item">
                    <span>证件号码：</span>
                    <span>{{userdetail.residentVO.certNumber}}</span>
                </div>
                 <div  class="base-item">
                    <span>绿龄：</span>
                    <span>{{userdetail.Age}}</span>
                </div>
            </div>
        </div>
        <div>
            <p class="base-title">虚拟卡</p>
            <div class="base-content">
                <div class="base-item">
                   <div class="green-card">
                       <p class="card-name">卡名：{{userdetail.residentVO.resName}}</p>
                       <p class="card-date">注册日期：{{userdetail.residentVO.createDate | momentDate}}</p>
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
    data:function(){
        return {
            userInfo:''
        }
    },
    computed: mapGetters({
        token:"token",
        userdetail:"userdetail"
    }),
    mounted:function(){
        // api.getuserdetail({
        //     "token":this.token
        // }).then(res =>{
        //     this.userInfo=res.data
        // })
    }
}
</script>

