<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import { ref } from 'vue';
import axios from 'axios';
import moment from 'moment';

const title = ref('');
const content = ref('');

const token = localStorage.getItem('token');
if(!token) window.location.href = '/';

async function addArticle() {
	try{
    const replacedContent = content.value.replace(/'/g, "''")
        .replace(/"/g, '""')
        .replace(/\\/g, "\\\\");
    console.log(replacedContent);
		const ans = await axios.post('https://www.volcano621.fun/api/add', {
			title: title.value,
			content:replacedContent,
			cat: value.value,
			date: moment(Date.now()).format('YYYY-MM-DD')
		},{
			headers: {
				Authorization: `${token}`
			}
		});
		if(ans.data.code === 500){
			alert(ans.data.err.message);
			return;
		}
		else alert('添加成功');
	}catch(e){
		alert('添加失败');
	}
	
    
}
const value = ref('');
const options = [
		{
				value: '生活杂谈',
				label: '生活杂谈',
		},
		{
				value: '学习笔记',
				label: '学习笔记',
		},
		{
				value: '读书笔记',
				label: '读书笔记',
		},
];



</script>

<template>
    <div class="main">

		<SideBar ></SideBar>
		<div class="body">
			<div class="add-article">
				<div class="add-article__title">添加文章</div>
				<div class="add-article__content">
					<el-form label-width="80px" class="form">
						<el-form-item label="文章标题" class="input">
							<el-input v-model="title" placeholder="请输入文章标题" ></el-input>
						</el-form-item>
						<el-form-item label="文章内容" class="input">
							<el-input type="textarea" v-model="content" placeholder="请输入文章内容"></el-input>
						</el-form-item>
							<el-form-item label="文章标签" class="input">
								<el-select v-model="value" placeholder="请选择">
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
						</el-form-item>
											
						<el-form-item >
							<el-button type="primary" @click="addArticle">添加</el-button>
						</el-form-item>
					</el-form>
				</div>
						
        	</div>
		</div>
        
    </div>
    
</template>

<style lang="scss" >
.main{
    width: 100%;
    display: flex;
    height: 100%;
		>.body{
			width: 800px;
			height: 100%;
			display: flex;
			justify-content: center;
			.add-article {
				width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
				
        padding: 20px;
        .add-article__title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
						color: rgb(21,114,156);
        }
        .add-article__content {
            width: 100%;
            max-width: 600px;
						>.form{
							>.input{
								>label{
									color: rgb(84,215,235);
									font-weight: bold;
								}
							}
						}
					}
        }
    }
		

    
}

textarea{
	height: 300px !important; 
}

</style>