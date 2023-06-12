import { createStore } from 'vuex'
import {getmusiclyric} from '@/request/api/item.js'

export default createStore({
  state: {
    playlist:[{
      al:{//默认值
        "id": 35139,
        "name": "追梦痴子心",
        "picUrl": "https://p2.music.126.net/XDncptlBJ4_LN3hLBx-8aw==/19061133579343591.jpg",
        "tns": [],
        "pic_str": "19061133579343591",
        "pic": 19061133579343590
    },
    id:1334775903
    }],
    playlistindex:0,//默认播放列表下标
    isbtnShow:true,//播放按钮的显示
    detailshow:false,//歌曲详情页显示
    musiclyric:{

    },//歌词
    currenttime:0,//当前时间
  },
  getters: {
  },
  mutations: {
    updateisbtnShow:function(state,value){
      //state.isbtnShow=!state.isbtnShow
      state.isbtnShow=value
    },
    updateplaylist:function(state,value){
      
      state.playlist=value
    },
    playlistindex(state,value){
      
     
      state.playlistindex=value
    },
    updatedetailshow(state){
      state.detailshow=!state.detailshow
    },
    updatemusiclyric(state,value){
      state.musiclyric=value;
    },
    updatecurrenttime(state,value){
      console.log(value);
      state.currenttime=value;
    }
  },
  actions: {
    async getlyric(context,value){
      let res=await getmusiclyric(value)
      context.commit("updatemusiclyric",res.data.lrc)
    }
  },
  modules: {
  }
})
