<template>
    <div class="musiclist">
        <div class="musictop">
        <div class="title">发现好歌单</div>
        <div class="more">查看更多</div></div>
        <div class="musicswiper">
            <van-swipe :loop="false" :width="150" class="myswiper" :show-indicators="false">
            <van-swipe-item v-for="item in state.musiclist " :key="item" >
                <router-link :to="{path:'/itemmusic' ,query:{id:item.id}}">
                <img :src="item.picUrl" alt=""/>
                <span class="palycount">
                    <svg t="1681637363749" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1274" width="200" height="200"><path d="M670.64832 452.94592l0.18432 0.48128c3.08224 3.18464 4.98688 7.5264 4.98688 12.31872v299.13088c0.9216 27.37152-27.40224 54.39488-66.62144 62.11584-42.02496 8.27392-80.66048-8.74496-86.272-38.02112-5.62176-29.26592 23.90016-59.70944 65.93536-67.9936 18.71872-3.6864 36.7616-2.3552 51.5072 2.84672V584.20224l-241.03936 56.13568V826.6752c0.94208 27.36128-27.392 54.38464-66.6112 62.11584-42.02496 8.27392-80.66048-8.74496-86.272-38.02112-5.62176-29.27616 23.90016-59.71968 65.93536-67.9936 18.71872-3.6864 36.7616-2.3552 51.5072 2.84672V527.53408c0-1.45408 0.18432-2.8672 0.512-4.20864 0-8.0384 5.51936-15.29856 13.6704-17.2032l272.42496-63.4368a17.5616 17.5616 0 0 1 20.15232 10.26048zM507.5968 113.62304c185.82528 0 336.82432 148.2752 339.82464 332.32896l0.04096 6.25664A66.59072 66.59072 0 0 1 890.88 514.64192v124.35456a66.56 66.56 0 0 1-66.56 66.56h-10.24a66.56 66.56 0 0 1-66.56-66.56V514.64192a66.58048 66.58048 0 0 1 41.472-61.67552h-3.31776v-1.4336c0-152.68864-124.49792-276.48-278.07744-276.48-152.04352 0-275.57888 121.32352-278.03648 271.91296l-0.03072 4.0448A66.59072 66.59072 0 0 1 276.48 514.64192v124.35456a66.56 66.56 0 0 1-66.56 66.56h-10.24a66.56 66.56 0 0 1-66.56-66.56V514.64192a66.59072 66.59072 0 0 1 45.3632-63.10912h-10.752c0-186.624 152.1664-337.92 339.8656-337.92z m132.77184 367.59552l-241.03936 56.12544V604.16l241.03936-56.13568v-66.80576z" fill="#FAB005" p-id="1275"></path></svg>               
                     {{this.changeplaycount(item.playCount)  }}
                </span>
                <span class="musicname">
                    {{ item.name}}
                </span>
                </router-link>
            </van-swipe-item>
            
            </van-swipe>
        </div>
    </div>
</template>
<!-- vue2写法 -->
<script>
import {getmusiclist} from "@/request/api/home.js"
import {reactive,onMounted} from 'vue'
export default{
    // data(){
    //     return {
    //         musiclist:[]
    //     }
    // },
    // methods:{
    //     async getgedan(){
    //         let res=await getmusiclist();
    //         console.log(res)
    //         this.musiclist=res.data.result
    //         return res;
    //     },
    //      changeplaycount:function(num){
    //         if(num>=100000000){
    //             //tofix留几位小数
    //             return (num/100000000).toFixed(1)+'亿'
    //         }else if(num>=10000){
    //             return (num/10000).toFixed(1)+'万'
    //         }
    //      }
    // },
    // mounted(){
    //     this.getgedan()
    // }
    //vue3写法
        setup(){
            const state=reactive({
                musiclist:[]
            })

           function changeplaycount(num){
            if(num>=100000000){
                //tofix留几位小数
                return (num/100000000).toFixed(1)+'亿'
            }else if(num>=10000){
                return (num/10000).toFixed(1)+'万'
            }
         }
            onMounted(async ()=>{
                let res=await getmusiclist();
                console.log(res)
                state.musiclist=res.data.result
            })
            return {state,changeplaycount};
        }
}
</script>
<style lang="less">
.musiclist{
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
    .musictop{
        width: 100%;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more{
            border: 1px solid #ccc;
            border-radius: 0.4rem;
            text-align: center;
            padding: 0 0.2rem;
            line-height: 0.6rem;
        }
    }
    .musicswiper{
        width: 100%;
        height: 4rem;
        .myswiper{
           
            height: 100%;
            img{
                width: 100%;
                height: 150px;
            }
            }
    }
    
}
</style>