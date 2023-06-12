
<template>
    <div id="swiperTop">
      <van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in state.images" :key="image">
    <img :src="image.pic" />
  </van-swipe-item>
</van-swipe>  
    </div>

</template>
<script >
import axios from 'axios'
import  {reactive,onMounted} from 'vue'
import {getbanner} from "@/request/api/home.js"

export default {
    setup() {
      const state = reactive({images:[
        'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
        'https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675',
      ]});
      onMounted(async()=>{
        //普通方式
        // axios.get("http://localhost:3000/banner?type=2").then((res)=>{
        //     console.log(res)
        //     state.images=res.data.banners//常量不能直接赋值所以使用响应式
        //     console.log(state.images)
        // })
        //分装请求,异步等待请求函数前面加async
        let res= await getbanner();
        state.images=res.data.banners
        console.log(res);
      })
      return { state };
    },
  };

</script>
<style lang="less" >
#swiperTop{
    .van-swipe{
    width: 100%;
    height: 3rem;
    .van-swipe__track{
       
        .van-swipe-item{
            padding: 2px;
            img{
                width: 100%;
            height: 100%; 
            border-radius: 10px;//边角圆润
            }
            
        }//配置原点颜色
    
            
    } .van-swipe__indicator{
                background-color: rgb(219, 130, 130);
        }
       
    
}
}

</style>