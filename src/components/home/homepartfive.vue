<template>
    <div class="home-video-containt">
        <div class="home-video-content" >
            <div class="part-title" :style="video_scrolltitle?' opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(100px)'">
                <div class="title-left">
                    <p class="title-name">绿色时光</p>
                    <p class="en-title-name">VIDEO ZONE</p>
                    
                </div>
            </div>
            <div class="part-content">
                <div class="video-content partone" :style="video_scrollcontent?'opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(200px)'">
                    <!-- <video src=""></video> -->
                    <!-- <video class="home-video" width="1200px" height="383px" controls="controls" src="https://www.greenfortune.sh.cn/images/20171222133126_848.mp4"></video> -->
                    <img src="@/assets/playbtn.png" alt="" class="playbtn">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data(){
        return {
            video_scrolltitle:false,
            video_scrollcontent:false
        }
    },
    mounted(){
         window.addEventListener('scroll',this.videopage)
    },
    destroyed(){
         window.removeEventListener('scroll',this.videopage)
    },
    methods:{
        videopage(){
            var top=$('.home-video-content .part-title').offset().top;
            var client=document.documentElement.clientHeight;
            var scroll=document.documentElement.scrollTop || document.body.scrollTop;
             if(top-client<=scroll){
                this.video_scrolltitle=true
            }
            if(top-client+150<=scroll){
                this.video_scrollcontent=true;
                
            }
        }
    }
}
</script>

