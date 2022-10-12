import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";
const state = {
  cartList: [],
};
const mutations = {
  REQCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  //获取购物车数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit("REQCARTLIST", result.data);
    }
  },
  //修改商品的选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("falie"));
    }
  },
  //删除购物车某一产品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //删除选中的商品
  deleteAllCheckedCart({ dispatch, getters }) {
    //context:小仓库，commit【提交mutations修改state】,getters【计算属性】，dispatch【派发action】，state【当前仓库数据】
    //获取购物车中全部的产品（数组）
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise =
        item.isChecked == 1
          ? dispatch("deleteCartListBySkuId", item.skuId): "";
      //将每一次返回的promise添加到数组当中
      PromiseAll.push(promise);
    });
    //只要返回的全部值都成功，返回的结果才成功，有一个失败则失败
    return Promise.all(PromiseAll);
  },
  //修改全部产品的选中状态
  updateAllCartChecked({dispatch,state},isChecked) {
    let PromiseAll=[]
    state.cartList[0].cartInfoList.forEach(item=>{
      //把全选的isChecked遍历每一个商品，把每一个商品的isChecked变成跟全选相同的状态
      let promise = dispatch("updateCheckedById", { skuId:item.skuId,isChecked })
      PromiseAll.push(promise)
    })
    return Promise.all(PromiseAll)
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
