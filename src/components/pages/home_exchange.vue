<template>
  <div>
    <img src="@/assets/ex_banner.png" alt="" class="ex_banner">
    <div class="ex_remind">
      <div class="ex_wrap marquee">
        <div><img src="@/assets/ex_icon_remind.png" alt="">
          上海绿色账户平台维护公告 亲爱的市民朋友：上海绿色账户平台维护公告 亲爱的市民朋友：上海绿色账户平台维护公告 亲爱的市民朋友：上海绿色账户平台维护公告 亲爱的市民朋友：上海绿色账户平台维护公告
          亲爱的市民朋友：上海绿色账户平台维护公告 亲爱的市民朋友：上海绿色账户平台维护公告 亲爱的市民朋友：
        </div>
      </div>
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
    <pagination
      :total="pageCount"
      :page-size="pageSize"
      @current-change="pageChange"
      :current-page.sync="pageNow"
      v-show="listData.length !== 0"
    >
    </pagination>
  </div>
</template>
<script>
	import api from "@/api/api.js";
	import {mapGetters} from 'vuex';
	import '@/assets/pages/exchange.css';
	import pagination from '@/components/common/pagination.vue';

	export default {
		data() {
			return {
				listData: [],
				pageCount: 0,
				pageSize: 10,
				pageNow: 1,
			}
		},
		components: {pagination},
		mounted() {
			this.getProductList();
		},
		watch: {
			area(){
				this.getProductList()
			}
		},
		computed: mapGetters({
			area: "area"
		}),
		methods: {
			getProductList() {
				api.getProductList({
					data: {
						prodExchBrid: this.area.id,
						// pageSize: 8,
						// startPage: 5
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
			//分页
			pageChange(pageNow) {
				this.listData(pageNow, this.pageSize);
			},
		}
	}
</script>