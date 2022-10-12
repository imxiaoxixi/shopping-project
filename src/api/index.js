import requests from "./requests";
import mockRequests from "./mockRequests";
//获取商品分类的数据
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
//获取首页轮播图数据的接口
export const reqGetBannerList = () => mockRequests.get("/banner");
//获取Floor数据接口
export const reqFloorList = () => mockRequests.get("/floor");
//搜索模块的请求接口函数:
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });
//详情模块商品的数据
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });
//将产品添加到购物车（获取更新一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });
//获取购物车列表接口
export const reqCartList = () =>
  requests({ url: `/cart/cartList`, method: "get" });
//切换商品的选中状态
export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });
//删除购物产品的接口
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });
//获取验证码接口
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });
//注册接口
export const reqUserRegister = (data) =>
  requests({ url: `/user/passport/register`, data, method: "post" });
//登录
export const reqUserLogin = (data) =>
  requests({ url: `/user/passport/login`, data, method: "post" });
//显示用户信息
export const reqUserInfo = () =>
  requests({ url: `/user/passport/auth/getUserInfo`, methods: "get" });
//退出登录
export const reqLogout = () =>
  requests({ url: `/user/passport/logout`, methods: "get" });
//获取用户的地址
export const reqAddressInfo = () =>
  requests({
    url: `/user/userAddress/auth/findUserAddressList`,
    method: "get",
  });
//获取商品接口
export const reqOrderInfo = () =>
  requests({ url: `/order/auth/trade`, method: "get" });
  //提交订单
  export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
//获取订单支付信息
export const reqPayInfo = (orderId) =>
  requests({ url: `/payment/weixin/createNative/${orderId}`,method:'get' });
  //查询支付订单的状态
  export const reqPayStatus =(orderId) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:"get"})
  //获取我的订单列表
  export const reqMyOrderList = (page,limit) =>
    requests({ url: `order/auth/${page}/${limit}`, method: "get" });