<template>
  
    <topnav></topnav>
    <SwiperTop></SwiperTop>
    <icronList></icronList>
    <musicList></musicList>
  
</template>

<script>
import topnav from "@/components/home/topnav.vue"
import SwiperTop from "@/components/home/SwiperTop.vue"
import icronList from "@/components/home/icronlist.vue"
import musicList from "@/components/home/musiclist.vue"
export default {
  name: 'HomeView',
  components: {
   topnav,
   SwiperTop,
  icronList,
  musicList
  }
}
</script>
