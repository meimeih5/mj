$(function(){
					var html="";
					console.log(1);
					$.ajax({
								
								type:"post",
								url:"shoppingcart.php",
								success:function(data){
									var arr=eval(data);
									console.log(arr);
									for(var i=0;i<arr.length;i++){
											html+='<tr style="height: 100px;border-bottom: 1px solid #ccc;"><td><input type="checkbox" class="check check-goods"/></td><td><img src="img/'+arr[i].goodsImg+'" style="float: left;width:74px;"/><span id="goodsName" style="float: left;">'+arr[i].goodsName+'</span></td><td>'+arr[i].goodsnorms+'</td><td class="unit-price">'+arr[i].goodsPrice+'</td><td class="td5"><input class="btn min1" type="button" value="-" /><input class="count1" type="text" value="1"/><input class="btn plus1"type="button" value="+"/></td><td>'+arr[i].goodstotalPrice+'</td><td><a href="###">移入收藏夹</a><a class="delete" href="###" style="display: block;">删除</a></td></tr>';
											$("tbody").html(html);
									}
								}
								
					});
});
