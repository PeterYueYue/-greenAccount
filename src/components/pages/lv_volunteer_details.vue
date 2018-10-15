<template>
  <div class="lv_wrap">
    <div class="lv_volunteer_bread">您的位置：绿互动 > 志愿者活动 > <span>志愿者活动详情</span></div>
    <div class="lv_volunteer_details_head">
      上海市第二康复医院志愿者活动
      <img src="@/assets/lv_icon_zan.png" alt="" class="lv_volunteer_details_zan"
           @mouseenter.stop="listHover(false)" @mouseleave.stop="listHover(true)" v-if="hoverShow">
      <img src="@/assets/lv_icon_zanhover.png" alt="" class="lv_volunteer_details_zan"
           @mouseenter.stop="listHover(false)" @mouseleave.stop="listHover(true)" v-else>
      120
    </div>

    <div class="lv_volunteer_details_enlist" @click="openBox">我要报名</div>
    <!--<div class="lv_volunteer_details_enlist active">活动已结束</div>-->

    <div class="lv_volunteer_details_tab">
      <div class="title">基本信息</div>
      <div class="content">
        <div class="left">活动组织方名称：</div>
        <div class="right">上海市第二康复医院</div>
      </div>
      <div class="content">
        <div class="left">报名时间：</div>
        <div class="right">2018-08-27至2018-08-30</div>
      </div>
      <div class="content">
        <div class="left">活动时间：</div>
        <div class="right">2018-09-02至2018-09-11</div>
      </div>
      <div class="content">
        <div class="left">服务时间：</div>
        <div class="right">09:00-16:00</div>
      </div>
      <div class="content">
        <div class="left">联系人姓名：</div>
        <div class="right">陈妍</div>
      </div>
      <div class="content">
        <div class="left">联系人电话：</div>
        <div class="right">18917650521</div>
      </div>
      <div class="content">
        <div class="left">招募人数：</div>
        <div class="right">10</div>
      </div>
      <div class="content">
        <div class="left">活动详细地址：</div>
        <div class="right">宝山区长江路860弄25号</div>
      </div>
    </div>

    <div class="lv_volunteer_details_tab">
      <div class="title">详细信息</div>
      <div class="content">
        <div class="left">活动内容：</div>
        <div class="right">
          <div>1、用轮椅推送康复病人到康复区域进行康复治疗，期间需要协助康复治疗师做好各类安全保护工作</div>
          <div>2、与康复病人愉快交流，注意不要过问患者私事</div>
          <div>3、星期六上午9:00-11:00：参与言语小组康复治疗师与康复患者的互动活动，如唱歌、主持、猜谜、自我介绍、吹蜡烛等</div>
          <div>4、所有活动欢迎企事业单位、中小学生志愿者参与，活动精彩哦</div>
        </div>
      </div>
    </div>

    <div class="lv_volunteer_details_tab">
      <div class="title">招募信息</div>
      <div class="content">
        <div class="left">报名列表：</div>
        <div class="right">
          <div><span class="name">程程程</span><span>15121063155</span><span>2018-08-30 11:53:43</span></div>
          <div><span class="name">程程</span><span>15121063155</span><span>2018-08-30 11:53:43</span></div>
          <div><span class="name">程程</span><span>15121063155</span><span>2018-08-30 11:53:43</span></div>
          <div><span class="name">程程</span><span>15121063155</span><span>2018-08-30 11:53:43</span></div>
          <div><span class="name">程程</span><span>15121063155</span><span>2018-08-30 11:53:43</span></div>
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
  import '@/assets/pages/lv_volunteer.css';
  import '@/assets/pages/apply.css';

  export default {
    data() {
      return {
        showShadow: false,
        showBox: false,
        hoverShow: true,
        form: {
          name: '',
          tel: '',
        },
      }
    },
    methods: {
      listHover(status) {
        this.hoverShow = status;
      },
      openBox() {
        this.showShadow = true;
        this.showBox = true;
        document.querySelector('body').style.overflow = 'hidden';
      },
      closeBox() {
        this.showShadow = false;
        this.showBox = false;
        document.querySelector('body').style.overflow = 'auto';
      },
      saveData() {
        this.showShadow = false;
        this.showBox = false;
        document.querySelector('body').style.overflow = 'auto';
        //联系人正则
        let rn = /^[\u4E00-\u9FA5A-Za-z]+$/;
        let resultName = rn.test(this.form.name);
        if (!resultName) {
          // this.showShadow = true;
          // this.showBox = true;
          // this.form.name = '';
          return;
        }
        //手机正则
        let rs = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/;
        let resultTel = rs.test(this.form.tel);
        if (!resultTel) {
          // this.showShadow = true;
          // this.showBox = true;
          // this.form.tel = '';
          return;
        }
        api.SaveMemberAddress({
          "data": {
            "name": this.form.name,
            "tel": this.form.tel,
          },
        }).then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error);
        })
      },
    }
  }
</script>