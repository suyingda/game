<template>
  <div class="weui-tabbar">
<!--     <group>
  <cell is-link title="Simple" link="/component/tabbar-simple"></cell>
  <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
</group> -->
    <tabbar >
      <tabbar-item>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
<style  scoped>
    .weui-tabbar{
        position: fixed !important;
        bottom:0;
        left:0;
        right:0;
    }
</style>

