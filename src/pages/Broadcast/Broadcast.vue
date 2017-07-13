<template>
  <div>
  	<m-header title="广播" fixed>
      <a href="javascript:;" slot="right">
        <img class="m-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/>
      </a>
      <a href="javascript:;">
        <img src="../../assets/images/ic_chat_green.png" class="m-icon-img"/>
      </a>
  	</m-header>
  </div>
</template>

<script>
  import mHeader from '../../component/header'
  export default {
    name: 'broadcast',
    components: {
      mHeader
    }
  }
</script>
