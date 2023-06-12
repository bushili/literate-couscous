<template>
    <img :src="musiclist.al.picUrl" class="bigimg">
    <div class="topmusic">
        <div class="leftmusic">
            <svg t="1681716063416" @click="updatedetailshow" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5414" width="200" height="200"><path d="M710.153924 8.980397L266.007127 460.692524a81.118646 81.118646 0 0 0 0.861532 114.476097l446.192936 441.050666a26.922883 26.922883 0 0 0 37.853573-38.284339L304.722232 536.884282a27.27288 27.27288 0 0 1-0.323074-38.445877L748.545955 46.726278A26.922883 26.922883 0 1 0 710.180847 9.00732z"  p-id="5415" @click="$router.go(-1)"></path></svg>
                <div class="leftmarquee">
                    <Vue3Marquee style="color: aliceblue;">{{ musiclist.al.name }}</Vue3Marquee>
                <span v-for="(item,i) in musiclist.ar" :key="item">{{ item.name }}
                </span>
                <svg t="1681979328095" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2297" width="200" height="200"><path d="M236.552013 926.853955a55.805997 55.805997 0 0 0 0 80.454996 59.682997 59.682997 0 0 0 82.794996 0l468.099978-455.081978a55.805997 55.805997 0 0 0 0-80.453996L319.348009 16.689999a59.682997 59.682997 0 0 0-82.794996 0 55.805997 55.805997 0 0 0 0 80.454996L663.401993 511.999975 236.624013 926.853955z" p-id="2298"></path></svg>
                </div>     
        </div>
        <div class="rightmusic">
            <svg t="1681979891829" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3295" width="200" height="200"><path d="M768.73106 703.537712c-35.606921 0-67.945574 14.793214-91.167479 38.359147l-309.109357-171.670082c9.116748-17.545439 14.621199-37.155048 14.621199-58.312783 0-12.55703-2.408198-24.426004-5.676466-35.950949l304.63699-189.215522c22.705863 20.469679 52.464304 33.198723 85.146985 33.198723 70.525785 0 127.978498-57.452713 127.978498-127.978498S837.708718 63.989249 767.182933 63.989249s-127.978498 57.452713-127.978498 127.978498c0 14.621199 2.92424 28.382328 7.396607 41.455401L344.716278 420.746514c-23.049891-22.705863-54.700487-36.983034-89.791366-36.983034-70.525785 0-127.978498 57.452713-127.978498 127.978498s57.452713 127.978498 127.978498 127.978498c25.630102 0 49.540064-7.740635 69.493701-20.813707l321.150344 178.378633c-3.096254 11.008903-5.160423 22.18982-5.160423 34.058794 0 70.525785 57.452713 127.978498 127.978498 127.978498s127.978498-57.452713 127.978498-127.978498S839.256845 703.537712 768.73106 703.537712zM767.182933 127.978498c35.262893 0 63.989249 28.726356 63.989249 63.989249s-28.726356 63.989249-63.989249 63.989249-63.989249-28.726356-63.989249-63.989249S731.92004 127.978498 767.182933 127.978498zM191.107677 511.913993c0-35.262893 28.726356-63.989249 63.989249-63.989249s63.989249 28.726356 63.989249 63.989249-28.726356 63.989249-63.989249 63.989249S191.107677 547.176886 191.107677 511.913993zM768.73106 895.505459c-35.262893 0-63.989249-28.726356-63.989249-63.989249s28.726356-63.989249 63.989249-63.989249 63.989249 28.726356 63.989249 63.989249C832.720309 866.951117 803.993953 895.505459 768.73106 895.505459z" fill="#575B66" p-id="3296"></path></svg>
        </div>
    </div>

    <div class="center" v-show="islyricshow">
             <img src="@/assets/1.jpg" class="centerneedle" :class="{centerneedle2:!isbtnShow}"><!--播放时样式选则另外一种 -->
            <img :src="musiclist.al.picUrl" class="centerimg" :class="{centerimgactive:!isbtnShow,centerimgpasued:isbtnShow}">
        
    </div>
    <div class="lyricclass" ref="musiclyric" v-show="!islyricshow">
             <p v-for="item in lyric" :key="item" :class="{active:(currenttime*1000)>=item.time&&(currenttime*1000)<item.pre}">
                {{ item.lrc }}
             </p>
    </div>
   

    <div class="detailfooter">
        <div class="footertop">

        </div>
        <div class="footercenter">

        </div>

        <div class="footer">
            <svg v-if="isbtnShow" t="1681886028416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2592" width="200" height="200"><path d="M533.333333 896C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333z m149.333334-320L469.333333 682.666667V384l213.333334 149.333333z m-68.266667 0L512 460.8v145.066667l102.4-72.533334z" fill="#444444" p-id="2593"
                @click="play" ></path></svg>
                <svg v-else @click="play" t="1681916125023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2366" width="200" height="200"><path d="M121.3 680.4m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z" fill="#242424" p-id="2367"></path><path d="M266.5 855.6m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z" fill="#242424" p-id="2368"></path><path d="M512 35.6C252.8 35.6 42.6 245.7 42.6 505c0 69 14.9 134.6 41.7 193.6l74.2-35.4c-21.7-48.3-33.7-101.8-33.7-158.2 0-213.8 173.3-387.2 387.2-387.2S899.2 291.1 899.2 505 725.8 892.1 512 892.1c-81.9 0-157.9-25.4-220.4-68.8l-51.2 57.2c1.5 0.7 2.5 2.1 2.5 3.6s0.3 3.2-1.2 3.9c76.7 54.5 169.2 86.2 270.4 86.2 259.2 0 469.4-210.1 469.4-469.4S771.2 35.6 512 35.6z" fill="#242424" p-id="2369"></path><path d="M419.9 329.1c22.6 0 41 18.3 41 41v261.7c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V370.1c0-22.6 18.4-41 41-41zM610.9 329.1c22.6 0 41 18.3 41 41v261.7c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V370.1c0-22.6 18.4-41 41-41z" fill="#242424" p-id="2370" ></path></svg>
        </div>
    </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import {mapMutations,mapState} from 'vuex'
export default{
    data(){
        return{
            islyricshow:false
        }
    },
    props:['musiclist','play'],
    setup(props){
        console.log(props.play)
        console.log(props.musiclist)
    },
    components:{
        Vue3Marquee
    },
    methods:{
        ...mapMutations(['updatedetailshow','updateisbtnShow'])
    },
    watch:{
        currenttime(){
            let p=document.querySelector("p.active")
            console.log([p]);
            if(p.offsetTop>300){
                this.$refs.musiclyric.scrollTop=p.offsetTop-300
            }
        }
    }
   ,
    
    computed:{
        ...mapState(['isbtnShow','musiclyric','currenttime']),

        lyric(){
            let arr;
            if(this.musiclyric.lyric){
                arr=this.musiclyric.lyric.split(/[(\r\n)\r\n]+/).map((item,i)=>{
                    let min=item.slice(1,3);
                    let sec=item.slice(4,6);
                    let mill=item.slice(7,10);
                    let lrc=item.slice(11,item.length)
                    let time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill) ;
                    if(isNaN(Number(mill))){
                        mill=item.slice(7,9);
                         lrc=item.slice(10,item.length)
                         time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill); 
                    }
                    //console.log(min,sec,mill,lrc)
                    return{min,sec,mill,lrc,time}
                })
            }  
            
            arr.forEach((item,i)=>{
                if(i==arr.length-1){
                    item.pre=0
                }else{
                    item.pre=arr[i+1].time
                }
            });
           
            return arr;
        }
    }
}
</script>
<style lang="less" >
.bigimg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(70px);
}
.topmusic{
    width: 100%;
    height: 1rem;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .leftmusic{
        width: 50%;
        height: 100%;
        align-items: center;
        display: flex;
       .leftmarquee{
        width: 2rem;
        height: 100%;
        margin-left: 0.4rem;
       
        span{
            color: #999;
        }
        .icon{
            width: 0.3rem;
            height: 0.3rem;
            fill: #999;
        }
       }
    }
}

.center{
    width: 100%;
    height: 8rem;
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
//    flex-direction: column;
    align-items: center;
    // margin: 0% auto;
    // text-align: center; 
    .centerneedle{
        width: 10%;
        height: 2rem;
        left: 10%;
        //transform-origin: 0 0;//从哪点开始偏转
        transform: rotate(-50deg);//偏转
        position: relative;
        transition: all 2s;//偏转2s
    }   
    .centerneedle2{
        width: 10%;
        height: 2rem;
        left: 10%;
        //transform-origin: 0 0;//从哪点开始偏转
        transform: rotate(-13deg);//偏转
        position: relative;
        transition: all 2s;//偏转2s
    }   
    .centerimg{
        width: 60%;
        height: 4rem;
        padding: 1px;
        position: relative;
        border-radius: 50%;
        // text-align: center;
        // transform: rotate(-10deg);调倾斜
        animation: rotate_img 10s linear infinite;//linear匀速 infinite无线循环
    }
    .centerimgactive{
        animation-play-state: running;
    }
    .centerimgpasued{
        animation-play-state: paused;
    }
    //旋转动画
    @keyframes rotate_img{
        0%{
            transform: rotateZ(0deg);
        }
        100%{
            transform: rotateZ(360deg);
        }
    }
}


.detailfooter{
    width: 100%;
    height: 1.4rem;
    position: absolute;
    bottom: 0;
    justify-content: center;
    display: flex;
    .footer{
        width: 100%;
        height: 100%;
        position: relative;
        justify-content: center;
        display: flex;
        .icon{
                width: 1rem;
                height: 1rem;
            }
    }
}
.lyricclass{
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    overflow: scroll;//溢出滚动
    p{
        color: #41299f;
        margin-bottom: 20px;

    }
    .active{
        color: #eeeef1;
        font-size: 20px;
    }
}
</style>