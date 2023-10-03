<template>
    <div class="common-layout">
        <el-container>

            <!-- 侧边栏 -->
            <el-aside width="210px">
                <!-- 侧边栏的菜单 -->
                <el-menu default-active="1" class="el-menu-vertical-demo" :router="true">
                    <div class="title">通用后台管理系统</div>
                    <!-- 菜单1 -->
                    <el-menu-item index="home">
                        <el-icon>
                            <House />
                        </el-icon>
                        <span>首页</span>
                    </el-menu-item>

                    <!-- 菜单2 -->
                    <el-menu-item index="home">
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>系统概览</span>
                    </el-menu-item>


                    <!-- 菜单3 -->
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <User />
                            </el-icon>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group title="管理员管理">
                            <el-menu-item index="3-1">用户管理员</el-menu-item>
                            <el-menu-item index="3-2">消息管理员</el-menu-item>
                            <el-menu-item index="3-3">产品管理员</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="员工管理">
                            <el-menu-item index="3-4">用户列表</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>

                    <!-- 菜单4 -->
                    <el-sub-menu index="4">
                        <template #title>
                            <el-icon>
                                <TakeawayBox />
                            </el-icon>
                            <span>产品管理</span>
                        </template>
                        <el-menu-item-group title="入库管理">
                            <el-menu-item index="4-1">产品列表</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="出库管理">
                            <el-menu-item index="4-2">出库列表</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>


                    <!-- 消息管理 -->
                    <el-sub-menu index="5">
                        <template #title>
                            <el-icon>
                                <Message />
                            </el-icon>
                            <span>消息管理</span>
                        </template>
                        <el-menu-item-group title="消息管理">
                            <el-menu-item index="5-1">消息列表</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="回收站">
                            <el-menu-item index="5-2">回收站</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>


                    <el-menu-item index="6">
                        <el-icon>
                            <GoodsFilled />
                        </el-icon>
                        <span>合同管理</span>
                    </el-menu-item>
                    <el-menu-item index="7">
                        <el-icon>
                            <List />
                        </el-icon>
                        <span>操作日志</span>
                    </el-menu-item>
                    <el-menu-item index="8">
                        <el-icon>
                            <Checked />
                        </el-icon>
                        <span>登陆日志</span>
                    </el-menu-item>
                    <el-menu-item index="9">
                        <el-icon>
                            <Tools />
                        </el-icon>
                        <span>系统设置</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <!-- 右侧内容 -->
            <el-container>

                <!-- 头部 -->
                <el-header>
                    <span class="header-left-content">欢迎</span>
                    <div class="header-right-contene">

                        <!-- 图标 -->
                        <el-icon :size="25">
                            <Message />
                        </el-icon>

                        <!-- 头像 -->
                        <div class="block">
                            <el-avatar :size="24" :src="circleUrl" />
                        </div>

                        <!-- 下拉框 -->
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                设置
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>设置账号</el-dropdown-item>
                                    <el-dropdown-item>更改头像</el-dropdown-item>
                                    <el-dropdown-item @click="logoutUser">退出登陆</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </el-header>

                <!-- 核心部分 -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>

        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
const router = useRouter()


const logoutUser = () => {
    router.push('/login')
}
</script>

<style lang="scss" scoped>
// 侧边栏
.el-aside {
    height: 100vh;
    background-color: #12151c;
    overflow-x: hidden; // 隐藏滚动条

    // 菜单栏
    .el-menu {
        background-color: #12151c;
        color: aliceblue;
        width: 210px;

        // 菜单标题
        .title {
            padding: 20px;
            display: flex;
            justify-content: center;
            color: azure;
            font-weight: bold;
        }

        // 菜单项
        .el-menu-item,
        .el-menu-item {
            color: #ffff
        }

    }


}

.el-header {
    display: flex;
    height: 55px;
    justify-content: space-between;
    align-items: center;
    background-color: #12151c;
    color: #c1c6c8;

    // 欢迎语
    .header-left-content {
        font-size: 14px;
        font-weight: bold;
    }

    .header-right-contene {
        width: 160px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #c1c6c8;
    }

}

// 单级菜单的hover样式
.el-menu-item:hover {
    background-color: #006eff;
}

// 多级菜单的hover样式
:deep(.el-sub-menu:hover) {
    background-color: #006eff;
}

// 多级子菜单的hover样式
:deep(.el-sub-menu__title:hover) {
    background-color: #006eff;
}

:deep(.el-sub-menu__title) {
    color: #ffff
}

:deep(.el-menu--inline) {
    background-color: #12151c;
}
</style>