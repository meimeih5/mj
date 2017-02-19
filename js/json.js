//var proinfo=[
//								{
//									"proImg":"7b33dab191cf1c8fA31251_430430.jpg",
//									"proTitle":"冰箱 206升三门三温 静音省电 BCD-206TM(E)悦动白",
//									"proDesc":"1.三门三温区 2.中门保鲜冷冻室；3.悦动白面板；",
//									"proPrice":"￥1980.00",
//									"proEval":"评价 951"
//								},
//								
//								{
//									"proImg":"b4f6739529a66c5fA4925_430430.jpg",
//									"proTitle":"冰箱 206升三门三温 静音省电 BCD-206TM(E)悦动白",
//									"proDesc":"1.三门三温区 2.中门保鲜冷冻室；3.悦动白面板；",
//									"proPrice":"￥1298.00",
//									"proEval":"评价 951"
//								},
//								
//								{
//									"proImg":"aa4d33ec422d1eb2A29222_430430.jpg",
//									"proTitle":"冰箱 206升三门三温 静音省电 BCD-206TM(E)悦动白",
//									"proDesc":"1.三门三温区 2.中门保鲜冷冻室；3.悦动白面板；",
//									"proPrice":"￥1098.00",
//									"proEval":"评价 951"
//								}
//				
//				];
				
				
				window.onload=function(){
					var html="";
					$.ajax({
								type:"post",
								url:"goodsList.php",
								success:function(data){					
									var arr=eval(data);
									for(var i=0;i<arr.length;i++){
											html+='<li class="hproduct"><a href="###"><img src="img/'+arr[i].goodsImg+'"/></a><a href="###" class="fn">'+arr[i].goodsName+' </a><div class="sell_point">'+arr[i].goodsDesc+'</div><div class="ft-message"><div class="price-new">'+arr[i].goodsPrice+'</div><div class="right-tip">'+arr[i].goodsEval+'</div></div></li>';
											$(".searchListWrap").html(html);
									}
								}
								
					});
						}
					
					