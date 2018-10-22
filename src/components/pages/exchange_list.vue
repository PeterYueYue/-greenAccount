<template>
  <div>
    <div class="ex_wrap ex_area">
      <div class="ex_area_name">所在区域：</div>
      <ul>
        <li class="active">全市</li>
        <li>徐汇区</li>
        <li>长宁区</li>
        <li>普陀区</li>
        <li>静安北</li>
        <li>虹口区</li>
        <li>闵行区</li>
        <li>宝山区</li>
        <li>嘉定区</li>
        <li>浦东新区</li>
        <li>金山区</li>
        <li>青浦区</li>
        <li>奉贤区</li>
        <li>崇明区</li>
        <li>杨浦区</li>
        <li>黄浦区</li>
        <li>静安区</li>
        <li>松江区</li>
      </ul>
    </div>
    <div class="ex_wrap ex_select">
      <div class="ex_select_name">类型：
        <select name="" v-model="selectType" @change="getType">
          <option value="">请选择类型</option>
          <option :value="{id:items.id,name:items.mallInfo}" v-for="(items,index) in typeList"
                  :key="index">
            {{items.name}}
          </option>
        </select>
      </div>
      <div class="ex_select_name">热度：
        <select name="" v-model="selectHot" @change="getType">
          <option value="">请选择热度</option>
          <option :value="{id:items.id,name:items.name}" v-for="(items,index) in hotList"
                  :key="index">
            {{items.name}}
          </option>
        </select>
      </div>
      <div class="ex_select_name">上架时间：
        <select name="" v-model="selectDate" @change="getType">
          <option value="">请选择上架时间</option>
          <option :value="{id:items.id,name:items.name}" v-for="(items,index) in dateList"
                  :key="index">
            {{items.name}}
          </option>
        </select>
      </div>
      <div class="ex_select_name">积分值：
        <select name="" v-model="selectScore" @change="getType">
          <option value="">请选择积分值</option>
          <option :value="{id:items.id,name:items.name}" v-for="(items,index) in scoreList"
                  :key="index">
            {{items.name}}
          </option>
        </select>
      </div>
      <div class="ex_select_brand" @click="jumpBrand">爱心品牌专区</div>
    </div>
    <div class="ex_wrap">
      <div class="ex_list" @mouseenter.stop="listHover(false,index)" @mouseleave.stop="listHover(true,index)"
           v-for="(items,index) in listData" v-show="listData.length !== 0">
        <router-link :to="{path: '/exchange/detail/', query: { id: items.productInfo.id }}">
          <img :src="'https://www.greenfortune.sh.cn/images/' + items.prodPic" alt="" class="ex_list_pic"
               v-if="items.prodPic">
          <img src="@/assets/ex_pic.png" alt="" class="ex_list_pic" v-else>
          <div class="ex_list_name">{{items.prodName}}</div>
          <div class="ex_list_score">{{items.prodPoints}}积分</div>
          <div class="ex_list_address">
            <img src="@/assets/ex_icon_address.png" alt="" v-if="items.hoverShow">
            <img src="@/assets/ex_icon_address_select.png" alt="" v-else>
            {{items.productInfo.prodReceiveAddress}}领取
          </div>
          <div class="ex_list_time" v-if="items.hoverShow">{{items.productInfo.prodProvider}}提供</div>
          <div class="ex_list_btn" v-else>立即兑换</div>
        </router-link>
      </div>
      <div class="ex_nodata" v-show="listData.length == 0">暂无数据</div>
    </div>
    <pagination v-show="listData.length !== 0"></pagination>
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import '@/assets/pages/exchange.css';
  import pagination from '@/components/common/pagination.vue';

  export default {
    name: 'exchangeList',
    data() {
      return {
        listData: [],
        selectType: '',
        selectHot: '',
        selectDate: '',
        selectScore: '',
        typeList: [{
          id: '',
          name: '全部',
        }, {
          id: '01',
          name: '服务类',
        }, {
          id: '02',
          name: '实物类',
        }, {
          id: '03',
          name: '抽奖类',
        }, {
          id: '04',
          name: '荣誉类',
        }, {
          id: '05',
          name: '公益类',
        }, {
          id: '06',
          name: '权益类',
        }, {
          id: '08',
          name: '购物节',
        }, {
          id: '09',
          name: '门票类',
        }],
        hotList: [{
          id: '-1',
          name: '全部',
        }, {
          id: '1',
          name: '升',
        }, {
          id: '2',
          name: '降',
        }],
        dateList: [{
          id: '-1',
          name: '全部',
        }, {
          id: '1',
          name: '上架时间升序',
        }, {
          id: '2',
          name: '上架时间降序',
        }],
        scoreList: [{
          id: '-1',
          name: '全部',
        }, {
          id: '1',
          name: '0-500',
        }, {
          id: '2',
          name: '501-1000',
        }, {
          id: '3',
          name: '1001-1500',
        }, {
          id: '4',
          name: '1501-2000',
        }, {
          id: '5',
          name: '2000以上',
        }],
      }
    },
    components: {pagination},
    mounted() {
      this.getProductList();
    },
    methods: {
      getType() {
        this.getProductList();
      },
      getProductList() {
        api.getProductList({
          data: {
            "prodExchBrid": "310000000000",
            "prodType": this.selectType ? this.selectType.id : '',
            "hotExchange": this.selectHot ? this.selectHot.id : '',
            "productPoints": this.selectScore ? this.selectScore.id : '',
            "createDate": this.selectDate ? this.selectDate.id : '',
          },
        }).then(res => {
          res.data.map(items => {
            items.hoverShow = true;
          });
          this.listData = res.data;
        })
      },
      listHover(status, index) {
        this.listData[index].hoverShow = status;
      },
      jumpBrand() {
        this.$router.push({
          path: '/exchange/brand'
        })
      },
    }
  }
</script>