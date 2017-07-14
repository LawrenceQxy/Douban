<template>
  <div>
  	<m-header title="豆瓣app" :bg="true" fixed>
      <a href="javascript:;" slot="right">分享</a>
    </m-header>
    <div class="page-content">
      <m-swipe swipeid="swipe01" :autoplay="1000" effect="cube">
        <div class="swiper-slide slide01" slot="swiper-con">Slide 1</div>
        <div class="swiper-slide slide02" slot="swiper-con">Slide 2</div>
        <div class="swiper-slide slide03" slot="swiper-con">Slide 3</div>
      </m-swipe>
      <m-cell title="提醒" icon>
        <img src="../../assets/images/ic_mine_notification.png" slot="icon">
        <a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
      </m-cell>
      <m-cell title="设置">
        <a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
      </m-cell>
      <div class="hot-wrap">
        <m-cell title="热门" label="hot"></m-cell>
        <m-cell-media :author="item.target.author.name" :column="item.source_cn" :img="item.target.cover_url" v-for="(item, index) in hotData" :key="item.id">
         <span slot="title">{{ item.title }}</span>
         <span slot="describe">{{ item.target.desc }}</span>
</m-cell-media>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/header'
  import mSwipe from '../../components/swipe'
  import mCell from '../../components/cell'
  import mCellMedia from '../../components/media-cell'
  export default {
  	name: 'index',
  	components: {
  	  mHeader,
  	  mSwipe,
  	  mCell,
  	  mCellMedia
  	},
	data () {
	  return {
	    recommendData: [],
	    hotData: []
	  }
	},
	created () {
	  this.fetchData();
	},
	methods: {
	  fetchData () {
	    this.axios.get('/api/homeData').then((response) => {
	      let data = response.data.data.recommend_feeds;
	      let recommend = [];
	      let hot = [];
	      for (var i in data) {
	      	if (data[i].card && data[i].card.name == '为你推荐') {
	      	  recommend.push(data[i]);
	      	}else {
	      	  hot.push(data[i]);
	      	}
	      }
	      this.recommendData = recommend;
	      this.hotData = hot;
	    })
	  }
	}
  }
</script>

<style lang="less">
  .is-fixed ~ .page-content {
    padding-top: 44px;
  }
  .slide01, .slide02, .slide03 {
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    color: #FFFFFF;
  }
  .slide01 {
    background: #41b883;
  }
  .slide02 {
    background: #364a60;
  }
  .slide03 {
    background: #ea6f5a;
  }
</style>