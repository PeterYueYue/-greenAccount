<template>
    <div class="home-action-contain">
        <div class="home-action-content">
            <div class="part-title">
                <div class="title-left">
                    <p class="title-name">绿账行动</p>
                    <p class="en-title-name">NEWS NEWS TRENDS</p>
                </div>
                <div class="title-right">
                    <p class="action-choose">
                        <span class="active">全部</span>
                        <span>申城动态</span>
                        <span>行业新闻</span> 
                    </p>
                </div>
            </div>
            <div class="part-content">
                <div class="action-content-left">
                    <div class="action-content-left-top">
                        <img src="@/assets/action.png" alt="">
                    </div>
                    <div class="action-content-left-bottom">
                        <div class="action-left-date">
                            <div class="date-day">09</div>
                            <div class="date-year">2018-04</div>
                        </div>
                        <div class="action-left-notice">
                            <div class="action-left-title">
                                上海绿色账户平台维护公告
                            </div>
                            <div class="action-left-middle"></div>
                            <div class="action-left-content">
                                <p>亲爱的市民朋友：</p>
                                <div class="notice-contain">
                                    <p class="left-notice-content">您好！为了提供更好的服务，上海</p>
                                    <span @click="displayDetail" class="ellipsis">...</span>  
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="action-content-right">
                    <div class="action-content-right-top">
                        <div class="action-right-title">
                            上海绿色账户平台维护公告
                        </div>
                        <div class="action-right-notice">
                             <div class="action-right-content">
                                <p>亲爱的市民朋友：</p>
                                <div class="notice-contain">
                                    <p class="right-notice-content">您好！为了提供更好的服务，上海</p>
                                    <span @click="displayDetail" class="ellipsis">...</span>  
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div class="action-content-right-bottom"></div>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        displayDetail(){

        }
    }
}
</script>

