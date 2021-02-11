<template>
  <div v-if="Object.keys(rate).length !== 0" class="detail-rate">
    <div class="rate">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="rate-user">
      <div class="user-message">
        <img :src="rate.list[0].user.avatar" alt="">
        <span>{{rate.list[0].user.uname}}</span>
      </div>
      <div class="user-content">
        <span>{{rate.list[0].content}}</span>
      </div>
      <div class="user-date">
        <span class="date">{{rate.list[0].created | showDate}}</span>
        <span>{{rate.list[0].style}}</span>
      </div>
      <div class="user-images" v-if="rate.list[0].images">
          <img :src="images" v-for="(images,index) in rate.list[0].images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from 'common/utils.js'
  export default {
    name: 'DetailRate',
    props: {
      rate: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    //过滤器函数
    filters:{
      showDate(value){
        //乘以1000转换为毫秒
        const date = new Date(value * 1000)
        //使用js时间格式函数，传入格式
        return formatDate(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped lang="scss">
  .detail-rate {
    padding: 15px 16px;
    border-bottom: 4px solid #eee;
  }

  .rate {
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
  }

  .rate-user {
    font-size: 13px;
  }

  .user-message {
    display: flex;
    padding: 10px 0;
    margin-left: -2px;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }

    span {
      align-self: center;
      margin-left: 6px;
    }
  }

  .user-content {
    line-height: 16px;
    font-weight: 700;
  }

  .user-date {
    padding: 10px 0 10px 0;
    .date{
      margin-right: 6px;
    }
  }

  .user-images {
    display: flex;

    img {
      width: 60px;
      height: 60px;
      margin-right: 3px;
    }
  }
</style>
