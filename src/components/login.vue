<template>
  <div class="login-contain">
    <div class="loginlogo">
			<router-link to="/">
				<img src="@/assets/smalllogo.png" alt="">
			</router-link>
    </div>
		
		<div class="login-form-mian">
			<div class="login-background"> 
				
    		</div>
			<img src="@/assets/loginbackground-write.png" alt="" class="background-write">		
			<form class="login-form">
				<div class="form-title">
					欢迎登录绿色账户
				</div>
				<div class="form-item">
					<span class="form-item-name">绿账卡号：</span>
					<el-input v-model="account" placeholder="请输入绿账卡号/手机号" width="410"></el-input>
				</div>
				<div class="form-item">
					<span class="form-item-name">密码：</span>
					<el-input v-model="pwd" placeholder="请输入密码" type="password"></el-input>
				</div>
				<div class="form-item">
					<span class="form-item-name">验证码：</span>
					<el-input v-model="yzm" placeholder="请输入验证码" class="yanzhengma"></el-input>
					<img src="" alt="" ref="yanzhengma" style="width:117px;height:44px;" class="yzm-img" @click="getpcrimg">
				</div>
				<div class="form-item login">
					<button @click.prevent="login" class="submit-btn">登录</button>
				</div>
				<p class="tool">
					温馨提示：登录初始密码，套卡为身份证后6位单独卡密码为"111111"
				</p>
			</form>
		</div>
    <div class="footer-copyright">
				<p>
					<span>COPYRIGHT 2014-2019 SHANGHAI HUIZHONG GREEN C.S.R</span>&#x3000;
					<span>上海惠众绿色公益发展促进中心 版权所有 2014-2019</span>
				</p>
				 <p>
					<span>
					<a href="http://www.miibeian.gov.cn/" target="view_window">沪ICP 15028111号-1 </a></span>&#x3000;
					<span>
					<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502000208" target="view_window"><img
						src="@/assets/icon_security.png" alt="" class="app_security"> 沪公网安备 310105020000208</a>
					
					</span>
				</p>
			</div>
  </div>
</template>
<script>
	import api from "@/api/api.js";
	import '@/assets/pages/login.css'
	export default {
		data:function(){
			return {
				account: '',
				pwd: '',
				yzm: '',
				uuId: ''
			}
		},
		mounted(){
			this.getpcrimg();
			this.$store.dispatch('getPage', 1);
		},
		destroyed(){
				this.$store.dispatch('getPage', 0);
		},
		methods: {
			login(){
				api.userlogin({
					data: {
						account: this.account,
						pwd: this.pwd,
						yzm: this.yzm,
						uuId: this.uuId,
					}
				}).then(res => {
					if (res.data.msg) {
						alert(res.data.msg);
						this.getpcrimg();
					} else {
						res.data.islogin = true;
						console.log(res)
						this.$store.dispatch('getToken', res.data);
            			this.$store.dispatch('getResUuid', res.data);
						this.$store.dispatch('getapproveStatus', res.data);
						this.$store.dispatch('getusercode', this.account);


						 window.sessionStorage.setItem("token", res.data.token);
						 window.sessionStorage.setItem("username", res.data.userName);
						 window.sessionStorage.setItem("resUuid", res.data.resUuid);
						 window.sessionStorage.setItem("approveStatus", res.data.approveStatus);
						 window.sessionStorage.setItem("usercode", this.account);

						let backUrl = this.$route.query.backUrl;
						if (backUrl) {
							this.$router.push({
								path: '/' + backUrl
							});
						} else {
							this.$router.push({
								path: '/lvzx',
							})
						}

					}
				})
			},
			getpcrimg(){
				api.pcrimg().then(res => {
					this.$refs.yanzhengma.setAttribute('src', 'data:image/png;base64,' + res.data.pcrImg);
					this.uuId = res.data.uuid;
					this.yzm = ''
				})
			}
		}

	}
</script>

