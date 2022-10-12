import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./routes";
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

let router= new VueRouter({
  routes,
  scrollBehavior() {
    return { y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  //用户登录
  if (token) {
    if (to.path == "/login"||to.path=="register") {
      next("/");
    } else {
      if (name) {
        next();
      } else {
        try {
          await store.dispatch("userInfo");
          next();
        } catch (error) {
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    //未登录,不能去交易相关，支付相关，个人中心
    let toPath = to.path
    if(toPath.indexOf(`/trade`)!=-1 ||toPath.indexOf(`/pay`)!=-1 ||toPath.indexOf(`/center`)!=-1){
  //把未登录的时候去而没有去的信息存储在地址栏中（路由）
   next(`/login?redirect=`+toPath);
  }else{
    //去的不是上边这些路由放行
    next()
  }}
});

export default router;

