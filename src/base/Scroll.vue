<template>
    <!-- ref接收参数 -->
    <div class="scroll-wrap" ref="scrollRef">
      <div>
          <slot></slot>  
      </div>
    </div>
</template>
<script>
import betterScroll from "better-scroll"
    export default {
        props:{
            scrollRef :{ // 外部接收参数 ，参数位字符串类型
                type:String
            }
        },
        mounted(){
           this.scroll = new betterScroll(this.$refs.scrollRef)
        }
    }
</script>
<style>
    .scroll-wrap{
        width: 100%;
        height: 100%; 
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
</style>
