let httpUtil = require('./util');
class agent {
    constructor(conf) {
        this.conf = conf;
    }

    async login(){
        let body = await this.getAny(`/User/login?uName=${this.conf.username}&pWord=${this.conf.password}&Developer=${this.conf.devCode}`);
        console.log('登陆成功');
        console.log(body);
        let params = body.split('&');
        this.userInfo = {
            token:params[0],
            remaining:params[1],
        };
        return this;
    }

    async getAny(path){
        return await httpUtil.get(`${this.conf.host}${path}&code=${this.conf.encode}`);
    }

    async getWithToken(path){
        console.log(path);
        return await this.getAny(`${path}&token=${this.userInfo.token}`);
    }
    async getArea() {
        return await this.getAny('/User/getArea?');
    }
    async getItems(){
        return await this.getWithToken('/User/getItems?tp=ut');
    }
    
    async getPhone(opt){
        if(!opt || !opt.itemId){
            throw new Error('itemId 不能为空');
        }
        return await this.getWithToken(`/User/getPhone?ItemId=${opt.itemId}&PhoneType=${opt.phoneType || 0}&Phone=${opt.phone || ''}&NPhone=${opt.nphone || ''}&Count=${opt.count || 0}&Area=${opt.area || ''}&devid=${opt.devId || ''}`);
    }

    async getMessage(opt){
        if(!opt || !opt.itemId){
            throw new Error('itemId 不能为空');
        }
        return await this.getWithToken(`/User/getMessage?Phone=${opt.phone || ''}&ItemId=${opt.itemId}`)
    }
    
    async releasePhone(phoneList){
        return await this.getWithToken(`/User/releasePhone?phoneList=${phoneList || ''}`)
    }

    async releaseAll(){
        return await this.getWithToken(`/User/ReleaseAllPhone?`)
    }

    async exit(){
        return await this.getWithToken(`/User/exit?`)
    }
}
module.exports = agent;