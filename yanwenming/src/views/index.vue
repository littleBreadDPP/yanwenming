<template>
	<div class="app-index">
		<header id="header" class="mui-bar mui-bar-transparent">
			<div id="my-header"> 
				<img src="../img/logo01.png" alt="">
				<div>
					<span class="mui-icon mui-icon-search"></span>
					<input type="text" placeholder="新品上市"  v-model="kwords" @keyup.enter="search">
				</div>
				<a href="#" @click="login">
					<span v-html="html"></span>
				</a>				
			</div>
		</header>
		<mt-swipe :auto="3000" class="mt-swipe" >
			<mt-swipe-item>
				<img src="../img/banner.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../img/banner01.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../img/banner.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../img/banner01.jpg" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<mt-swipe class="swipe" :auto="10000" >
			<mt-swipe-item>
				<ul>
					<li>
						<router-link to="/goodlist">
							<img src="../img/nav_icon01.jpg" alt="">
							<div>经典男鞋</div>
						</router-link>
					</li>
					<li>
						<router-link to="/goodlist">
							<img src="../img/nav_icon02.jpg" alt="">
							<div>女鞋</div>
						</router-link>
					</li>
					<li>
						<router-link to="/goodlist">
							<img src="../img/nav_icon03.jpg" alt="">
							<div>T恤</div>
						</router-link>
					</li>
					<li>
						<router-link to="/goodlist">
							<img src="../img/nav_icon04.jpg" alt="">
							<div>外套/外衣</div>
					  </router-link>
					</li>
					<li>
						<router-link to="/goodlist">
							<img src="../img/nav_icon05.jpg" alt="">
							<div>夏季新款</div>
					  </router-link>
					</li>
					<li>
						<router-link to="/goodlist">
							<img src="../img/nav_icon06.jpg" alt="">
							<div>户外箱包</div>
					  </router-link>
					</li>
					<li>
						<router-link to="/goodlist">
							<img src="../img/nav_icon07.jpg" alt="">
							<div>体育器材</div>
					  </router-link>
					</li>
					<li>
						<router-link to="/goodlist">
							<img src="../img/nav_icon08.jpg" alt="">
							<div>积分专区</div>
					  </router-link>
					</li>
				</ul>
			</mt-swipe-item>
			<mt-swipe-item>
				<ul>
					<li>
						<router-link to="/goodlist">
							<img src="../img/nav_icon04.jpg" alt="">
							<div>其他栏目</div>
						</router-link>
					</li>
					<li>
						<router-link to="/goodlist">
							<img src="../img/nav_icon07.jpg" alt="">
							<div>健身器材</div>
						</router-link>
					</li>
				</ul>
			</mt-swipe-item>
		</mt-swipe>
		<div id="notice">
			<span>
				<img src="../img/news_tit.png" alt="">
			</span>
			<ul :class="{anim:animate==true}">
				<li v-for="(list,i) in lists" :key="i">
					<a href="#">{{list.contain}}</a>
				</li>
			</ul>
		</div>
		<div id="ad" >
			<img src="../img/bg_sj.jpg" alt="">
		</div>
		<div id="hotsell">
			<div id="sell_title">
				<h1><a href="#">热销品类</a></h1>
				<i></i>
			</div>
			<div id="hotsell_contain">
				<div id="zuo1">
						<mt-swipe :auto="3000" class="swipe">
								<mt-swipe-item>
									<img src="../img/pic01.jpg" alt="">
									<p>颜文明旗舰店Classic al运动鞋男/女 男鞋头</p>
									<span>
										<em>￥699.00</em>
										<i>￥599.00</i>
									</span>
								</mt-swipe-item>
								<mt-swipe-item>
									<img src="../img/pic03.jpg" alt="">
									<p>李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)</p>
									<span>
										<em>￥399.00</em>
										<i>￥199.00</i>
									</span>
								</mt-swipe-item>
								<mt-swipe-item>
									<img src="../img/pic08.jpg" alt="">
									<p>香港颜文明 男式牛皮经典网球运动鞋时尚复古休闲鞋 1517104正品</p>
									<span>
										<em>￥399.00</em>
										<i>￥199.00</i>
									</span>
								</mt-swipe-item>
							</mt-swipe>
				</div>
				<div id="you">
					<div id="youtop">
							<img src="../img/index_ad_pic (2).jpg" alt="">
					</div>
					<div id="youbottom">
						<div>
							<img src="../img/index_ad_pic (3).jpg" alt="">
						</div>
						<div>
							<img src="../img/index_ad_pic (6).jpg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<mt-swipe :auto="4000" class="swipe3" :show-indicators="false">
				<mt-swipe-item>
					<img src="../img/ad_pic01.jpg" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../img/ad_pic02.jpg" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../img/ad_pic03.jpg" alt="">
				</mt-swipe-item>
		</mt-swipe>
		<div class="recommend">
			<div id="sell_title">
				<h1><a href="#">新品推荐</a></h1>
				<i></i>
			</div>
			<ul>
				<li>
					<router-link to="/goodetails/0">
							<img src="../img/pic01.jpg" alt="">
							<p>颜文明专业网鞋复古休闲运动鞋</p>
							<span>￥699.00</span>
					</router-link>
				</li>
				<li>
					<router-link to="/goodetails/1">
							<img src="../img/pic02.jpg" alt="">
							<p>颜文明专业网鞋</p>
							<span>￥299.00</span>
					</router-link>
				</li>
				<li>
					<router-link to="/goodetails/2">
							<img src="../img/pic03.jpg" alt="">
							<p>李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)</p>
							<span>￥499.00</span>
					</router-link>
				</li>
				<li>
					<router-link to="/goodetails/">
							<img src="../img/pic08.jpg" alt="">
							<p>颜文明专业网鞋复古休闲运动鞋</p>
							<span>￥399.00</span>
					</router-link>
				</li>
				<li>
					<router-link to="/goodetails/">
							<img src="../img/pic05.jpg" alt="">
							<p>耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋</p>
							<span>￥299.00</span>
					</router-link>
				</li>
				<li>
					<router-link to="/goodetails/">
							<img src="../img/pic06.jpg" alt="">
							<p>Adidas阿迪达斯男装 新款休闲男装</p>
							<span>￥199.00</span>
					</router-link>
				</li>
			</ul>
			<div id="loadmore">
				<a href="#">更多新品></a>
			</div>
		</div>
		<div class="brand">
			<div id="sell_title">
				<h1><a href="#">品牌专区</a></h1>
				<i></i>
			</div>
			<div>
				<ul :class="{my_barnd:animate2==true}">
					<li v-for="(photo,i) of photos" :key="i"><a href="#">
						<img :src="photo.pic" alt="" class="picture">
						<p v-text="photo.name" class="p"></p>
					</a></li>
				</ul>
			</div>
		</div>
		<mt-swipe :auto="4000" class="swipe3" :show-indicators="false">
				<mt-swipe-item>
					<img src="../img/ad_pic01.jpg" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../img/ad_pic02.jpg" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../img/ad_pic03.jpg" alt="">
				</mt-swipe-item>
		</mt-swipe>
		<div class="recommend">
				<div class="sell_title2">
					<a href="#">经典男鞋</a>
					<a href="#">经典女鞋</a>
				</div>
				<mt-swipe :auto="0" :show-indicators="false">
						<mt-swipe-item>
								<ul>
										<li>
											<router-link to="/goodetails/0">
													<img src="../img/pic01.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥699.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/1">
													<img src="../img/pic02.jpg" alt="">
													<p>颜文明专业网鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/4">
													<img src="../img/pic05.jpg" alt="">
													<p>颜文明专业网鞋复古经典休闲运动鞋</p>
													<span>￥499.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/7">
													<img src="../img/pic08.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥399.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/4">
													<img src="../img/pic05.jpg" alt="">
													<p>耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/1">
													<img src="../img/pic02.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥199.00</span>
											</router-link>
										</li>
								</ul>
								<div id="loadmore">
									<a href="#">更多经典男鞋></a>
								</div>
						</mt-swipe-item>
						<mt-swipe-item>
								<ul>
										<li>
											<router-link to="/goodetails/0">
													<img src="../img/pic01.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥699.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/1">
													<img src="../img/pic02.jpg" alt="">
													<p>颜文明专业网鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/2">
													<img src="../img/pic03.jpg" alt="">
													<p>李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)</p>
													<span>￥499.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/7">
													<img src="../img/pic08.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥399.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/4">
													<img src="../img/pic05.jpg" alt="">
													<p>耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/5">
													<img src="../img/pic06.jpg" alt="">
													<p>Adidas阿迪达斯男装 新款休闲男装</p>
													<span>￥199.00</span>
											</router-link>
										</li>
								</ul>
								<div id="loadmore">
									<a href="#">更多经典女鞋></a>
								</div>
						</mt-swipe-item>
				</mt-swipe>	
		</div>
		<div class="recommend">
				<div class="sell_title2">
					<a href="#">男装专区</a>
					<a href="#">女装专区</a>
				</div>
				<mt-swipe :auto="0" :show-indicators="false">
						<mt-swipe-item>
								<ul>
										<li>
											<router-link to="/goodetails/5">
													<img src="../img/pic06.jpg" alt="">
													<p>Adidas阿迪达斯男装 新款休闲男装</p>
													<span>￥699.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/1">
													<img src="../img/pic02.jpg" alt="">
													<p>颜文明专业网鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/4">
													<img src="../img/pic05.jpg" alt="">
													<p>颜文明专业网鞋复古经典休闲运动鞋</p>
													<span>￥499.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/2">
													<img src="../img/pic03.jpg" alt="">
													<p>李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)</p>
													<span>￥399.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/0">
													<img src="../img/pic01.jpg" alt="">
													<p>耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/1">
													<img src="../img/pic02.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥199.00</span>
											</router-link>
										</li>
								</ul>
								<div id="loadmore">
									<a href="#">更多精品男装></a>
								</div>
						</mt-swipe-item>
						<mt-swipe-item>
								<ul>
										<li>
											<router-link to="/goodetails/0">
													<img src="../img/pic01.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥699.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/1">
													<img src="../img/pic02.jpg" alt="">
													<p>颜文明专业网鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/2">
													<img src="../img/pic03.jpg" alt="">
													<p>李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)</p>
													<span>￥499.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/7">
													<img src="../img/pic08.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥399.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/4">
													<img src="../img/pic05.jpg" alt="">
													<p>耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/5">
													<img src="../img/pic06.jpg" alt="">
													<p>Adidas阿迪达斯男装 新款休闲男装</p>
													<span>￥199.00</span>
											</router-link>
										</li>
								</ul>
								<div id="loadmore">
									<a href="#">更多精品女装></a>
								</div>
						</mt-swipe-item>
				</mt-swipe>	
		</div>
		<div class="recommend">
				<div class="sell_title2">
					<a href="#">运动鞋系列</a>
					<a href="#">体育用品</a>
					<a href="#">体育器材</a>
				</div>
				<mt-swipe :auto="0" :show-indicators="false">
						<mt-swipe-item>
								<ul>
										<li>
											<router-link to="/goodetails/0">
													<img src="../img/pic01.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥699.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/1">
													<img src="../img/pic02.jpg" alt="">
													<p>颜文明专业网鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/4">
													<img src="../img/pic05.jpg" alt="">
													<p>颜文明专业网鞋复古经典休闲运动鞋</p>
													<span>￥499.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/7">
													<img src="../img/pic08.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥399.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/0">
													<img src="../img/pic01.jpg" alt="">
													<p>耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/1">
													<img src="../img/pic02.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥199.00</span>
											</router-link>
										</li>
								</ul>
								<div id="loadmore">
									<a href="#">更多运动鞋系列></a>
								</div>
						</mt-swipe-item>
						<mt-swipe-item>
								<ul>
										<li>
											<router-link to="/goodetails/0">
													<img src="../img/pic01.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥699.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/3">
													<img src="../img/pic04.jpg" alt="">
													<p>颜文明专业网鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/2">3

													<img src="../img/pic03.jpg" alt="">
													<p>李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)</p>
													<span>￥499.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/7">
													<img src="../img/pic08.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥399.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/4">
													<img src="../img/pic05.jpg" alt="">
													<p>耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/5">
													<img src="../img/pic06.jpg" alt="">
													<p>Adidas阿迪达斯男装 新款休闲男装</p>
													<span>￥199.00</span>
											</router-link>
										</li>
								</ul>
								<div id="loadmore">
									<a href="#">更多体育用品></a>
								</div>
						</mt-swipe-item>
						<mt-swipe-item>
								<ul>
										<li>
											<router-link to="/goodetails/3">
													<img src="../img/pic04.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥699.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/1">
													<img src="../img/pic02.jpg" alt="">
													<p>颜文明专业网鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/2">
													<img src="../img/pic03.jpg" alt="">
													<p>李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)</p>
													<span>￥499.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/7">
													<img src="../img/pic08.jpg" alt="">
													<p>颜文明专业网鞋复古休闲运动鞋</p>
													<span>￥399.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/4">
													<img src="../img/pic05.jpg" alt="">
													<p>耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋</p>
													<span>￥299.00</span>
											</router-link>
										</li>
										<li>
											<router-link to="/goodetails/5">
													<img src="../img/pic06.jpg" alt="">
													<p>Adidas阿迪达斯男装 新款休闲男装</p>
													<span>￥199.00</span>
											</router-link>
										</li>
								</ul>
								<div id="loadmore">
									<a href="#">更多体育器材></a>
								</div>
						</mt-swipe-item>
				</mt-swipe>	
		</div>
		<div class="recommend2 brand" id="part">
				<div class="sell_title2">
					<a href="#">配件专区</a>
					<span>更多>></span>
				</div>
				<ul :class="{my_part:animate3==true}">
					<li v-for="(part,i) of parts" :key="i"><a href="#">
						<img :src="part.p" alt="" class="picture2">
						<p v-text="part.thing" class="p2"></p>
						<span class="price">￥99.00</span>
						</a>
					</li>
				</ul>
		</div>
		<mt-swipe :auto="4000" class="swipe3" :show-indicators="false">
				<mt-swipe-item>
					<img src="../img/ad_pic01.jpg" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../img/ad_pic02.jpg" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../img/ad_pic03.jpg" alt="">
				</mt-swipe-item>
		</mt-swipe>
		<div id="choice">
			<div id="sell_title">
				<h1><a href="#">精选特选</a></h1>
				<i></i>
			</div>
			<ul>
					<li>
							<router-link to="/goodetails/0">
									<img src="../img/pic01.jpg" alt="">
									<p>颜文明旗舰店Classical运动鞋男/女 男鞋头层牛皮休闲专业网球鞋</p>
									<span>￥699.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/1">
									<img src="../img/pic02.jpg" alt="">
									<p>颜文明旗舰店Classical运动鞋男/女 男鞋头层牛皮休闲专业网球鞋</p>
									<span>￥299.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/2">
									<img src="../img/pic03.jpg" alt="">
									<p>李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)</p>
									<span>￥499.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/3">
									<img src="../img/pic04.jpg" alt="">
									<p>斯伯丁Spalding 比赛篮球74-604Y 室内外PU耐磨7号NBA蓝球</p>
									<span>￥399.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/4">
									<img src="../img/pic05.jpg" alt="">
									<p>耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋 M9055 酷黑 42</p>
									<span>￥299.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/5">
									<img src="../img/pic06.jpg" alt="">
									<p>Adidas阿迪达斯男装 新款休闲男装</p>
									<span>￥199.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/6">
									<img src="../img/pic07.jpg" alt="">
									<p>耐克NIKE体育用品男帽女帽 2018新款网球</p>
									<span>￥199.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/7">
									<img src="../img/pic08.jpg" alt="">
									<p>香港颜文明男式牛皮经典网球运动鞋时尚复古休闲鞋 1517104正品</p>
									<span>￥199.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/0">
									<img src="../img/pic01.jpg" alt="">
									<p>男式牛皮经典网球运动鞋时尚复古休闲鞋 1517104正品</p>
									<span>￥199.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/1">
									<img src="../img/pic02.jpg" alt="">
									<p>香港颜文明 男式牛皮经典网球运动鞋时尚复古休闲鞋 1517104正品</p>
									<span>￥199.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/2">
									<img src="../img/pic03.jpg" alt="">
									<p>李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)</p>
									<span>￥199.00</span>
							</router-link>
						</li>
						<li>
							<router-link to="/goodetails/7">
									<img src="../img/pic08.jpg" alt="">
									<p>香港颜文明 男式牛皮经典网球运动鞋时尚复古休闲鞋 1517104正品</p>
									<span>￥199.00</span>
							</router-link>
						</li>
			</ul>
		</div>
		<div id="more">
			<h2>加载更多...</h2>
		</div>
		<div id="to-top" v-show="totopshow" @click="toTop" >
			<a href="#"></a>
		</div>
		<div class="footer">
			<h2>
				<router-link to="/login">登录</router-link>
				<a href="#">注册</a>
				<a href="#">商家中心</a>
				<a href="#">门店查询</a>
			</h2>
			<h3>
				<span><a href="#">关于我们</a></span>
				<span><a href="#">购物指南</a></span>
				<span><a href="#">支付方式</a></span>
				<span><a href="#">售后服务</a></span>
			</h3>
			<div>
				<p>Copyright © 2018  贵州颜文明体育用品有限公司</p>
				<p>联系地址：贵州省清镇市巢东路9号颜文明大厦</p>
				<p>全国服务热线：400-6679-555   技术支持：<a href="https://www.wangid.com/" target="blank">WangID驰通网络</a></p>
			</div>
		</div>		
		<nav class="fix_foot">
				<router-link class="foot" to="/index">
					<span class="mui-icon mui-icon-home active"></span><br>
					<span class="mui-tab-label">首页</span>
				</router-link>
				<router-link class="foot" to="/goodlist">
					<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span><br>
					<span class="mui-tab-label">分类</span>
				</router-link>
				<router-link class="foot" to="/goodcart">
					<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.optCartCount}}</span></span><br>
					<span class="mui-tab-label">购物车</span>
				</router-link>
				<router-link class="foot" to="/personal">
					<span><img src="../img/menu_icon04.png" alt=""></span>
					<span class="mui-tab-label">我的</span>
				</router-link>
		</nav>
	</div>
</template>
<script>
	export default {
	data() {
		return {
      kwords:"",
			animate:false,
			animate2:false,
			animate3:false,
			lists:[
				{contain:"热烈祝贺颜文明体育贵阳市枣山路店盛大开业"},
				{contain:"董事长在员工大会上发表演讲！"},
				{contain:"认真学习十九大精神，争取贯彻落实习总书记讲话"}
			],
			photos:[
				{pic:require("../img/sj_logo1.jpg"),name:"颜文明体育用品"},
				{pic:require("../img/sj_logo2.jpg"),name:"耐克NIKE体育用品"},
				{pic:require("../img/sj_logo3.jpg"),name:"阿迪达斯体育用品"},
				{pic:require("../img/sj_logo4.jpg"),name:"李宁体育用品"},
				{pic:require("../img/sj_logo5.jpg"),name:"彪马体育用品"},
				{pic:require("../img/sj_logo6.jpg"),name:"颜文明体育用品"}
				],
			parts:[
				{p:require("../img/pic07.jpg"),thing:"耐克NIKE体育用品男帽女帽 2018新款网球"},
				{p:require("../img/pic04.jpg"),thing:"耐克NIKE体育用品篮球"},
				{p:require("../img/pic01.jpg"),thing:"耐克NIKE体育用品女鞋"},
				{p:require("../img/pic07.jpg"),thing:"耐克NIKE体育用品男帽女帽 2018新款网球"},
				{p:require("../img/pic04.jpg"),thing:"耐克NIKE体育用品篮球 2018新款网球"},
				{p:require("../img/pic05.jpg"),thing:"耐克NIKE体育用品女鞋 2018新款网球"},
				{p:require("../img/pic07.jpg"),thing:"耐克NIKE体育用品男帽女帽 2018新款网球"}
			],
			totopshow:false,
			show:false,
			html:`<span class="mui-icon mui-icon-contact" style="margin-left:20px"></span>登录`
		}
	},
	created() {
		setInterval(this.scorll,2000)
		setInterval(this.brand,3000)
		setInterval(this.part,3000)
		this.load()
		
	},
	mounted() {
		window.addEventListener('scroll',this.onscroll) 
	},
	methods: {
		search(){
			sessionStorage.setItem("kwords",this.kwords)
      location.href='http://127.0.0.1:8081/#/goodlist'
		},
		load(){
			var name=sessionStorage.getItem("key");
			if(name!==null){
				this.html=name
			}
		},
		login(){
				location.href='http://127.0.0.1:8081/#/login'
		},
		scorll(){
			this.animate=true;
			setTimeout(()=>{
				this.lists.push(this.lists[0]);
				this.lists.shift();
				this.animate=false;
			},1000)
		},
		brand(){
			this.animate2=true;
			setTimeout(()=>{
				this.photos.push(this.photos[0]);
				this.photos.shift();
				this.animate2=false;
			},1000)
		},
		part(){
			this.animate3=true;
			setTimeout(()=>{
				this.parts.push(this.parts[0]);
				this.parts.shift();
				this.animate3=false;
			},1000)
		},
		toTop(){
			var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;	
			if(scrollTop>0){
				scrollTop=0;
			}
		},
		onscroll(){
			var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
			if(scrollTop>100){
				this.totopshow=true;
			}else{
				this.totopshow=false;
			}
        }
	},
	destroyed() {
    window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
  },
}
</script>
<style>
	*{margin: 0;padding: 0;}
	#header{
		height: 50px;
		padding:0;
		background: linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,0) 80%) !important;
	}
	#my-header{
		width:100%;
		display: flex;
		padding: 0;
		justify-content:space-around;
	}
	#my-header img:first-child{
		width: 25%;
		height: 40px;
	}
  	#my-header>div{
		width: 50%;
		height: 38px;
		line-height: 40px;
		border: 1px solid #dddddd;
		border-radius: 20px;
		margin: 5px auto;
		font-size: 14px;
		color:#999;
		background: #ffffff;

	}
	#my-header>div>input{
		width: 75%;
		height: 90%;
		border: 0;
		margin: 0;
		padding: 0;
		color: #666;
		font-size: 16px;
	}
	.mui-icon-search{
		color: #999;
		margin-left: 5px;
		margin-top:-4px;
		z-index: 10;

	}
	#my-header>a{
		display: inline-block;
		width:25%;
		margin-left: 10px;
	}
	#my-header>a>span{
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		color: #fff;
	}
	
	.app-index .mt-swipe{
		height:200px;
	}
	.app-index .mt-swipe img{
		width:100%;
		height:200px;
	}
	.app-index .mt-swipe .mint-swipe-indicator{
		opacity: 1;
		background: #fff;
	}
	.app-index .mt-swipe .mint-swipe-indicator.is-active{
		background:#FFE037 !important;
	}
	.app-index .swipe{
		height:200px;
		background: #fff;
	}
	.app-index .swipe ul{
		list-style: none;
		margin-top: 10px;
	}
	.app-index .swipe ul li{
		float: left;
		width: 25%;
		text-align: center;
	}
	.app-index .swipe ul li img{
		width: 50%;
	}
	.app-index .swipe ul li a{
		color: #999;
		font-size: 14px;
	}
	.app-index .swipe .mint-swipe-indicator{
		width:12px;
		height:2PX;
		border-radius:0;
		background:#FFE037;
		opacity: 1;
	}
	.app-index .swipe .mint-swipe-indicator.is-active{
		background:#10805a;
	}
	#notice{
		width: 100%;
		height: 40px;
		margin-top: 7px;
		background: #fff;
		display: flex;
		overflow: hidden;
	}
	#notice>span{
		width: 20%;
	}
	#notice>span>img{
		width: 100%;
		margin-left: 10px;
		margin-top: 10px;
	}
	#notice>ul{
		width: 80%;
		list-style: none;
		margin-left: 15px;
	}
	.anim{
		transition: all 1s;
		margin-top: -40px;}
	#notice>ul>li{
		line-height: 40px;
	}
	#notice>ul>li>a{
		color: #666;
		font-size: 13px;
	}
	#ad{
		width: 100%;
		height: 150px;
	}
	#ad>img{
		width: 100%;
		height: 100%;
	}
	#hotsell{
		background: #fff;
		height: 390px;
		margin-top: 7px;

	}
	#sell_title{
		height: 70px;
		text-align: center;
		position: relative;
	}
	#hotsell #sell_title{
		border-bottom: 1px solid #ddd;
	}
	#sell_title>h1{
		position: relative;
		background-color: #fff;
		width:30%;
		z-index: 2;
		display: inline-block;
		margin-top: 10px;
	}
	#sell_title>h1>a{
		font-size: 22px;
		color: #10805a;
		line-height: 45px;
		font-weight: normal;
		background: url(../img/line_botm.jpg) no-repeat center bottom;
		background-size: 100% 3px;
		display: inline-block;
		margin:0 auto;

	}
	#sell_title>i{
		width: 50%;
		height: 1px;
		line-height: 70px;
		background-color: #10805a;
		position: absolute;
		top:50%;
		left: 25%;
	}
	#hotsell_contain{
		display: flex;

	}
	#hotsell_contain #zuo1{
		width: 48%;
		height: 300px;
		border-right: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
	#hotsell_contain #zuo1 .swipe{
		width: 100%;
		height: 299px;
		text-align: center;
	}
	#hotsell_contain #zuo1 .swipe img{
		display: inline-block;
		width: 90%;
		height: 200px;
		margin: 5px auto;
	}
	#hotsell_contain #zuo1 .swipe p{
		text-align: left;
		margin: 0 auto;
		width: 90%;
		height: 40px;
		overflow: hidden;
		font-size: 16px;
	}
	#hotsell_contain #zuo1 .swipe em{
		text-decoration: line-through;
		font-style: normal;
		color: #999;
		margin-left: -40px;
		font-size: 14px;
	}
	#hotsell_contain #zuo1 .swipe i{
		font-style: normal;
		color: red;
		margin-left: 5px;
		font-size: 14px;
	}
	#hotsell_contain #you{
		width: 52%;
		height: 250px;
		text-align: center;
	}
	#hotsell_contain img{
		width: 95%;
		height: 95%;
	}
	#hotsell_contain #you>div{
		width: 100%;
		height: 150px;
		border-bottom: 1px solid #ddd;
	}
	#hotsell_contain #youbottom{
		display: flex;
	}
	#hotsell_contain #youbottom>div{
		width: 50%;
		height: 150px;
	}
	#hotsell_contain #youbottom>div:last-child{
		border-left: 1px solid #ddd;
	}
	.app-index .swipe3{
		height: 90px;
	}
	.app-index .swipe3 img{
		width: 100%;
		height: 80px;
		margin-top: 10px;
	}
	#to-top{
		position: fixed;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		margin: 0;
		right: 0;
		bottom: 20%;
		background:rgba(0,0,0,.6);
		transition: all 1s;
		opacity: 1;
	}
	#to-top>a{
		display: block;
		width: 25px;
		height: 25px;
		margin: 10px auto;
		background: url(../img/back_top.png) center center no-repeat;
		background-size: 90% 90%;
	}
	.app-index .fix_foot{
		background:#ffe037;
		height: 60px;
		border:0 solid #fff;
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1000;
	}
	.app-index .fix_foot .foot{
		display: inline-block;
		width: 25%;
		height: 60px;
		text-align: center;
		margin-top: 5px;
	}
	.app-index .fix_foot .mui-icon{
		font-size: 30px;
		color: #fff;
		position: relative;
	}
	.app-index .fix_foot .foot .active{
		color: #10805a;
	}
	.app-index .fix_foot .mui-badge{
		position: absolute;
		background: #10805a;
		top:2%;
		left: 100%;
	}
	.app-index .fix_foot>a>.mui-tab-label{
		font-size: 12px !important;
		color: #10805a;
	}
	.app-index .fix_foot>a img{
		width: 27px;
		height: 27px;
		display: block;
		margin: 0 auto;
	}
	.app-index .footer{
		margin-top: 10px;
		width: 100%;
		height: 240px;
		background: #fff;
	}
	.app-index .footer>h2{
		text-align: center;
		height: 45px;
		line-height: 45px;
		border-bottom: 1px solid #ddd;
	}
	.app-index .footer>h2>a{
		font-size: 16px;
		color: #999;
		font-weight: normal;
		padding: 0 2%;
	}
	.app-index .footer>h2>a~a{
		border-left: 1px solid #999;
	}
	.app-index .footer>h3{
		height: 30px;
		text-align: center;
		margin: 17px 0;
	}
	.app-index .footer>h3>span{
		display: inline-block;
		width: 25%
	}
	.app-index .footer>h3 a{
		font-size: 14px;
		color: #999;
		font-weight: normal;
		border-bottom: 1px solid #999;
	}
	.app-index .footer>div>p{
		text-align: center;
		font-size: 12px;
		margin: 0;
	}
	.app-index .footer>div>p>a{
		color: #999;
	}
	.recommend{
		height: 520px;
		background: #fff;
		overflow: hidden;
		margin-top: 7px;
	}
	.recommend ul>li{
		width: 33.33%;
		height: 180px;
		float: left;
		text-align: center;
		list-style: none;
	}
	.recommend ul>li img{
		width: 90%;
		height: 65%;
	}
	.recommend ul>li p{
		color: #666;
		font-size: 13px;
		height: 30px;
		line-height: 16px;
		overflow: hidden;
		margin: 0 !important;
		text-align: left;
		margin-left: 3px;
		display: inline-block;
		width: 90%;
	}
	.recommend ul>li span{
		display: block;
		color: red;
		font-size: 15px;
		margin-left: -55px;
	}
	#loadmore {
		width: 100%;
		clear: both;
	  padding: 20px;
	}
	#loadmore a{
		display: block;
		width: 50%;
		height: 35px;
		margin: 0 auto;
		background: #FFE037;
		border-radius: 50px;
		text-align: center;
		line-height: 35px;
		font-size: 16px;
		color: #10805a;
	}
	.app-index .brand{
		background: #fff;
		margin-top: 7px;
		height: 180px;
	}
	.app-index .brand ul{
		display: flex;
		list-style: none;
		width: 100%;
		overflow: hidden;
	}
	.app-index .brand .my_barnd{
		transition: all 1s;
	}
	.app-index 	.brand ul li{
		width: 30%;
		flex-shrink: 0;
	}
	.brand .picture{
		display: block;
		height: 67px;
		width: 90%;
		margin: 0 auto;
		border: 1px solid #ddd;
	}
	.brand .p{
		width: 90%;
		margin: 0 auto;
		font-size: 12px;
		color:#666; 
		height: 15px;
	}
	.brand .picture2{
		display: block;
		height: 100px;
		width: 90%;
		margin: 0 auto;
		border: 1px solid #ddd;
	}
	.brand .p2{
		width: 90%;
		margin: 0 auto;
		font-size: 13px;
		color:#666; 
		height:36px;
		line-height: 20px;
		overflow: hidden;
	}
	.brand .price{
		font-size: 14px;
		color: red;
		margin-left: 5px;
	}
	.sell_title2{
		background: url(../img/line_botm.jpg) no-repeat center bottom;
		background-size: 100% 3px;
		padding: 5% 2% 2%;
		margin-bottom: 15px;
	}
	.sell_title2>span{
		float: right;
		color: #999;
		font-size: 14px;
	}
	.sell_title2>a{
		font-size: 20px;
		color: #999;
	}
	.sell_title2>a~a:before{
		content: ".";
		color: #FFE037;
		font-size: 30px;
		margin: 0 8px;
		position: relative;
		top: -5px;
	}
	#part{
		height: 250px;
	}
	#part img{
		border: 0;
	}
	.my_part{
		transition: all 1s;
	}
	#choice h1{
		background: #f1f1f1;
	}
	#choice ul{
		width: 100%;
		height: 1495px;
	}
	#choice ul>li{
		float: left;
		width: 48%;
		height: 240px;
		list-style: none;
		position: relative;
		margin: 1%;
		background: #fff;
	}
	#choice ul>li>a{
		width: 100%;
		height: 240px;
	}
	#choice ul>li img{
		width: 100%;
		height: 70%;
	}
	#choice ul>li P{
		font-size: 14px;
		color: #666;
		height: 31px;
		overflow: hidden;
		line-height: 16px;
		margin: 0;
	}
	#choice ul>li span{
		color: red;
		font-size: 15px;
	}
	#more>h2{
		width: 100%;
		text-align: center;
		color: #999;
		font-size: 13px;
		font-weight: normal;
	}
</style>