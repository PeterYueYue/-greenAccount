<template>
  <div class="lv_wrap">
    <div class="lv_bd_bread">您的位置：绿互动 > <span>中行专区</span></div>
    <ul class="lv_bd_tab">
      <li class="active">全部</li>
      <li>套卡升级(申请）</li>
      <li>绿色72色</li>
      <li>线下活动</li>
    </ul>
    <div class="lv_bd_notice" v-for="(items,index) in listData" @mouseenter.stop="listHover(true,index)"
         @mouseleave.stop="listHover(false,index)">
      <div class="lv_bd_notice_title active" v-if="items.hoverShow">{{items.title}}<span class="date"><span>{{items
        .time}}</span><br/>{{items.year}}</span></div>
      <div class="lv_bd_notice_title" v-else>{{items.title}}<span class="date">{{items.date}}</span></div>
      <div class="lv_bd_notice_text active" v-if="items.hoverShow">{{items.text}}</div>
      <div class="lv_bd_notice_text" v-else>{{items.text}}</div>
      <img src="@/assets/lvz_icon_arrow.png" alt="" class="lv_bd_arrow" v-if="items.hoverShow">
    </div>
    <pagination></pagination>
  </div>
</template>
<script>
	import '@/assets/pages/lvzhanghu.css';
	import pagination from '@/components/common/pagination.vue';

	export default {
		data() {
			return {
				listData: [{
					title: '绿色变知识',
					date: '2018-08-22',
          year: '2018-08',
          time: '31',
					text: '新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内',
          hoverShow: false
        },{
					title: '绿色变知识',
					date: '2018-08-22',
          year: '2018-08',
          time: '31',
					text: '新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内',
          hoverShow: false
        },{
					title: '绿色变知识',
					date: '2018-08-22',
          year: '2018-08',
          time: '22',
					text: '新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内',
          hoverShow: false
        },{
					title: '绿色变知识',
					date: '2018-08-22',
          year: '2018-08',
          time: '31',
					text: '新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻标题新闻标题新闻标题新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内',
          hoverShow: false
        }]
			}
		},
		components: {pagination},
		methods: {
      listHover(status, index) {
        this.listData[index].hoverShow = status
      },
    }
	}
</script>