<template>
  <router-view/>
  <footermusic></footermusic>
</template>


<script>
import footermusic from '@/components/item/footermusic.vue'
  export default{
    components:{
      footermusic
    }
  }
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
//对图标大小进行规范
.icon{
  width: .5rem;
  height: .5rem;
}
a{
  color: #000;
}
</style>
