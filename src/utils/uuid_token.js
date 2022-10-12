import { v4 as uuidv4 } from "uuid";
//要生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
export const getUUID=()=>{
    //先从本地获取uuid,（看一下本地有没有）
   let uuid_token= localStorage.getItem('UUIDTOKEN')
   //如果没有
   if(!uuid_token){  //(初始状态没有，返回为null，非null为真)
    //生成游客临时身份
    uuid_token=uuidv4()
    //本地存储一次
    localStorage.setItem('UUIDTOKEN',uuid_token)
   }
   return uuid_token
}