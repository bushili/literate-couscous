<!-- 歌单页面顶部 -->
<template>
    
    <div class="itemtop">
        <img :src="itemlist.coverImgUrl" class="bigimg">
        <div class="itemleft">
            <svg t="1681716063416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5414" width="200" height="200"><path d="M710.153924 8.980397L266.007127 460.692524a81.118646 81.118646 0 0 0 0.861532 114.476097l446.192936 441.050666a26.922883 26.922883 0 0 0 37.853573-38.284339L304.722232 536.884282a27.27288 27.27288 0 0 1-0.323074-38.445877L748.545955 46.726278A26.922883 26.922883 0 1 0 710.180847 9.00732z"  p-id="5415" @click="$router.go(-1)"></path></svg>
            <span>歌单</span>
        </div>
        <div class="itemright">
            <svg t="1681716137039" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1274" width="200" height="200"><path d="M277.8112 236.8512c103.97696-103.97696 272.54784-103.97696 376.5248 0a266.12736 266.12736 0 0 1 68.16768 259.9936 30.72 30.72 0 1 1-59.1872-16.49664 204.6976 204.6976 0 0 0-52.4288-200.04864c-79.9744-79.9744-209.65376-79.9744-289.62816 0-79.9744 79.9744-79.9744 209.64352 0 289.62816a204.88192 204.88192 0 0 0 232.07936 40.52992 204.36992 204.36992 0 0 0 57.5488-40.52992 30.72 30.72 0 0 1 43.43808 0l202.752 202.74176a30.72 30.72 0 0 1-43.44832 43.43808L631.36768 633.856a264.77568 264.77568 0 0 1-51.85536 32.18432c-100.7616 47.44192-221.66528 27.37152-301.70112-52.67456-103.97696-103.96672-103.97696-272.5376 0-376.5248z"  p-id="1275"></path></svg>            
            <svg t="1681716166780" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1417" width="200" height="200"><path d="M337.92 184.32c9.9328 0 18.78016 4.72064 24.39168 12.04224 79.40096 26.12224 132.64896 92.4672 159.73376 199.05536 5.4784 12.60544-106.25024-110.20288-153.3952-104.64256L368.64 738.9696c1.61792 47.90272-47.49312 95.20128-115.48672 108.72832-72.86784 14.47936-139.8272-15.3088-149.56544-66.56-9.728-51.24096 41.44128-104.51968 114.29888-119.00928 32.4608-6.4512 63.744-4.11648 89.32352 4.98688L307.2 215.04a30.72 30.72 0 0 1 30.72-30.72z m552.96 563.2a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h419.84z m0-102.4a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h419.84z m0-102.4a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h419.84z m0-112.64a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h419.84z"  p-id="1418"></path></svg>
        </div>
    </div>
    

</template>
<script>
import { inject } from 'vue';
export default{
    setup(props){
        
        //这段是另一种方式接收参数防止参数丢失
        // if((props.playlist.creator='')){
        //    let creator= props.playlist.creator=JSON.parse(sessionStorage.getItem("itemdetail").playlist).creator
        //     console.log(creator)
        // }
        let itemlist=inject("playlist")
        
        console.log(itemlist)
        
        return itemlist
    },
    //另一种参数接受方法
    // props:["playlist"],
};
</script>

<style lang="less">
.itemtop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    .bigimg{
        width: 100%;
        height: 11rem;
        position: fixed;
        z-index: -1;//图层
        filter: blur(30px);//虚化
    }
    .itemleft ,.itemright{
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;//两端对齐
        margin: 0 10px;//设置内到外边距 第一个竖直 第二个左右
        span{
            font-size: .4rem;
            color: #f7f4f4;
        }
        .icon{
            fill: #f7f4f4;
        }
        
    }
}
</style>