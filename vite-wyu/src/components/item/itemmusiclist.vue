<template>
    <div class="itemmusiclist">
        <div class="lefttop">
            <svg t="1681886028416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2592" width="200" height="200"><path d="M533.333333 896C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333z m149.333334-320L469.333333 682.666667V384l213.333334 149.333333z m-68.266667 0L512 460.8v145.066667l102.4-72.533334z" fill="#444444" p-id="2593"></path></svg>
            <span >播放全部共首</span>
        </div>
        
        <div class="item" v-for="( item , i) in songlist " :key="i">
            <div class="itemleft"  @click="playmusic(i)">
                 {{ item.name }}  
            </div>
           
        </div>
    </div>
</template>

<script>
import { inject,reactive } from 'vue';
import {mapMutations} from 'vuex'
export default{
    setup(){
        // const state=reactive({
        //         songlist:{},
        //         itemlist:{}
        //     })
         let songlist=inject("playlist2")
        //  state.itemlist= inject("playlist")
        
        // console.log(state.songlist)
        // console.log(state)

        return songlist;
    },
    methods:{
        playmusic(value){// es6写法简写
            this.updateplaylist(this.songlist)
            this.playlistindex(value)
        },

        ...mapMutations(['updateplaylist','playlistindex'])
        // playmusic:function(){ // es5写法

        // }
    }
    
}
</script>
<style lang="less">

</style>