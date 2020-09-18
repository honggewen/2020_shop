<template>
  <div> 
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide> 
  </div>
</template>

<script>
  import FooterGuide from '@/components/FooterGuide/FooterGuide'
  import { reqAddress } from '@/api'
  export default {

    async mounted () {
      const result = await reqAddress('116.36867', 40.10038)
      console.log('result', result)
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus">

</style>>

</style>