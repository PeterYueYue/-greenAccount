<template>
    <div class="home-other-contain">
        <div class="home-other-content">
                <div class="part-title" :style="other_scrolltitle?' opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(100px)'">
                    <div class="title-left">
                        <p class="title-name">绿账宣传</p>
                        <p class="en-title-name"> BULLETIN BOARD</p>
                    </div>
                </div>
           
            <div class="part-content">
                <div class="other-part" :style="other_scrollpart?'opacity: 1;transform: translateY(0);transition:all 1.5s':' opacity: 0;transform: translateY(200px);transition:all 1.5s'">
                    <div class="other-part-img">
                        <img src="@/assets/lvzhangxx1.png" alt="" >
                    </div>
                    <div class="other-part-content">
                        <p class="other-content-title">小纸盒重生记——一个被“抛弃”的牛奶盒之旅</p>
                        <p class="other-content">我是一个被“喝掉”的牛奶纸盒，不谙世事，不知道要去何方。听说，家里的垃圾筐、小区的分类垃圾桶都只是我接下来旅程的一部分，接下来还有什么？就请跟着我一起来了解吧...</p>
                    </div>
                </div>
                <div class="other-part" :style="other_scrollpart?'opacity: 1;transform: translateY(0);transition:all 1.5s .2s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .2s'">
                    <div class="other-part-img">
                        <img src="@/assets/lvzhangxx2.png" alt="">
                    </div>
                    <div class="other-part-content">
                        <p class="other-content-title">分垃圾从“桶”开始</p>
                        <p class="other-content">街边的垃圾桶分“可回收”、“不可回收”；小区里多出一个“厨余”，有些地方还会多出一个“有害垃圾”；在日本有可燃、不可燃、资源类、粗大类等不同的垃圾桶；德国的垃圾桶会按不同材料来划分……那么之后，这些垃圾又去哪儿了？</p>
                    </div>
                </div>
                <div class="other-part" :style="other_scrollpart?'opacity: 1;transform: translateY(0);transition:all 1.5s .4s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .4s'">
                    <div class="other-part-img">
                        <img src="@/assets/lvzhangxx3.png" alt="">
                    </div>
                    <div class="other-part-content">
                        <p class="other-content-title">环保误区——不能降解也无“罪</p>
                        <p class="other-content">5年前，限塑令让很多人不假思索地给塑料袋这种难以降解的物品贴上“白色污染”标签。其实严格来说，世界上万事万物都是可以被降解的，只需充分的时间、空间和反应条件。但有限生命的人们等不了那么久，效率和速度，是垃圾降解的重要考核指标。而那些不能那么快被降解的垃圾，我们就得另谋高招……</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return {
            other_scroll:0,
            other_scrolltitle:false,
            other_scrollpart:false
        }
    },
    mounted(){
         window.addEventListener('scroll',this.otherpage)
    },
    methods:{
        otherpage(){
            var top=$('.home-other-contain .part-title').offset().top;
            var client=document.documentElement.clientHeight;
            var scroll=document.documentElement.scrollTop || document.body.scrollTop;
            console.log(top-client+300<=scroll)
            if(top-client+10<=scroll){
                this. other_scrolltitle=true
            }
            if(top-client+50<=scroll){
                this.other_scrollpart=true;
            }
        }
    }

}
</script>

