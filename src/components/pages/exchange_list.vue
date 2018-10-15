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
      <div class="ex_select_name">类型：<select>
        <option value="quanbu">全部</option>
      </select></div>
      <div class="ex_select_name">热度：<select>
        <option value="quanbu">全部</option>
      </select></div>
      <div class="ex_select_name">上架时间：<select>
        <option value="quanbu">全部</option>
      </select></div>
      <div class="ex_select_name">积分值：<select>
        <option value="quanbu">全部</option>
      </select></div>
      <div class="ex_select_brand" @click="jumpBrand">爱心品牌专区</div>
    </div>
    <div class="ex_wrap">
      <div class="ex_list" @mouseenter.stop="listHover(false,index)" @mouseleave.stop="listHover(true,index)"
           v-for="(items,index) in listData">
        <router-link :to="{path: '/exchange/detail/', query: { id: items.productInfo.id }}">
          <img :src="'https://www.greenfortune.sh.cn/images/' + items.prodPic" alt="" class="ex_list_pic"
               v-if="items.prodPic">
          <img src="@/assets/ex_pic.png" alt="" class="ex_list_pic" v-else>
          <div class="ex_list_name">{{items.prodName}}</div>
          <div class="ex_list_score">{{items.prodPoints}}</div>
          <div class="ex_list_address">
            <img src="@/assets/ex_icon_address.png" alt="" v-if="items.hoverShow">
            <img src="@/assets/ex_icon_address_select.png" alt="" v-else>
            {{items.productInfo.prodReceiveAddress}}领取
          </div>
          <div class="ex_list_time" v-if="items.hoverShow">{{items.productInfo.prodProvider}}提供</div>
          <div class="ex_list_btn" v-else>立即兑换</div>
        </router-link>
      </div>
    </div>
    <pagination></pagination>
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
			}
		},
		components: {pagination},
		mounted() {
			this.getProductList()
		},
		methods: {
			getProductList() {
				api.getProductList({
					data: {
						"prodExchBrid": "310000000000",
					},
				}).then(res => {
					res.data.map(items => {
						items.hoverShow = true
					});
					this.listData = res.data;
				})
			},
			listHover(status, index) {
				this.listData[index].hoverShow = status
			},
			jumpBrand() {
				this.$router.push({
					path: '/exchange/brand'
				})
			},
		}
	}
</script>