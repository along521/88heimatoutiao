<template>
  <!-- 布局 -->
  <el-container>
  <!-- 左右 左侧栏 -->
  <el-aside>左侧内容</el-aside>

  <!-- 大容器 -->
  <el-container>
    <!-- 上 头部 -->
    <el-header>头部</el-header>

    <!-- 下 中间-->
    <el-main>
      <!-- 二级路由容器 -->
      <router-view></router-view>
    </el-main>
  </el-container>

  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  }
}
</script>
