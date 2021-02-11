<template>
  <div v-if="Object.keys(params).length !== 0" class="detail-params">
    <table v-for="(table,index) in params.sizes" :key="index" class="top-table">
      <tr v-for="(tr,indey) in table" :key = "indey">
        <td v-for="(td,indez) in tr" :key = "indez">
          {{td}}
        </td>
      </tr>
    </table>
    <table class="bottom-table">
      <tr v-for="(tr2,indey2) in params.infos" :key="indey2">
        <td class="meta">
          {{tr2.key}}
        </td>
        <td class="data">
          {{tr2.value}}
        </td>
      </tr>
    </table>
    <div class="params-img" v-if="params.image.length !== 0">
      <img :src="params.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailParams',
    props:{
      params:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .detail-params{
    padding: 0 15px 20px 15px;
    border-bottom: 5px solid #f3f3f3;
  }
  .top-table{
    width: 100%;
    font-size: 12px;
    tr{
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      border-bottom:2px solid #eee;
    }
    td{
      flex: 1;
    }
  }

  .bottom-table{
    width: 100%;
    tr{
      display: flex;
      align-items: center;
      padding: 2px 0;
      border-bottom:2px solid #eee;
      height: 42px;
      font-size: 12px;
    }
    .meta{
      flex: 1;
    }
    .data{
      flex: 2;
      color: $colorTint;
    }
  }

  .params-img{
    img{
      width: 100%;
    }
    margin-top: 15px;
  }
</style>
