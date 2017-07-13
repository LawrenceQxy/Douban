<template>
	<!--a标签点击触发父组件的input事件并将当前的id传给父组件，更改父组件的value-->
  <a class="m-tabbar-item" :class="{'is-active':isActive}" @click="goToRouter">
    <span class="m-tabbar-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></span>
    <span class="m-tabbar-item-icon" v-show="isActive"><slot name="icon-active"></slot></span>
    <span class="m-tabbar-item-text"><slot></slot></span>
  </a>
</template>

<script>
  export default {
    props: {
      id: {
        type: String
      },
      isRouter: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isActive () {
        if (this.$parent.value === this.id) {
          return true
        }
      }
    },
    methods: {
      goToRouter () {
        this.$parent.$emit('input', this.id)
        //判断是否为路由跳转
        if (this.isRouter) {
        	//根据id跳转到相应的路由页面
        	this.$router.push(this.id)
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/less/var.less";
  .m-tabbar-item {
    flex: 1;
    text-align: center;
    .m-tabbar-item-icon {
      display: block;
      padding-top: 2px;
      img {
        width: 28px;
        height: 28px;
      }
    }
    .m-tabbar-item-text {
      display: block;
      font-size: 10px;
      color: #949494;
    }
    &.is-active {
      .m-tabbar-item-text {
        color: @tabbarActiveColor;
      }
    }
  }
</style>
