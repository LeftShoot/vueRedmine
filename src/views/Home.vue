<template>
  <div id="apk">
<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">架构</el-menu-item>
  <el-menu-item index="2">售前</el-menu-item>
  <el-menu-item index="3">市场</el-menu-item>
  <el-menu-item index="4">需求</el-menu-item>
  <el-menu-item index="5">运营</el-menu-item>
  <el-menu-item index="6">技术支持</el-menu-item>
  <el-menu-item index="7">报障</el-menu-item>
  <el-menu-item index="8">看板</el-menu-item>
  <el-menu-item index="9">我的看板</el-menu-item>
  <el-menu-item index="10">BUG</el-menu-item>
  <el-menu-item index="11">报表</el-menu-item>
  <el-menu-item index="12">团队</el-menu-item>
  <el-menu-item index="13">考勤</el-menu-item>
  <el-menu-item index="14" @click="$router.push($router.options.routes[1].children[0].path)">我的</el-menu-item>
</el-menu>
				<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
  </div>
</template>

<script>
   export default {
     data() {
       return {
         activeIndex: '1'
       };
     },
     methods: {
       handleSelect(key, keyPath) {
       }
     }
   }
</script>

<style></style>