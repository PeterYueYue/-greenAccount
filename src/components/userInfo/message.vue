<template>
    <div class="message-contain">
        <div class="message-item" v-for="item in messagelist" :key="item.id">
            <p class="message-time">2018-09-18  13:33:00</p>
            <p class="message-content">{{item.replyContent}}</p>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
export default {
    data:function(){
        return {
            messagelist:[]
        }
    },
    computed: mapGetters({
        token:"token",
    }),
    mounted:function(){
       api.getmyMessage({
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
            this.messagelist=res.data.adviceInfos.content
           
       })
    }
}
</script>
