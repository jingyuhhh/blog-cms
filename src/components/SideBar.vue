<script setup lang="ts">

</script>

<template>

    <el-row class="tac">
        <el-col :span="12">
            <h3>导航</h3>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                </template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <RouterLink to="/add"><el-menu-item index="1-1">新增文章</el-menu-item></RouterLink>
                <RouterLink to="/list"><el-menu-item index="1-2">文章列表</el-menu-item></RouterLink>
                </el-menu-item-group>
            </el-submenu>

            </el-menu>
        </el-col>
  
    </el-row>

</template>

<style lang="scss" >

    
    .tac{
        width: 400px ;
        min-width: 200px;
        >.el-col{
            height: 100vh;
            opacity: 75%;
            background-color: #fff;
            color: rgb(21,114,156);
            >h3{
                margin: 20px;
            }
        }
    }

</style>