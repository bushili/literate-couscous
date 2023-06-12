<template>
<div>
    <itemmusic></itemmusic>
    <itemmusiclist></itemmusiclist>
</div>

</template>


<script>
import {useRoute} from 'vue-router'
import {onMounted,reactive,provide} from 'vue'

import {getmusicitemlist,getmusiclist} from '@/request/api/item.js'
import itemmusic from '@/components/item/itemmusic.vue'
import itemmusiclist from '@/components/item/itemmusiclist.vue'
export default{
    setup(){
        const state=reactive({
            itemlist:{},//歌单详情
        })
        const state2=reactive({
            songlist:{}//歌单歌曲  ps{}、[]好像没区别都能使用
        })
        onMounted(async ()=>{
            //获取id
            let id=useRoute().query.id;
            let res=await getmusicitemlist(id);
            let result=await getmusiclist(id);
            state.itemlist=res.data.playlist;
           
            state2.songlist=result.data.songs;
            sessionStorage.setItem("itemdetail",JSON.stringify(state));
            console.log(result);
        })

        //setup向下组件传递参数,这里异步传值还是只能传能动态改变的state 
        provide("playlist",state)
        provide("playlist2",state2)
        //如果用proper传递参数到子组件，子组件从刷新时数据可能丢失可以用该方法保存数据
        
        return state; 
    },
    components:{
        itemmusic,
        itemmusiclist
    }
}
</script>