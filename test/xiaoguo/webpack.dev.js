const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
module.exports={
	entry:{//入口文件
		main:'./src/main.js'
	},
	mode:'development',//打包模式
	output:{//输出
		filename:'[name].js',//输出名字
		path:path.resolve(__dirname,'./dist'),//输出的路径
		publicPath:'/'//代理路径
	},
	devServer:{//热更新
		contentBase:'dist',//默认指向文件
		overlay:true,
		host:'192.168.43.143'//用本地ip地址打开
	},
	resolve: {//引入vue.js
		alias: {
			'vue$': 'vue/dist/vue.js'
		}
	},
	plugins: [
		// 请确保引入这个插件！
		new VueLoaderPlugin()
	],
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'}
				]
			},
			{
				test:/\.html$/,
				use:[
					{
						loader:'file-loader',
						options:{
							name:'[name].html',
						},
					},
					{loader:'extract-loader'},
					{loader:'html-loader'}
				]
			},
			{
				test:/\.(jpg|png|gif)$/,
				use:[
					{
						loader:'file-loader',
						options:{
							name:'[name].[ext]',
						},
					}
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	}
}