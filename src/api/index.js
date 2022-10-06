import requests from './requests'
import mockRequests from './mockRequests'
//获取商品分类的数据
export const reqCategoryList =()=>requests({ url: "/product/getBaseCategoryList", method: "get" });
//获取首页轮播图数据的接口
export const reqGetBannerList=()=>mockRequests.get("/banner");
//获取Floor数据接口
export const reqFloorList=()=>mockRequests.get('/floor');
//搜索模块的请求接口函数:
export const reqGetSearchInfo=(params)=>requests({url:"/list" , method:"post",data:params})
//详情模块商品的数据
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${skuId}`,method:'get'})
//获取验证码接口
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}` ,method:"get"});
  //注册接口
  export const reqUserRegister = (data) =>requests ({ url: `/user/passport/register` ,data,method:'post'});
  //登录
  export const reqUserLogin = (data) => requests({ url: `/user/passport/login` ,data,method:'post'});
  //显示用户信息
  export const reqUserInfo = () =>
    requests({ url: `/user/passport/auth/getUserInfo`,methods:'get' });
    //退出登录
  export const reqLogout = () =>
    requests({ url: `/user/passport/logout`, methods: "get" });