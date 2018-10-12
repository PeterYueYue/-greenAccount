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
                       <span class="map-choose" @click="street(15,121.43,31.18,310104000000)">所在行政区</span>
                       <span class="map-choose">发卡排行榜</span>
                       <div class="area-list">
                           <span class="area-item active">所有行政区</span>
                           <span class="area-item" v-for="item in area" :key="item.id">{{item.brName}}</span>
                       </div>
                   </div>
                   <div>
                       <p class="list-name">发卡数排行榜</p>
                   </div>
                   <div class="list-table">
                       <table>
                            <thead>
                                <tr class="table-title">
                                    <td style="width:1%">排名</td>
                                    <td style="width:13%">地区</td>
                                    <td style="width:5%">总计</td>
                                </tr>  
                            </thead>
                            <tbody>
                                <tr class="table-content" v-for="(item,index) in arearescount" :key="index">
                                    <td style="width:1%">
                                        <img src="@/assets/userfirst.png" alt="" v-if="item[2]==1">
                                        <img src="@/assets/usersecond.png" alt="" v-if="item[2]==2">
                                        <img src="@/assets/userthird.png" alt="" v-if="item[2]==3">
                                        <span v-if="item[2]!=1&&item[2]!=2&&item[2]!=3">
                                            {{item[2]}}
                                        </span>
                                    </td>
                                    <td>{{item[1]}}</td>
                                    <td>{{item[0]}}</td>
                                </tr>
                            </tbody>
                       </table>
                    </div> 
                    <div class="more-list">
                        <p class="go-more-list">
                            <span>查看更多统计数据</span>
                            <img src="@/assets/icon/activedoright.png" alt="">
                        </p>
                        <p class="list-hint">以下数据统计时间为本日凌晨0:05分</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="map" ref="allmap">

        </div>
        <div class="map-date">
            <div class="map-date-item" v-for="(item,index) in statedata" :key="index">
                <p><span class="map-date-count">{{item.number}}</span><span>{{item.unit}}</span></p>
                <p v-if="index=='amoOfAccess'">绿色访问量</p>
                <p v-if="index=='amoOfCard'">发卡数量</p>
                <p v-if="index=='amoOfCover'">覆盖户数</p>
                <p v-if="index=='amoOfInteg'">积分统计</p>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/api/api.js";
export default {
    data(){
        return {
            arearescount:[],
            statedata:{},
            area:[],
            areaTem:[],
            areaposition:[
                {
                    brName:'黄浦区',
                    lng:'121.48',
                    lat:'31.23',
                },
                {
                    brName:'静安北',
                    lng:'121.45',
                    lat:'31.25 ',
                },
                {
                    brName:'徐汇区',
                    lng:'121.43',
                    lat:'31.18',
                },
                {
                    brName:'长宁区',
                    lng:'121.42',
                    lat:'31.22',
                },
                {
                    brName:'静安区',
                    lng:'121.45',
                    lat:'31.23',
                },
                 {
                    brName:'普陀区',
                    lng:'121.4',
                    lat:'31.25',
                },
                 {
                    brName:'虹口区',
                    lng:'121.5',
                    lat:'31.27',
                },
                 {
                    brName:'杨浦区',
                    lng:'121.52',
                    lat:'31.27 ',
                },
                 {
                    brName:'闵行区',
                    lng:'121.38',
                    lat:'31.12',
                },
                 {
                    brName:'宝山区',
                    lng:'121.48',
                    lat:'31.4',
                },
                 {
                    brName:'嘉定区',
                    lng:'121.27',
                    lat:'31.38',
                },
                 {
                    brName:'浦东新区',
                    lng:'121.53',
                    lat:'31.22 ',
                },
                 {
                    brName:'金山区',
                    lng:'121.33',
                    lat:'30.75',
                },
                {
                    brName:'松江区',
                    lng:'121.22',
                    lat:'31.03 ',
                },
                {
                    brName:'青浦区',
                    lng:'121.12',
                    lat:'31.15',
                },
                {
                    brName:'南汇区',
                    lng:'121.75',
                    lat:'31.05',
                },
                {
                    brName:'奉贤区',
                    lng:'121.47',
                    lat:'30.92',
                },
                {
                    brName:'崇明区',
                    lng:'121.4',
                    lat:'31.62',
                },
            ]
        }
    },
    mounted(){
        this.getStatDate();
        this.getArearescount();
        this.map(13.5,121.47, 31.23);
        this.getarea();
    },
    methods:{
         getarea(){
            api.getarea().then(res =>{
                this.areaTem=res.data;
                this.area=this.areaTem.map((item,index)=>{
                    var config;
                    console.log(item)
                    this.areaposition.forEach((item2,index)=>{
                        if(item.brName==item2.brName){
                            config =  Object.assign(item,item2);                   
                        }
                    });
                    return config
                })
            })
        },
        map(aa,lng,lat){  
            let map =new BMap.Map(this.$refs.allmap); // 创建Map实例      
            map.centerAndZoom(new BMap.Point(lng,lat), aa);// 初始化地图,设置中心点坐标和地图级别  
            map.addControl(new BMap.MapTypeControl({//添加地图类型控件        
                mapTypes:[          
                    BMAP_NORMAL_MAP,          
                    BMAP_HYBRID_MAP,        
                ],
            }));   
            this.areaposition.forEach((item,index) =>{
                var point = new BMap.Point(item.lng,item.lat);
                var marker = new BMap.Marker(point);
                map.addOverlay(marker)
            })   
            map.setCurrentCity("上海");// 设置地图显示的城市 此项是必须设置的      
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放  

            var opts = {
				width : 250,     // 信息窗口宽度
				height: 80,     // 信息窗口高度
				title : "信息窗口" , // 信息窗口标题
				enableMessage:true//设置允许信息窗发送短息
			   };
        },
        street(a,b,c,d){
            api.getPositionInfo({
                data:{
                    districtId:d
                }
            }).then(res =>{
                console.log(res)
            })
        },
        getArearescount(){
            api.getArearescount({
                data:{
                    // pageSize:'9'
                }
            }).then(res =>{
                this.arearescount=res.data
            })
        },
        getStatDate(){
            api.getStatDate().then(res => {
                this.statedata=res.data;
            })
        }
    }
}
</script>

