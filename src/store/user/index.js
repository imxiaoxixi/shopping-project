import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo,reqLogout } from "@/api";
import {setToken,getToken,removeToken} from '@/utils/token'
import { start } from "nprogress";
const state = {
  code: "",
  token: getToken(),
  userInfo:"",
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  CLEAR(state){
    state.token=''
    state.userInfo={}
    removeToken()
  }
};
const actions={
    //发送验证码
   async getCode({commit},phone){
   let result=await reqGetCode(phone);
   if(result.code==200){
    commit('GETCODE',result.data)
    return 'ok'
   }else{
    return Promise.reject(new Error('falie'));
   }
},
//完成注册
  async userRegister({commit},user){
    let result = await reqUserRegister(user)
    if(result.code==200){
        return 'ok'
    }else{
        return Promise.reject(new Error('falie'))
    }
},
//用户登录
async userLogin({commit},data){
  let result=  await reqUserLogin(data)
  if(result.code==200){
    commit('USERLOGIN',result.data.token)
    setToken(result.data.token)
    return 'ok'
  }else{
    return Promise.reject(new Error('falie'))
  }
},
//用户信息
async userInfo({commit}){
    let result =await reqUserInfo()
    if (result.code == 200) {
      commit("USERINFO", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error('falie'));
    }
},
//退出登录
async userLogout({commit}){
    let result =await reqLogout()
    if(result.code==200){
        commit('CLEAR')
        return 'ok'
    }else{
        return Promise.reject(new Error('falie'))
    }
}
}
const getters={

}
export default{
    state,
    mutations,
    actions,
    getters
}