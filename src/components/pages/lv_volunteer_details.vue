<template>
  <div class="lv_wrap">
    <div class="lv_volunteer_bread">您的位置：绿互动 > 志愿者活动 > <span>志愿者活动详情</span></div>
    <div class="lv_volunteer_details_head">
      {{listData.pubAct ? listData.pubAct.actName : ''}}
      <img src="@/assets/lv_icon_zan.png" alt="" class="lv_volunteer_details_zan"
           @mouseenter.stop="listHover(false)" @mouseleave.stop="listHover(true)" v-show="hoverShow && !zanShow">
      <img src="@/assets/lv_icon_zanhover.png" alt="" class="lv_volunteer_details_zan"
           @mouseenter.stop="listHover(false)" @mouseleave.stop="listHover(true)" @click.once="addAdmire"
           v-show="!hoverShow || zanShow">
      {{adminreNum}}
    </div>

    <div class="lv_volunteer_details_enlist" @click="openBox" v-show="listData.actStatus == '6'">我要报名</div>
    <div class="lv_volunteer_details_enlist active" v-show="listData.actStatus == '4'">活动已结束</div>
    <div class="lv_volunteer_details_enlist active" v-show="listData.actStatus == '2'">活动进行中</div>
    <div class="lv_volunteer_details_enlist active" v-show="listData.actStatus == '0'">活动未开始</div>

    <div class="lv_volunteer_details_tab">
      <div class="title">基本信息 <span class="title-line"></span></div>
      
      <div class="content-left">
        <div class="content">
          <div class="left">活动组织方名称：</div>
          <div class="right">{{listData.pubWelOrgName}}</div>
        </div>
        <div class="content">
          <div class="left">报名时间：</div>
          <div class="right">
            {{listData.pubAct ? listData.pubAct.registStartTime : '' | moment}} 至 {{listData.pubAct ?
            listData.pubAct.registEndTime : '' | moment}}
          </div>
        </div>
        <div class="content">
          <div class="left">活动时间：</div>
          <div class="right">
            {{listData.pubAct ? listData.pubAct.actStartTime : '' | moment}} 至 {{listData.pubAct ?
            listData.pubAct.actEndTime : '' | moment}}
          </div>
        </div>
        <div class="content">
          <div class="left">服务时间：</div>
          <div class="right">{{listData.pubAct ? listData.pubAct.serviceTime : ''}}</div>
        </div>
      </div>
      <div class="content-right">
        <div class="content">
          <div class="left">联系人姓名：</div>
          <div class="right">{{listData.pubAct ? listData.pubAct.actLinkName : ''}}</div>
        </div>
        <div class="content">
          <div class="left">联系人电话：</div>
          <div class="right">{{listData.pubAct ? listData.pubAct.actLinkTel : ''}}</div>
        </div>
        <div class="content">
          <div class="left">招募人数：</div>
          <div class="right">{{listData.pubAct ? listData.pubAct.actRecruitment : ''}}</div>
        </div>
        <div class="content">
          <div class="left">活动详细地址：</div>
          <div class="right">{{listData.pubAct ? listData.pubAct.actFullAddress : ''}}</div>
        </div>
      </div>
      
    </div>

    <div class="lv_volunteer_details_tab">
      <div class="title">详细信息 <span class="title-line"></span></div>
      <div class="content">
        <div class="left">活动内容：</div>
        <div class="right" v-html="listData.pubAct?listData.pubAct.actContent:''"></div>
      </div>
    </div>

    <div class="lv_volunteer_details_tab">
      <div class="title">招募信息</div>
      <div class="content content_list">
        <div class="left">报名列表：</div>
        <div class="right">
          <div v-for="(items) in listVolData">
            <span class="name">{{items[0]}}</span>
            <span class="tel">{{items[1]}}</span>
            <span class="date">{{items[2]}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
    <div class="lv_volunteer_shadow" v-if="showShadow"></div>
    <!-- 取消理由弹窗 -->
    <div class="lv_volunteer_shadow_box" v-if="showBox">
      <img src="@/assets/lv_v_icon_close.png" alt="" class="lv_volunteer_icon_close" @click="closeBox">
      <div class="title">请填写报名信息</div>
      <div class="rules">
        <div class="name">姓名:</div>
        <input type="text" placeholder="请输入姓名" v-model="form.name">
      </div>
      <div class="rules">
        <div class="name">手机号:</div>
        <input type="text" placeholder="请输入手机号" v-model="form.tel">
      </div>
      <div class="rules_btn" @click="saveData">报名</div>
    </div>

  </div>
</template>
<script>
  import api from "@/api/api.js";
  import '@/assets/pages/lv_volunteer.css';
  import '@/assets/pages/apply.css';

  export default {
    data:function() {
      return {
        id: this.$route.query.id,
        showShadow: false,
        showBox: false,
        hoverShow: true,
        form: {
          name: '',
          tel: '',
        },
        listData: {},
        listVolData: [],
        adminreNum: '',
        zanShow: false
      }
    },
    mounted:function() {
      this.pubDetailById();
    },
    methods: {
      pubDetailById:function() {
        api.pubDetailById({
          data: {
            id: this.id,
            pageSize: 1000,
          },
        }).then(res => {
          this.listData = res.data;
          this.adminreNum = res.data.adminreNum;
          this.listVolData = res.data.volPage.content;
        })
      },
      addAdmire:function() {
        api.addAdmire({
          data: {
            id: this.id,
          },
        }).then(res => {
          this.zanShow = true;
          this.adminreNum = res.data.adminreNum;
        })
      },
      listHover:function(status) {
        this.hoverShow = status;
      },
      openBox:function() {
        this.showShadow = true;
        this.showBox = true;
        document.querySelector('body').style.overflow = 'hidden';
      },
      closeBox:function() {
        this.showShadow = false;
        this.showBox = false;
        document.querySelector('body').style.overflow = 'auto';
      },
      saveData:function() {
        //为空验证
        if (this.form.name == '' | this.form.tel == '') {
          alert('联系人或手机号不能为空');
          return;
        }
        //手机正则
        let rs = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/;
        let resultTel = rs.test(this.form.tel);
        if (!resultTel) {
          alert('手机号格式不正确');
          return;
        }
        api.addVolunteer({
          "data": {
            id: this.id,
            volunteerName: this.form.name,
            volunteerTel: this.form.tel,
          },
        }).then((res) => {
          if (res.code === "0") {
            this.closeBox();
            this.pubDetailById();
          } else {
            alert(res.msg);
          }
        }).catch((error) => {
          console.log(error);
        })
      },
    }
  }
</script>