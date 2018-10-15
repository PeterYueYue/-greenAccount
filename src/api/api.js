import axios from 'axios';
// 测试
let base = 'http://180.153.19.162:8081';

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
};
const configcaringUnitSubmit = {
  "version": "1.0",
  "name": "caringUnit.submit",
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
  caringUnitSubmit(params) {
    let config = Object.assign(configcaringUnitSubmit, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getProductDetail(params) {
    let config = Object.assign(configgetProductDetail, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getProductDetail(params) {
    let config = Object.assign(configgetProductDetail, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },
  getMallProductList(params) {
    let config = Object.assign(configgetMallProductList, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/web`, config).then(res => res.data);
  },

}
