import axios from 'axios';
// 测试
let base='http://180.153.19.162:8081';
// let base='http://192.168.1.121:8080';

const configarea = {
    "version":"1.0",
	"name":"district",
}
const configproductlist = {
    "version":"1.0",
	"name":"getProductList",
}
const configgetNewinfobyStyleforuser = {
    "version":"1.0",
	"name":"getNewInfoByStyleForUser",
}
const configactnotice = {
    "version":"1.0",
	"name":"actnotice",
}
const configdoninteglist ={
    "version":"1.0",
	"name":"doninteglist5",
}
const configarearescount ={
    "version":"1.0",
	"name":"arearescount9",
}
const configstatdate = {
    "version":"1.0",
	"name":"statdate",
}
const configPositionInfo = {
    "version":"1.0",
	"name":"getPositionInfo",
}
export default{
    UUid(){},
    Uuid(){
        return new Date().valueOf()+Math.random()
    },
    timestamp(){
        return new Date().valueOf();
    },
    getarea(params) {
        let config = Object.assign(configarea,params,{"nonce":this.Uuid()},{"timestamp":this.timestamp()});
        return axios.post(`${base}/api/homepage`, config).then(res => res.data);
    },
    getProductList(params){
        let config = Object.assign(configproductlist,params,{"nonce":this.Uuid()},{"timestamp":this.timestamp()});
        return axios.post(`${base}/api/homepage`, config).then(res => res.data);
    },
    getNewInfoByStyleForUser(params){
        let config = Object.assign(configgetNewinfobyStyleforuser,params,{"nonce":this.Uuid()},{"timestamp":this.timestamp()});
        return axios.post(`${base}/api/homepage`, config).then(res => res.data);
    },
    getActNotice(params){
        let config = Object.assign(configactnotice,params,{"nonce":this.Uuid()},{"timestamp":this.timestamp()});
        return axios.post(`${base}/api/homepage`, config).then(res => res.data);
    },
    getdoninteglist5(params){
        let config = Object.assign(configdoninteglist,params,{"nonce":this.Uuid()},{"timestamp":this.timestamp()});
        return axios.post(`${base}/api/homepage`, config).then(res => res.data);
    },
    getArearescount(params){
        let config = Object.assign(configarearescount,params,{"nonce":this.Uuid()},{"timestamp":this.timestamp()});
        return axios.post(`${base}/api/homepage`, config).then(res => res.data);
    },
    getStatDate(params){
        let config = Object.assign(configstatdate,params,{"nonce":this.Uuid()},{"timestamp":this.timestamp()});
        return axios.post(`${base}/api/homepage`, config).then(res => res.data);
    },
    getPositionInfo(params){
        let config = Object.assign(configPositionInfo,params,{"nonce":this.Uuid()},{"timestamp":this.timestamp()});
        return axios.post(`${base}/api/homepage`, config).then(res => res.data);
    }

}
