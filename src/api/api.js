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

export default {
  Uuid() {
    return new Date().valueOf() + Math.random()
  },
  timestamp() {
    return new Date().valueOf();
  },
  getarea(params) {
    let config = Object.assign(configarea, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/homepage`, config).then(res => res.data);
  },
  getProductList(params) {
    let config = Object.assign(configproductlist, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/homepage`, config).then(res => res.data);
  },
  getNewInfoByStyleForUser(params) {
    let config = Object.assign(configgetNewinfobyStyleforuser, params, {"nonce": this.Uuid()}, {"timestamp": this.timestamp()});
    return axios.post(`${base}/api/homepage`, config).then(res => res.data);
  },
}
