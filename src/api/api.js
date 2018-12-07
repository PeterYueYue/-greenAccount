import axios from 'axios';
// 正式
// let base = 'https://www.greenfortune.sh.cn';
// let base = '/green'
// let base = 'http://10.100.3.51:8080';
// 测试
// let base = 'http://180.153.19.162:8081';
// 张强
let base = 'http://192.168.1.133:8080';

const configarea = {
  "version": "1.0",
  "name": "district",
};
const configproductlist = {
  "version": "1.0",
  "name": "getProductList",
};
const configgetNewinfobyStyleforuser = {
  "version": "1.0",
  "name": "getNewInfoByStyleForUser",
};
const configactnotice = {
  "version": "1.0",
  "name": "actnotice",
};
const configdoninteglist = {
  "version": "1.0",
  "name": "doninteglist5",
};
const configarearescount = {
  "version": "1.0",
  "name": "arearescount9",
};
const configcounthouse = {
  "version": "1.0",
  "name": "counthouse9",
};
const configareavalidpoint = {
  "version": "1.0",
  "name": "areavalidpoint9",
};
const configstatdate = {
  "version": "1.0",
  "name": "statdate",
};
const configPositionInfo = {
  "version": "1.0",
  "name": "getPositionInfo",
}
const configcountrank = {
  "version": "1.0",
  "name": "3countrank",
}
const configcaringUnitSubmit = {
  "version": "1.0",
  "name": "caringUnit.submit",
};
const configpcrimg = {
  "version": "1.0",
  "name": "pcrimg",
};
const configgetProductDetail = {
  "version": "1.0",
  "name": "getProductDetail",
};
const configgetMallLogoList = {
  "version": "1.0",
  "name": "getMallLogoList",
};
const configgetMallProductList = {
  "version": "1.0",
  "name": "getMallProductList",
};
const configaddAdmire = {
  "version": "1.0",
  "name": "addAdmire",
};
const configpubActList = {
  "version": "1.0",
  "name": "pubActList",
};
const configpubDetailById = {
  "version": "1.0",
  "name": "pubDetailById",
};
const configaddVolunteer = {
  "version": "1.0",
  "name": "addVolunteer",
};
const configallList4NewStyle = {
  "version": "1.0",
  "name": "allList4NewStyle",
};
const configlookNewsDetail = {
  "version": "1.0",
  "name": "lookNewsDetail",
};
const configajaxCheckCanSubmit = {
  "version": "1.0",
  "name": "ajaxCheckCanSubmit",
};
const configuserlogin = {
  "version": "1.0",
  "name": "userlogin",
  "app_key": "app_id_12",
}
const configdonateActivityPage = {
  "version": "1.0",
  "name": "donateActivityPage",
};
const configdonateActivityDetail = {
  "version": "1.0",
  "name": "donateActivityDetail",
};
const configdonatePoints = {
  "version": "1.0",
  "name": "donatePoints",
};
const configuserdetail ={
  "version":"1.0",
	"name":"user.detail",
}
const configbarCodeMatch = {
  "version":"1.0",
	"name":"user.barCodeMatch",
}
const configpasteCodeList = {
  "version":"1.0",
	"name":"user.pasteCodeList",
}
const configfillCard ={
  "version":"1.0",
	"name":"user.fillCard",
}
const configeditPwd ={
  "version":"1.0",
	"name":"user.editPwd",
}
const configideacreate ={
  "version": "1.0",
	"name": "user.ideacreate",
}
const configmyMessage ={
  "version": "1.0",
	"name": "user.myMessage",
}
const configuserAddress = {
  "version": "1.0",
	"name": "user.userAddress",
}
const configaddAddress = {
  "version": "1.0",
	"name": "user.addAddress",
}
const configdeleteAddress = {
  "version": "1.0",
	"name": "user.deleteAddress",
}
const configaddressDetail = {
  "version": "1.0",
	"name": "user.addressDetail",
}
const confgmodifyAddress = {
  "version": "1.0",
	"name": "user.modifyAddress",
};
const configsearchLike = {
  "version": "1.0",
  "name": "searchLike",
};
const configproductList = {
  "version": "1.0",
  "name": "product.list",
};
const configproductFeedbackInit = {
  "version": "1.0",
  "name": "product.feedbackInit",
};
const configproductFeedbackSave = {
  "version": "1.0",
  "name": "product.feedbackSave",
};
const configuserGetInfo = {
  "version": "1.0",
  "name": "user.getInfo",
};
const configgetPointInDetail = {
  "version": "1.0",
  "name": "user.getPointInDetail",
};
const configgetPointOutDetail = {
  "version": "1.0",
  "name": "user.getPointOutDetail",
};
const configProductActivityHistory = {
  "version": "1.0",
  "name": "product.activityHistory",
};
const configbannerList ={
  "version": "1.0",
	"name": "bannerList",
}
const configpointTransInfo ={
  "version": "1.0",
	"name": "user.pointTransInfo",
}
const configblind = {
  "version": "1.0",
	"name": "account.blind",
}
const configActivityNotice ={
  "name":"donateActivityNotice",
  "version":"1.0",
}
const configDonateActivity ={
  "name":"latestDonateActivity",
  "version":"1.0",
}


export default {
  Uuid() {
    return new Date().valueOf() + Math.random()
  },
  timestamp() {
    return new Date().valueOf();
  },
  getarea(params) {
    let config = Object.assign(configarea, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getProductList(params) {
    let config = Object.assign(configproductlist, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getNewInfoByStyleForUser(params) {
    let config = Object.assign(configgetNewinfobyStyleforuser, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getActNotice(params) {
    let config = Object.assign(configactnotice, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getdoninteglist5(params) {
    let config = Object.assign(configdoninteglist, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getArearescount(params) {
    let config = Object.assign(configarearescount, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getCounthouse(params) {
    let config = Object.assign(configcounthouse, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getAreavalidpoint(params) {
    let config = Object.assign(configareavalidpoint, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getStatDate(params) {
    let config = Object.assign(configstatdate, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getPositionInfo(params) {
    let config = Object.assign(configPositionInfo, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getcountrank(params) {
    let config = Object.assign(configcountrank, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  caringUnitSubmit(params) {
    let config = Object.assign(configcaringUnitSubmit, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  pcrimg(params) {
    let config = Object.assign(configpcrimg, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getProductDetail(params) {
    let config = Object.assign(configgetProductDetail, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getMallLogoList(params) {
    let config = Object.assign(configgetMallLogoList, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getMallProductList(params) {
    let config = Object.assign(configgetMallProductList, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  addAdmire(params) {
    let config = Object.assign(configaddAdmire, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  pubActList(params) {
    let config = Object.assign(configpubActList, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  pubDetailById(params) {
    let config = Object.assign(configpubDetailById, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  addVolunteer(params) {
    let config = Object.assign(configaddVolunteer, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  allList4NewStyle(params) {
    let config = Object.assign(configallList4NewStyle, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  lookNewsDetail(params) {
    let config = Object.assign(configlookNewsDetail, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  ajaxCheckCanSubmit(params) {
    let config = Object.assign(configajaxCheckCanSubmit, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  userlogin(params) {
    let config = Object.assign(configuserlogin, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);

  },
  donateActivityPage(params) {
    let config = Object.assign(configdonateActivityPage, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  donateActivityDetail(params) {
    let config = Object.assign(configdonateActivityDetail, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  donatePoints(params) {
    let config = Object.assign(configdonatePoints, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getuserdetail(params) {
    let config = Object.assign(configuserdetail, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getbarCodeMatch(params){
    let config = Object.assign(configbarCodeMatch, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getpasteCodeList(params){
    let config = Object.assign(configpasteCodeList, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getfillCard(params){
    let config = Object.assign(configfillCard, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  editPwd(params){
    let config = Object.assign(configeditPwd, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  ideacreate(params){
    let config = Object.assign(configideacreate, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getmyMessage(params){
    let config = Object.assign(configmyMessage, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getuserAddress(params){
    let config = Object.assign(configuserAddress, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  addAddress(params){
    let config = Object.assign(configaddAddress, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  deleteAddress(params){
    let config = Object.assign(configdeleteAddress, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getaddressDetail(params){
    let config = Object.assign(configaddressDetail, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  modifyAddress(params){
    let config = Object.assign(confgmodifyAddress, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  searchLike(params) {
    let config = Object.assign(configsearchLike, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  productList(params) {
    let config = Object.assign(configproductList, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  productFeedbackInit(params) {
    let config = Object.assign(configproductFeedbackInit, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  productFeedbackSave(params) {
    let config = Object.assign(configproductFeedbackSave, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  userGetInfo(params) {
    let config = Object.assign(configuserGetInfo, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getPointInDetail(params) {
    let config = Object.assign(configgetPointInDetail, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getPointOutDetail(params) {
    let config = Object.assign(configgetPointOutDetail, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  productActivityHistory(params) {
    let config = Object.assign(configProductActivityHistory, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getbannerList(params){
    let config = Object.assign(configbannerList, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  pointTransInfo(params){
    let config = Object.assign(configpointTransInfo, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  blind(params){
    let config = Object.assign(configblind, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getActivityNotice(params){
    let config = Object.assign(configActivityNotice, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getDonateActivity(params){
    let config = Object.assign(configDonateActivity, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  }
}
