$(function(){
							$("tbody").on("click",".delete",function(){
								$.post("deleteshoppingcart.php",{"goodsName":$("#goodsName").html()},function(data){
									
									
										//1、记录cookie;
										//$.cookie( "goodsName" , $("#goodsName").html()  , { path: '/', expires: 7 });
										
										//2、跳转页面；
										
									
									
								});
							});
							//alert($("#goodsName").html());
							//alert(1);
			});
						


