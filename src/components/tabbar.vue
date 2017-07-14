<template>
  <div class="m-tabbar">
    <slot></slot>
  </div>
</template>

<script>
  import mTabbarItem from './tabbar-item'
  export default {
    props: ['value']
  }
</script>

<style lang="less">
  .m-tabbar {
  	display: flex;
  	flex-direction: row;
  	position: fixed;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	overflow: hidden;
  	height: 50px;
  	background: #FFFFFF;
  	border: 1px solid #E4E4E4;
  }
</style>