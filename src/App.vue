<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <!--使用router-link组件来导航-->
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 保留组件状态或避免重新渲染(把组件的状态保存在内存中) -->
    <keep-alive>
      <!--路由出口-->
      <!--路由匹配到的组件将渲染到这里-->
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
  import {urlParse} from './common/js/util'
  import header from './components/header/header.vue'

  const ERR_OK = 0

  export default {
    data () {
      return {
        seller: {
          // 立即执行函数：(function(){...})()
          id: (() => {
            // 获取url中的seller的id
            let queryParam = urlParse()
            return queryParam.id
          })()
        }
      }
    },
    created () {
      this.$http.get('/api/seller?id=' + this.seller.id).then(res => {
        res = res.body
        if (res.errno === ERR_OK) {
          // 给对象扩展属性，由原先的id属性加上从后台获取的数据属性，避免id被覆盖掉
          this.seller = Object.assign({}, this.seller, res.data)
        }
      })
    },
    components: {
      'v-header': header
    }
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display: flex /*经典移动端布局*/
    width: 100%
    height: 40px /*移动端的设计页面都是按照2倍大小来设计的*/
    line-height: 40px
  // border-bottom :1px solid rgba(7,17,27,0.1)/* 透明度0.1 */
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>




