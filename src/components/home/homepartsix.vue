<template>
    <div class="home-map-contain">
        <div class="part-contain">
            <div class="home-map-content partone" :style="map_scrolltitle?' opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(100px)'">
                <div class="part-title" >
                    <div class="title-left">
                        <p class="title-name">绿账地图数据</p>
                        <p class="en-title-name">VIDEO ZONE</p>
                    </div>
                </div>
                <div class="part-content">
                   <div>
                       <span class="map-choose" @click.stop="maplist=!maplist">{{ismap}}</span>
                       <span class="map-choose" @click.stop="ranklist=!ranklist">{{isrank}}</span>
                       <div class="area-list" v-show="maplist">
                           <span class="area-item" :class="ismap=='所有行政区'?'active':''" @click="ismap='所有行政区';rankDetail=0;getRank(1,'发卡排行榜','areaAommRank');map(13.5,121.47, 31.23,areaposition,'所有行政区')">所有行政区</span>
                           <span class="area-item"  :class="ismap==item.brName?'active':''" v-for="item in area" :key="item.id" @click="rankDetail=1;isrank='所有排行榜';chooseRankArea(15,item.lng,item.lat,item.brID,item.brName)">{{item.brName}}</span>
                       </div>
                       <div class="rank-list" v-show="ranklist">
                           <span class="rank-item " :class="isrank=='发卡排行榜'?'active':''" @click="getRank(1,'发卡排行榜','areaAommRank')">发卡排行榜</span>
                           <span class="rank-item" :class="isrank=='积分排行榜'?'active':''" @click="getRank(2,'积分排行榜','aresCountRank')">积分排行榜</span>
                           <span class="rank-item" :class="isrank=='覆盖户数排行'?'active':''" @click="getRank(3,'覆盖户数排行','avalidPointRank')">覆盖户数排行</span>
                           <span class="rank-item " v-if="rankDetail" :class="isrank=='所有排行榜'?'active':''" @click="isrank='所有排行榜';getArearescount(1)">所有排行榜</span>
                       </div>
                   </div>
                   <div class="list-table" v-if="!rankDetail">
                       <div>
                            <p class="list-name">{{isrank}}</p>
                        </div>
                       <table>
                            <thead>
                                <tr class="table-title">
                                    <td style="width:10%">排名</td>
                                    <td style="width:40%">地区</td>
                                    <td style="width:30%">总计</td>
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
                    <div class="list-detail-table" v-if="rankDetail">
                        <div v-for="(item,index) in detailrank" :key="index" v-if="index==enrank||isrank=='所有排行榜'">
                            <div>
                                <p class="list-name">{{index=='areaAommRank'?'发卡排行榜':index=='aresCountRank'?'积分排行榜':'覆盖户数排行'}}</p>
                            </div>
                            <table >
                                <thead>
                                    <tr class="table-title">
                                        <td style="width:10%">排名</td>
                                        <td style="width:40%">地区</td>
                                        <td style="width:30%">总计</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-content">
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
                    </div>
                    <div class="more-list">
                        <p class="go-more-list" @click="morerank=true" v-show="!rankDetail">
                            <span>查看更多统计数据</span>
                            <img src="@/assets/icon/activedoright.png" alt="">
                        </p>
                        <p class="list-hint">以下数据统计时间为本日凌晨0:05分</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="map parttwo" ref="allmap" :style="map_scrollmap?' opacity: 0.5;transform: translateY(0)':' opacity: 0;transform: translateY(100px)'">

        </div>
        <div class="map-date">
            <div class="map-date-item" v-for="(item,index) in statedata" :key="index">
                <!-- <p><span class="map-date-count">{{item.number}}</span><span>{{item.unit}}</span></p> -->
                <p><span :ref="index+'Grow'" :data-time="2" :data-value="item.number" class="map-date-count">0</span><span>{{item.unit}}</span></p>
                <p v-if="index=='amoOfAccess'">绿色访问量</p>
                <p v-if="index=='amoOfCard'">发卡数量</p>
                <p v-if="index=='amoOfCover'">覆盖户数</p>
                <p v-if="index=='amoOfInteg'">积分统计</p>
            </div>
        </div>

        <div class="allrank-mask" v-if="morerank">
            <div class="allrank-content">
                <p class="allrank-title"><img src="@/assets/icon/close.png" alt="" class="close-btn" @click="morerank=false"></p>
                <div class="allrank">
                     <div>
                        <p class="allrank-name">{{isrank}}</p>
                    </div>
                    <table>
                        <thead>
                            <tr class="table-title">
                                <td style="width:5%">排名</td>
                                <td style="width:70%">地区</td>
                                <td style="width:20%">总计</td>
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
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import api from "@/api/api.js";
export default {
    data:function(){
        return {
            maplist:false,
            ranklist:false,
            ismap:'所有行政区',
            isrank:'发卡排行榜',
            enrank:'areaAommRank',
            rankDetail:0,
            morerank:false,
            detailrank:{},
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
            ],
            map_scrolltitle:false,
            map_scrollmap:false,
            isnum:false
        }
    },
    mounted:function(){
        this.getStatDate();
        this.getRank(1,'发卡排行榜','areaAommRank');
        this.map(13.5,121.47, 31.23,this.areaposition);
        this.getarea();
         window.addEventListener('scroll',this.mappage)
        document.body.addEventListener('click',()=>{
            this.maplist=false;
            this.ranklist=false;
        })
    },
    destroyed:function(){
         window.removeEventListener('scroll',this.mappage)
    },
    methods:{
        mappage:function(){
            var top=$('.home-map-contain .part-title').offset().top;
            var client=document.documentElement.clientHeight;
            var scroll=document.documentElement.scrollTop || document.body.scrollTop;
            if(top-client-100<=scroll){
                this.map_scrollmap=true;
            }
            if(top-client<=scroll){
                this.map_scrolltitle=true
            }
            if(top-client+800<=scroll){
                this.numberGrow(this.$refs.amoOfAccessGrow,this.statedata.amoOfAccess.number)
                this.numberGrow(this.$refs.amoOfCardGrow,this.statedata.amoOfCard.number)
                this.numberGrow(this.$refs.amoOfCoverGrow,this.statedata.amoOfCover.number)
                this.numberGrow(this.$refs.amoOfIntegGrow,this.statedata.amoOfInteg.number)
                this.isnum=true
            }
        },
        numberGrow:function(ele,number) {
            if(this.isnum){
                return
            }
            let _this = this
            let step = (number * 10) / 800;
            let current = 0
            let start = 0
            let t = setInterval(function () {
                start += step
                if (start > number) {
                clearInterval(t)
                start = number
                t = null
                }
                if (current === start) {
                return
                }
                current = start
                $(ele).html(parseInt(current))
            }, 10)
        },
        getarea:function(){
            api.getarea().then(res =>{
                this.areaTem=res.data;
                this.area=this.areaTem.map((item,index)=>{
                    var config;
                    this.areaposition.forEach((item2,index)=>{
                        if(item.brName==item2.brName){
                            config =  Object.assign(item,item2);                   
                        }
                    });
                    return config
                })
            })
        },
        map:function(mul,lng,lat,points,Name){  
            let map =new BMap.Map(this.$refs.allmap); // 创建Map实例    
            map.clearOverlays();  
            map.centerAndZoom(new BMap.Point(lng,lat), mul);// 初始化地图,设置中心点坐标和地图级别  
            map.addControl(new BMap.MapTypeControl({//添加地图类型控件        
                mapTypes:[          
                    BMAP_NORMAL_MAP,          
                    BMAP_HYBRID_MAP,        
                ],
            }));   
           
            points.forEach((item,index) =>{
                var point = new BMap.Point(item.lng||item.streetOngItude,item.lat||item.streetLatItude);
                var marker = new BMap.Marker(point);
                var content= ''
                map.addOverlay(marker)
                if(item.streetOngItude){
                    this.addClickHandler(item.brName,marker,map)
                } 
            })   
            map.setCurrentCity("上海");// 设置地图显示的城市 此项是必须设置的      
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放  
        },
        addClickHandler:function(content,marker,map){
            marker.addEventListener("click",(e) =>{
                this.openInfo(content,e,map)}
            );
	    },
        openInfo:function(content,e,map){
            var p = e.target;
             var opts = {
				width : 250,     // 信息窗口宽度
				height: 80,     // 信息窗口高度
				title : content , // 信息窗口标题
				enableMessage:true//设置允许信息窗发送短息
			   };
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content+'已开通',opts);  // 创建信息窗口对象 
            map.openInfoWindow(infoWindow,point); //开启信息窗口
        },
        getRank:function(sort,rank,enrank){
            this.isrank=rank;
            this.enrank=enrank;
            if(sort==1){
                api.getArearescount().then(res =>{
                    this.arearescount=res.data;
                })
            }else if(sort==2){
                api.getCounthouse().then(res =>{
                    this.arearescount=res.data;
                })
            }else {
                api.getAreavalidpoint().then(res =>{
                    this.arearescount=res.data;
                })
            }
        },
        getStatDate:function(){
            api.getStatDate().then(res => {
                this.statedata=res.data;
            })
        },
        chooseRankArea:function(mul,lng,lat,id,Name){
            this.ismap=Name;
            api.getPositionInfo({
                data:{
                    districtId:id
                }
            }).then(res =>{
                this.map(mul,lng,lat,res.data)
            });

            api.getcountrank({
                data:{
                    "districtName":Name
                }
            }).then(res =>{
               this.detailrank=res.data;
            })
        }
    }
}
</script>

