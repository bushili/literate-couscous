<template>
     <div class="footermusic">
        <div class="footerleft" @click="updatedetailshow" >
            <img :src="playlist[playlistindex].al.picUrl" alt="">
            <div>
                <p>{{playlist[playlistindex].al.name}}</p>
                <span>横划切换</span>
            </div>
                    
            
        </div>
        <div class="footerright">
           
                <svg v-if="isbtnShow" t="1681886028416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2592" width="200" height="200"><path d="M533.333333 896C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333z m149.333334-320L469.333333 682.666667V384l213.333334 149.333333z m-68.266667 0L512 460.8v145.066667l102.4-72.533334z" fill="#444444" p-id="2593"
                @click="play" ></path></svg>
          
        
                <svg v-else @click="play" t="1681916125023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2366" width="200" height="200"><path d="M121.3 680.4m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z" fill="#242424" p-id="2367"></path><path d="M266.5 855.6m-40.9 0a40.9 40.9 0 1 0 81.8 0 40.9 40.9 0 1 0-81.8 0Z" fill="#242424" p-id="2368"></path><path d="M512 35.6C252.8 35.6 42.6 245.7 42.6 505c0 69 14.9 134.6 41.7 193.6l74.2-35.4c-21.7-48.3-33.7-101.8-33.7-158.2 0-213.8 173.3-387.2 387.2-387.2S899.2 291.1 899.2 505 725.8 892.1 512 892.1c-81.9 0-157.9-25.4-220.4-68.8l-51.2 57.2c1.5 0.7 2.5 2.1 2.5 3.6s0.3 3.2-1.2 3.9c76.7 54.5 169.2 86.2 270.4 86.2 259.2 0 469.4-210.1 469.4-469.4S771.2 35.6 512 35.6z" fill="#242424" p-id="2369"></path><path d="M419.9 329.1c22.6 0 41 18.3 41 41v261.7c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V370.1c0-22.6 18.4-41 41-41zM610.9 329.1c22.6 0 41 18.3 41 41v261.7c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V370.1c0-22.6 18.4-41 41-41z" fill="#242424" p-id="2370" ></path></svg>
           
            
            <svg t="1681912277645" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1274" width="200" height="200"><path d="M337.92 184.32c9.9328 0 18.78016 4.72064 24.39168 12.04224 79.40096 26.12224 132.64896 92.4672 159.73376 199.05536 5.4784 12.60544-106.25024-110.20288-153.3952-104.64256L368.64 738.9696c1.61792 47.90272-47.49312 95.20128-115.48672 108.72832-72.86784 14.47936-139.8272-15.3088-149.56544-66.56-9.728-51.24096 41.44128-104.51968 114.29888-119.00928 32.4608-6.4512 63.744-4.11648 89.32352 4.98688L307.2 215.04a30.72 30.72 0 0 1 30.72-30.72z m552.96 563.2a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h419.84z m0-102.4a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h419.84z m0-102.4a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h419.84z m0-112.64a30.72 30.72 0 0 1 0 61.44H471.04a30.72 30.72 0 0 1 0-61.44h419.84z" fill="#FAB005" p-id="1275"></path></svg>
        </div>
        <!-- 音乐播放器显示 controls-->
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playlistindex].id}.mp3`"></audio>
        <!-- 弹出层展示音乐详情 -->
        <van-popup
            v-model:show="detailshow"
            position="right"
            :style="{ width: '100%', height: '100%' }"
            >
            <div>
                <musicdetail  :musiclist="playlist[playlistindex]" :play="play" ></musicdetail>
            </div>
        
        </van-popup>
     </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
import musicdetail from '@/components/item/musicdetail.vue'
export default{
    data(){
        return{
            interVal:0   
        }
    }
    ,
    computed:{
        ...mapState(['playlist','playlistindex','isbtnShow','detailshow'])
        
    },
    components:{
        musicdetail,
    }
    ,
    mounted(){
        console.log(this.$refs)
        this.updatetime();
    },
    updated(){
        this.$store.dispatch("getlyric",this.playlist[this.playlistindex].id)
    }
    ,
    methods:{
        play:function(){
            //判断是否播放
            if(this.$refs.audio.paused){
                this.$refs.audio.play();
                this.updateisbtnShow(false)
                this.updatetime()
            }else{
                this.$refs.audio.pause();
                this.updateisbtnShow(true)
            }
            
        },
        updatetime(){//利用定时器实时传送时间
            this.interVal= setInterval(()=>{
                this.updatecurrenttime(this.$refs.audio.currentTime)
            },1000)//定时器
        },

        
        ...mapMutations(['updateisbtnShow','updatedetailshow','updatecurrenttime'])
    },
    watch:{
        playlistindex(){//监听playlistindex下标如果下标发生改变自动播放
            //this.$refs获取到的是组件实例，可以使用组件的所有方法。
            this.$refs.audio.autoplay=true
           if(this.$refs.audio.paused){
            this.updateisbtnShow(false)
           }
        },
        playlist(){//监听播放列表改变播放音乐
            if(this.$refs.audio.paused){
              this.$refs.audio.autoplay=true;
              this.updateisbtnShow(false);
            }

        }
    }
    
}
</script>
<style lang="less" scoped>
    .footermusic{
        width: 100%;
        height: 1.4rem;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        border-top: 1px solid #999;
        justify-content: space-between;
        display: flex;
        .footerleft{
            width: 60%;
            height: 100%;
            display: flex;
            padding: 10px;
            justify-content: space-around;
            img{
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }
            
        }.footerright{
            width:20%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            padding: 5px;
            align-items: center;
            .icon{
                width: .6rem;
                height: .6rem;
            }
        }
        
    }
</style>