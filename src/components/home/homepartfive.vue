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
                    <img src="@/assets/playbtn.png" alt="" class="playbtn" @click="maskdisplay">
                </div>
            </div>
        </div>
        <transition name="videomask">
            <div class="video-mask" @click.prevent="videomask_display=false;video_display=false" v-if="videomask_display">
                <transition name="isvideo">
                    <div class="video-mask-contain" v-if="video_display">
                        <video class="home-video" width="1000px" controls="controls" controlsList="nodownload" autoplay="autoplay" src="https://www.greenfortune.sh.cn/images/20171222133126_848.mp4"></video>
                    </div>
                </transition> 
            </div>
        </transition>    
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data:function(){
        return {
            video_scrolltitle:false,
            video_scrollcontent:false,
            video_display:false,
            videomask_display:false
        }
    },
    mounted:function(){
         window.addEventListener('scroll',this.videopage)
    },
    destroyed:function(){
         window.removeEventListener('scroll',this.videopage)
    },
    methods:{
        maskdisplay:function(){
            this.videomask_display=true;
            setTimeout(()=>{
                this.video_display=true
            },300)
        },
        videopage:function(){
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

