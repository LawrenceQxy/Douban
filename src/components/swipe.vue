<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
    </div>
    <!--分页器-->
    <div :class="{'swiper-pagination': pagination}"></div>
  </div>
</template>

<script>
  import '../assets/lib/swiper/js/swiper.js'
  export default {
    props: {
      swipeid: {
        type: String,
        default: ''
      },
      effect: {
        type: String,
        default: 'slide'
      },
      loop: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        defaule: 'horizontal'
      },
      pagination: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Number,
        default: 5000
      },
      paginationType: {
        type: String,
        default: 'bullets'
      }
    },
  	mounted () {
  	  var that = this;
  	  var mySwiper = new Swiper ('.' + that.swipeid, {
  	  	//循环
  	    loop: that.loop,
  	    //分页器
  	    pagination: '.swiper-pagination',
  	    //分页类型
  	    paginationType: that.paginationType,	//可选类型为:fraction,progress,bullets
  	    //自动播放
  	    autoplay: that.autoplay,
  	    //方向
  	    direction: that.direction,
  	    //特效
  	    effect: that.effect		//可选类型:slide,fade,coverflow,cube
  	  })
  	}
  }
</script>

<style lang="less">
  @import '../assets/lib/swiper/css/swiper.css';
  .swiper-pagination-bullet-active {
    background: #FFFFFF;
  }
</style>