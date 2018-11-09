<template>
    <div class="barcodesearch-contain">
        <table class="barcodesearch-table">
            <thead>
                <tr class="table-title">
                    <td style="width:50%">粘贴条码</td>
                    <td style="width:50%">匹配日期</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in codelist" :key="item.barCode">
                    <td>{{item.barCode}}</td>
                    <td>{{item.createDate | moment}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
export default {
    data:function(){
        return {
            codelist:[]
        }
    },
     computed: mapGetters({
        token:"token",
    }),
    mounted:function(){
        api.getpasteCodeList({
            data:{
                startPage:"1",
		        pageSize:"10"
            },
            "token":this.token
        }).then(res =>{
            if(res.msg=='token不能为空'||res.msg=='token已失效'){
                alert('请重新登录');
                    this.$router.push({
                    path:'/login'
                })
            }
            this.codelist=res.data.pasteCodeVOs.content
        })
    }
}
</script>

