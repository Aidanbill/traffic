<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'" class="sidebar-container">
      <div class="logo" :class="{ 'logo-collapse': isCollapse }">
        <span v-if="!isCollapse">交通管理系统</span>
        <span v-else>系统</span>
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical"
        :collapse="isCollapse"
        background-color="#1d2b3a"
        text-color="#fff"
        active-text-color="#409EFF"
        router>
        <el-menu-item index="/dashboard">
          <i class="el-icon-menu"></i>
          <span slot="title">仪表盘</span>
        </el-menu-item>

        <!-- 系统管理 -->
        <el-submenu index="system">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item index="/system/user">
            <i class="el-icon-user"></i>
            <span slot="title">用户信息管理</span>
          </el-menu-item>
        </el-submenu>

        <!-- 基础数据管理 -->
        <el-submenu index="basic">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>基础数据管理</span>
          </template>
          <el-menu-item index="/basic/device">
            <i class="el-icon-monitor"></i>
            <span slot="title">设备管理</span>
          </el-menu-item>
          <el-menu-item index="/basic/video">
            <i class="el-icon-video-camera"></i>
            <span slot="title">视频数据管理</span>
          </el-menu-item>
        </el-submenu>

        <!-- 交通违法行为处理 -->
        <el-submenu index="traffic">
          <template slot="title">
            <i class="el-icon-warning"></i>
            <span>交通违法处理</span>
          </template>
          <el-menu-item index="/traffic/violation">
            <i class="el-icon-document"></i>
            <span slot="title">交通违法信息管理</span>
          </el-menu-item>
        </el-submenu>

        <!-- 天气系统 -->
        <el-submenu index="weather">
          <template slot="title">
            <i class="el-icon-sunny"></i>
            <span>天气系统</span>
          </template>
          <el-menu-item index="/weather/manage">
            <i class="el-icon-data-line"></i>
            <span slot="title">天气数据管理</span>
          </el-menu-item>
        </el-submenu>

        <!-- 数据统计 -->
        <el-submenu index="statistics">
          <template slot="title">
            <i class="el-icon-data-analysis"></i>
            <span>数据统计</span>
          </template>
          <el-menu-item index="/statistics/dashboard">
            <i class="el-icon-data-board"></i>
            <span slot="title">驾驶舱页面</span>
          </el-menu-item>
          <el-menu-item index="/statistics/manage">
            <i class="el-icon-folder"></i>
            <span slot="title">报告管理</span>
          </el-menu-item>
        </el-submenu>

        <!-- 通知系统 -->
        <el-submenu index="notification">
          <template slot="title">
            <i class="el-icon-bell"></i>
            <span>通知系统</span>
          </template>
          <el-menu-item index="/notification/send">
            <i class="el-icon-message"></i>
            <span slot="title">发送通知</span>
          </el-menu-item>
          <el-menu-item index="/notification/manage">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">通知管理</span>
          </el-menu-item>
        </el-submenu>

        <!-- 反馈系统 -->
        <el-menu-item index="/feedback">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">反馈信息管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div class="header-left">
          <i 
            :class="['el-icon-s-fold', 'header-trigger', { 'is-collapse': isCollapse }]" 
            @click="toggleSidebar"
          ></i>
          <div class="header-title">智慧交通管理平台</div>
        </div>
        <div class="header-right">
          <div class="header-info">
            <el-badge is-dot class="notice-badge">
              <i class="el-icon-bell"></i>
            </el-badge>
            <el-divider direction="vertical"></el-divider>
          </div>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar size="small" class="user-avatar">{{ username.charAt(0) }}</el-avatar>
              {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="profile">个人信息</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      
      <!-- 主要内容区 -->
      <el-main class="main-container">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutPage',
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    username() {
      return this.$store.state.user?.name || '管理员'
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapse = !this.isCollapse
    },
    handleCommand(command) {
      if (command === 'logout') {
        this.$store.dispatch('logout').then(() => {
          this.$router.push('/login')
        })
      }
    }
  }
}
</script>

<style scoped>
/* 基础布局 */
.layout-container {
  height: 100vh;
}

/* 侧边栏样式 */
.sidebar-container {
  transition: width 0.3s;
  background-color: #1d2b3a;
}

.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #1d2b3a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s;
}

.logo-collapse {
  font-size: 16px;
}

/* 菜单样式 */
.el-menu {
  border-right: none;
  background-color: #1d2b3a;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}

.el-menu--collapse {
  width: 64px;
}

.el-menu-item, .el-submenu__title {
  color: #ffffff !important;
}

.el-menu-item:hover, .el-submenu__title:hover {
  background-color: #263445 !important;
}

.el-menu-item.is-active {
  background-color: #263445 !important;
  color: #409EFF !important;
}

/* 头部样式 */
.el-header {
  background: #1d2b3a;
  color: #ffffff;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.header-left {
  display: flex;
  align-items: center;
}

.header-title {
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  color: #ffffff;
}

.header-trigger {
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0 15px;
  color: #ffffff;
}

.header-trigger:hover {
  color: #409EFF;
}

.header-trigger.is-collapse {
  transform: rotate(180deg);
}

/* 头部右侧样式 */
.header-right {
  display: flex;
  align-items: center;
}

.header-info {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.notice-badge {
  margin-right: 20px;
  font-size: 18px;
  cursor: pointer;
  color: #ffffff;
  transition: color 0.3s;
}

.notice-badge:hover {
  color: #409EFF;
}

.el-divider--vertical {
  height: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 15px;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s;
  padding: 0 8px;
  border-radius: 4px;
}

.el-dropdown-link:hover {
  color: #409EFF;
  background: rgba(255, 255, 255, 0.1);
}

.user-avatar {
  margin-right: 8px;
  background-color: #263445;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

/* 主要内容区域 */
.main-container {
  padding: 0;
  background-color: #f5f5f5;
}

.el-main {
  height: calc(100vh - 60px);
  overflow-y: auto;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background: #c0c4cc;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #909399;
}

::-webkit-scrollbar-track {
  background: #f5f5f5;
}
</style> 