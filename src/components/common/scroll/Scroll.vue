<template>
  <!-- ref如果是绑定在组件中的，那么通过this.$refs.refname获取到的是一个组件对象 -->
  <!-- ref如果是绑定在普通元素中的，那么通过this.$refs.refname获取到的是一个元素对象 -->

  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  components: {},
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 1.创建betterscroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      // 有了pullUpload默认probetype为3
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      click: true,
    });
    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
     this.$emit('scroll',position)
    });
    // 3.监听上拉事件
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })

  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
};
</script>

<style>
</style>
