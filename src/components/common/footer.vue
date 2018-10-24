<template>
    <div class="footer-contain">
        <div class="footer-background" style="background-image: url('@/assets/bottomback.png');"> 
        </div>
        <div class="footer-top">
            <div class="footer-top-part">
                <p class="part-name">
                    绿色账户主管单位
                </p>
                <div>
                    <img src="@/assets/greenshanghai.png" alt="">
                </div>
            </div>
            <div class="footer-top-part">
                <p class="part-name">
                    绿色账户支持单位
                </p>
                <div>
                    <div class="company-icon">
                        <img src="@/assets/shanghaitoucheng.png" alt="">
                    </div>
                    <div class="company-icon">
                        <img src="@/assets/chinabank.png" alt="">
                    </div>
                    <div class="company-icon">
                        <img src="@/assets/zhifubao.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-bottom-part left">
                <p class="part-title">
                    惠众绿色理事单位
                </p>
                <p><a href="">上海市废弃物管理处</a></p>
                <p><a href="">上海老港固废综合开发有限公司</a></p>
                <p><a href="">中国银行上海分行</a></p>
                <p><a href="">上海环境实业有限公司</a></p>
                <p><a href="">上海森蓝环境资源有限公司</a></p>
                <p><a href="">上海程胜环保科技有限公司</a></p>
                <p><a href="">支付宝（中国）网络技术有限公司</a></p>
            </div>
            <div class="footer-bottom-part middle">
                <p class="part-title">
                    绿色账户爱心单位
                </p>
                <p><a href="">上海聚力传媒技术有限公司</a></p>
                <p><a href="">上海东方希杰商务有限公司</a></p>
                <p><a href="">光明乳业股份有限公司</a></p>
                <router-link to="/apply_company">
                    <div class="footer-btn first">
                        申请加入
                    </div>
                </router-link>
            </div>
            <div class="footer-bottom-part middle">
                <p class="part-title">
                    绿色账户运营单位
                </p>
                <p><a href="">上海惠众绿色公益发展促进中心 </a></p>
                <div class="footer-btn first">
                    帮助中心
                </div>
            </div>
            <div class="footer-bottom-part middle">
                <p class="part-title">
                    公益机构单位
                </p>
                <p><a href="">上海挺之军科技有限公司</a></p>
                <p><a href="">上海铸乾信息科技有限公司</a></p>
                <div class="footer-btn first">
                    登录
                </div>
                <div class="footer-btn">
                    申请加入
                </div>
            </div>
            <div class="footer-bottom-part right">
                <p class="part-title">
                    联系我们
                </p>
                <p><a>上海市普陀区宜昌路130号梦清园水天居</a></p>
                <p><a>021-62126699</a> </p>
                <p><a>service@greenfortune.sh.cn</a></p>
            </div>
        </div>
        <div class="footer-code">
            <div class="footer-code-part left">
                <img src="@/assets/wechat.png" alt="">
                <p>
                    绿色账户微信请扫描关注
                </p>
            </div>
            <div class="footer-code-part middle">
                <img src="@/assets/paycode.png" alt="">
                <p>
                    绿色账户支付端
                </p>
            </div>
            <div class="footer-code-part middle">
                <img src="@/assets/shimin.png" alt="">
                <p>
                    市民版绿色账户APP
                </p>
            </div>
            <div class="footer-code-part middle">
                <img src="@/assets/cleaner.png" alt="">
                <p>
                    保洁员版绿色账户APP
                </p>
            </div>
            <div class="footer-code-part right">
                <img src="@/assets/admin.png" alt="">
                <p>
                    管理员版绿色账户APP
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import './footer.css'
export default {
    
}
</script>
