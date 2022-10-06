import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api';
let state={
    categoryList:[],
    bannerList:[],
    floorList:[],
};
let mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
    },
    BANNERLIST(state,bannerList){
        state.bannerList=bannerList;
    },
    FLOORLIST(state,floorList){
        state.floorList=floorList;
    }
};
let actions={
 async getCategoryList({commit}){
    let result= await reqCategoryList();
    if(result.code==200){
        commit('CATEGORYLIST',result.data)
    }
},
async getBannerList({commit}){
    let result=await reqGetBannerList();
    if(result.code==200){
        commit('BANNERLIST',result.data)
    }
},
async getFloorList({commit}){
    let result=await reqFloorList();
    if(result.code==200){
        commit('FLOORLIST',result.data)
    }
}
};
let getters={}
export default{
    state,
    mutations,
    actions,
    getters
}