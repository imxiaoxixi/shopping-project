import { reqGoodsInfo } from "@/api"
const state={
    goodInfo:[]
}
const mutations = {
  GETGOODSINFO(state,goodInfo){
    state.goodInfo=goodInfo
  }
};
const actions={
    async getGoodInfo({commit},skuId){
       let result= await reqGoodsInfo(skuId)
       console.log(result);
       if(result.code==200){
        commit('GETGOODSINFO',result.data)
       }
    }
}
const getters = {
  categoryView(state){
    return state.goodInfo.categoryView||{};
  }
};
export default{
    state,
    mutations,
    actions,
    getters
}