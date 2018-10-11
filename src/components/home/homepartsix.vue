<template>
    <div class="home-map-contain">
        
        <div class="part-contain">
            <div class="home-map-content">
                <div class="part-title">
                    <div class="title-left">
                        <p class="title-name">绿账地图数据</p>
                        <p class="en-title-name">VIDEO ZONE</p>
                    </div>
                </div>
                <div class="part-content">
                   <div>
                       <span class="map-choose">所在行政区</span>
                       <span class="map-choose">发卡排行榜</span>
                   </div>
                   <div></div>
                   <div></div> 
                </div>
            </div>
        </div>
        <div class="map" ref="allmap">

        </div>
        <div class="map-date">
            <div class="map-date-item">
                <p><span class="map-date-count">279</span><span>万</span></p>
                <p>绿色访问量</p>
            </div>
            <div class="map-date-item">
                <p><span class="map-date-count">490</span><span>万</span></p>
                <p>发卡数量</p>
            </div>
            <div class="map-date-item">
                <p><span class="map-date-count">457</span><span>万</span></p>
                <p>覆盖户数</p>
            </div>
            <div class="map-date-item">
                <p><span class="map-date-count">28</span><span>亿</span></p>
                <p>积分统计</p>
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
    mounted(){
        this.map()
    },
    methods:{
        map(){  
            let map =new BMap.Map(this.$refs.allmap); // 创建Map实例      
            map.centerAndZoom(new BMap.Point(121.47, 31.23), 13.5);// 初始化地图,设置中心点坐标和地图级别  
            map.addControl(new BMap.MapTypeControl({//添加地图类型控件        
                mapTypes:[          
                    BMAP_NORMAL_MAP,          
                    BMAP_HYBRID_MAP,        
                ],
            }));      
            map.setCurrentCity("上海");// 设置地图显示的城市 此项是必须设置的      
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放  

        }
    }
}
</script>

