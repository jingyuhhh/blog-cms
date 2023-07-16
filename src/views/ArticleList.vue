<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'


</script>

<template>
	<div class="main">
		<SideBar></SideBar>
    <div class="body">
        <el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>所有文章</span>
						
					</div>
					<div v-for="o in 11" :key="o" class="text item">
						{{'列表内容 ' + o }}
						<el-button style="float: right; padding: 3px 0" type="text">删除</el-button>
						<el-button style="float: right; padding: 3px 0;" type="text">编辑</el-button>
					</div>
					<div class="pagination">
						<el-pagination
							background
							layout="prev, pager, next"
							:total="100">
						</el-pagination>
					</div>
					
			</el-card>
    </div>
	</div>
    
</template>

<style lang="scss" scoped>

.main{
	display: flex;

}

.pagination{
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;

}

.text{
	font-size: 18px !important;
}

.el-button{
	margin: 0 5px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
	.clearfix{
		height: 50px;
		>span{
			font-size: 20px;
			font-weight: bold;
		}
	}
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
		margin-top: 20px;
    width: 480px;
  }
</style>