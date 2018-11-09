<template>
    <div class="address-contain">
        <table class="address-table">
            <thead>
                <tr class="table-title">
                    <td style="width:10%">姓名</td>
                    <td style="width:45%">地址</td>
                    <td style="width:15%">手机号</td>
                    <td style="width:15%">地址状态</td>
                    <td style="width:15%">操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in addresslist" :key="item.id">
                    <td>{{item.name}}</td>
                    <td>{{item.address}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.addressStatus?'默认':''}}</td>
                    <td>
                        <span class="updata-btn" @click="editHandle(item.id)">编辑</span>
                        <span class="middle-line"></span>
                        <span class="delate-btn" @click="delateHandle(item.id)">删除</span>
                    </td>
                </tr>
            </tbody>
        </table>
         <div class="changepassword-item userInfo-item">
            <button class="changepassword-subbtn userInfo-btn add-btn" @click="isadd=true">新增地址</button>
        </div>
        <div class="address-mask" v-show="isadd">
            <div class="address-content">
                <div>
                    <img src="@/assets/icon/close.png" alt="" class="address-close-btn" @click="isadd=false">
                </div>
                <div class="address-title">
                    <p>配送地址信息</p>
                </div>
                <div class="addaddress">
                    <div class="changepassword-item userInfo-item">
                        <div class="changepassword-itemname userInfo-itemname">
                            <span class="musticon">*</span>
                            <span>姓名:</span>
                        </div>
                        <div class="changepassword-iteminput userInfo-iteminput">
                            <el-input v-model="newaddress.name" @change="nametest"></el-input>
                        </div>
                    </div>
                    <div class="changepassword-item userInfo-item ">
                            <div class="changepassword-itemname userInfo-itemname">
                            <span class="musticon">*</span>
                            <span>地址:</span>
                        </div>
                        <div class="barcode-iteminput userInfo-iteminput">
                            <el-input v-model="newaddress.address" @change="addresstest"></el-input>
                        </div>
                    </div>
                    <div class="changepassword-item userInfo-item">
                            <div class="changepassword-itemname userInfo-itemname">
                            <span class="musticon">*</span>
                            <span>联系方式:</span>
                        </div>
                        <div class="barcode-iteminput userInfo-iteminput">
                            <el-input v-model="newaddress.phone" @change="addphonetest"></el-input>
                        </div>
                    </div>
                    <div class="changepassword-item userInfo-item">
                            <div class="changepassword-itemname userInfo-itemname">
                            <span class="musticon">*</span>
                            <span>邮编:</span>
                        </div>
                        <div class="barcode-iteminput userInfo-iteminput">
                            <el-input v-model="newaddress.zipCode" @change="zipcodetest"></el-input>
                        </div>
                    </div>
                    <div class="changepassword-item userInfo-item">
                            <div class="changepassword-itemname userInfo-itemname">
                            <span>设为默认地址:</span>
                        </div>
                        <div class="barcode-iteminput userInfo-select" @click="setDefault">
                            <div class="defaultbtn" :class="{default:newaddress.defaultAddress}">
                                <img src="@/assets/icon/yesbtn.png" alt="" v-show="newaddress.defaultAddress">                          
                            </div>
                        </div>
                    </div>
                    <div class="changepassword-item userInfo-item">
                        <button class="changepassword-subbtn userInfo-btn" @click="addaddressHandle">确认</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="address-mask" v-show="isedit">
            <div class="address-content">
                <div>
                    <img src="@/assets/icon/close.png" alt="" class="address-close-btn" @click="isedit=false">
                </div>
                <div class="address-title">
                    <p>配送地址信息</p>
                </div>
                <div class="addaddress">
                    <div class="changepassword-item userInfo-item">
                        <div class="changepassword-itemname userInfo-itemname">
                            <span class="musticon">*</span>
                            <span>姓名:</span>
                        </div>
                        <div class="changepassword-iteminput userInfo-iteminput">
                            <el-input v-model="editaddress.name" @change="nametest"></el-input>
                        </div>
                    </div>
                    <div class="changepassword-item userInfo-item ">
                            <div class="changepassword-itemname userInfo-itemname">
                            <span class="musticon">*</span>
                            <span>地址:</span>
                        </div>
                        <div class="barcode-iteminput userInfo-iteminput">
                            <el-input v-model="editaddress.address" @change="addresstest"></el-input>
                        </div>
                    </div>
                    <div class="changepassword-item userInfo-item">
                            <div class="changepassword-itemname userInfo-itemname">
                            <span class="musticon">*</span>
                            <span>联系方式:</span>
                        </div>
                        <div class="barcode-iteminput userInfo-iteminput">
                            <el-input v-model="editaddress.phone" @change="editphonetest"></el-input>
                        </div>
                    </div>
                    <div class="changepassword-item userInfo-item">
                            <div class="changepassword-itemname userInfo-itemname">
                            <span class="musticon">*</span>
                            <span>邮编:</span>
                        </div>
                        <div class="barcode-iteminput userInfo-iteminput">
                            <el-input v-model="editaddress.zipCode" @change="zipcodetest"></el-input>
                        </div>
                    </div>
                    <div class="changepassword-item userInfo-item">
                            <div class="changepassword-itemname userInfo-itemname">
                            <span>设为默认地址:</span>
                        </div>
                        <div class="barcode-iteminput userInfo-select" @click="editDefault">
                            <div class="defaultbtn" :class="{default:editaddress.status}">
                                <img src="@/assets/icon/yesbtn.png" alt="" v-show="editaddress.status">                          
                            </div>
                        </div>
                    </div>
                    <div class="changepassword-item userInfo-item" >
                        <button class="changepassword-subbtn userInfo-btn" @click="editaddressHandle">修改</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
export default {
    data:function(){
        return {
            isdefault:false,
            isadd:false,
            isedit:false,
            addresslist:[],
            editId:'',
            newaddress:{
                name:"",
                phone:"",
                address:"",
                zipCode:"",
                defaultAddress:0
            },
            editaddress:{
                name:"",
                phone:"",
                address:"",
                zipCode:"",
                status:0
            }   
        }
    },
    computed: mapGetters({
        token:"token",
    }),
    mounted(){
       this.getuserAddress();
    },
    methods:{
        nametest(){
            var nametest=/^[\u4e00-\u9fa5\w-]{2,20}$/
            if((!nametest.test(this.newaddress.name)&&this.newaddress.name!='')||(!nametest.test(this.editaddress.name)&&this.editaddress.name!='')){
                alert('请填写2-20字符的联系人姓名');
                this.newaddress.name=''
                this.editaddress.name=''
            }
        },
        addresstest(){
            var addresstest=/^[\u4e00-\u9fa5\w-]{10,120}$/
             if((!addresstest.test(this.newaddress.address)&&this.newaddress.address!='')||(!addresstest.test(this.editaddress.address)&&this.editaddress.address!='')){
                alert('请填写10-120字符的地址');
                this.newaddress.address=''
                this.editaddress.address=''
            }
        },
        zipcodetest(){
            var zipcodetest=/[1-9]d{5}(?!d)/
             if((!zipcodetest.test(this.newaddress.zipCode)&&this.newaddress.zipCode!='')||(!zipcodetest.test(this.editaddress.zipCode)&&this.editaddress.zipCode!='')){
                alert('请填写正确的邮编');
                this.newaddress.zipCode=''
                this.editaddress.zipCode=''
            }
        },
        setDefault(){
            this.newaddress.defaultAddress=!this.newaddress.defaultAddress;
            if(this.newaddress.defaultAddress){
                this.newaddress.defaultAddress=1
            }else this.newaddress.defaultAddress=0
        },
        getuserAddress(){
             api.getuserAddress({
                "token":this.token
            }).then(res =>{
                this.addresslist=res.data.address
            })
        },
        addphonetest(){
             var tel = /^1[3456789]\d{9}$/;
            if(!tel.test(this.newaddress.phone)&&this.newaddress.phone!=''){
                alert('请输入设置正确的手机号格式')
                this.newaddress.phone=''
            }
        },
        editphonetest(){
             var tel = /^1[3456789]\d{9}$/;
            if(!tel.test(this.editaddress.phone)&&this.editaddress.phone!=''){
                alert('请输入设置正确的手机号格式')
                this.editaddress.phone=''
            }
        },
        addaddressHandle(){
            if(this.newaddress.name==''){
                alert('姓名不能为空');
                return
            }
            if(this.newaddress.address==''){
                alert('地址不能为空');
                return
            }
            if(this.newaddress.phone==''){
                alert('手机号不能为空');
                return
            }
            if(this.newaddress.zipCode==''){
                alert('邮编号不能为空');
                return
            }
            if(this.newaddress.status==''){
                alert('默认状态不能为空');
                return
            }
            api.addAddress({
                data:this.newaddress,
                "token":this.token
            }).then(res => {
               if(res.data.msg){
                   this.isadd=false;
                   this.getuserAddress();
                   this.newaddress.name='';
                   this.newaddress.phone=''
                   this.newaddress.address=''
                   this.newaddress.zipCode=''
                   this.newaddress.defaultAddress=0;              
               }
            })
        },
        editDefault(){
            this.editaddress.status=!this.editaddress.status;
           if(this.editaddress.status){
                this.editaddress.status=1
            }else this.editaddress.status=0
        },
        editaddressHandle(){
            if(this.editaddress.name==''){
                alert('姓名不能为空');
                return
            }
            if(this.editaddress.phone==''){
                alert('手机号不能为空');
                return
            }
            if(this.editaddress.address==''){
                alert('地址不能为空');
                return
            }
            if(this.editaddress.zipCode==''){
                alert('邮编号不能为空');
                return
            }
            if(this.editaddress.status==''){
                alert('默认状态不能为空');
                return
            }
            api.modifyAddress({
               data:{
                    id:this.editId,
                    name:this.editaddress.name,
                    phone:this.editaddress.phone,
                    address:this.editaddress.address,
                    zipCode:this.editaddress.zipCode,
                    status:this.editaddress.status
                },
                "token":this.token
            }).then(res =>{
                if(res.msg=='token不能为空'||res.msg=='token已失效'){
                    alert('请重新登录');
                        this.$router.push({
                        path:'/login'
                    })
                }
                if(res.msg=='操作成功！'){
                    if(res.data.msg){
                        this.getuserAddress();
                        this.isedit=false;
                    }
                }
                
                       
            })
        },
        editHandle(addressid){
            this.editId=addressid
            api.getaddressDetail({
                data:{
                    id:addressid
                },
                "token":this.token
            }).then(res => {
                this.editaddress.name=res.data.name;
                this.editaddress.address=res.data.address;
                this.editaddress.phone=res.data.phone;
                this.editaddress.defaultAddress=res.data.addressStatus;
                this.editaddress.zipCode=res.data.zipcode;
                this.editaddress.status=res.data.addressStatus
                this.isedit=true;
            })
        },
        delateHandle(addressid){
            api.deleteAddress({
                data:{
                    id:addressid
                },
                "token":this.token
            }).then(res => {
                if(res.msg=='token不能为空'||res.msg=='token已失效'){
                    alert('请重新登录');
                        this.$router.push({
                        path:'/login'
                    })
                }
                if(res.msg=='操作成功！'){
                     if(res.data.msg){
                        this.isadd=false;
                       alert(res.data.msg)
                        this.getuserAddress();              
                    }
                }
            })
        }
    }
}
</script>

