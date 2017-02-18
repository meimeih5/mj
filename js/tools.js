$(function(){
				$("#optWrap").css({"background":"#0092d8","border":"none"});
				$("#optWrap a").mouseover(function(){
					$("#search").show();
					$("#optWrap").css({"background":"#fff","border":"1px solid #ccc"})
					$("#optWrap").animate({"left":"887px","width":"180px"},500);
				});
				
				$("#phone").hover(
					function(){
						$(this).css("background","#285079");
						$("#ewm").stop(true,true).fadeIn(1000);
					},
					function(){
						$(this).css("background","#0092d8");
						$("#ewm").stop(true,true).fadeOut(1000);
					}
					
				);
				
				
				$("#shopping-car").hover(
					function(){
						$(this).css("background","#285079");
						$("#login-box").css("display","block");
					},
					function(){
						$(this).css("background","#0092d8");
						$("#login-box").css("display","none");
					}
					
				);
				
				$("#register").hover(
					function(){
						$(this).css("background","#285079");
						$("#login-list").slideDown(300);
						$("#login-list").show().animate({"height":"306px"});
					},
					function(){
						$(this).css("background","#0092d8");
						$("#login-list").slideUp(300);
					}
					
				);		
			
			});
			
			$(function(){
				var ord = 1;  //当前图片的下标
				var myTimer = null;
				
				//开始轮播
				myTimer = setInterval(nextImg,3000);
				
				//鼠标进入图片停止播放
				$("#list").mouseover(function(){
					$("#next").show();
					$("#prev").show();
					window.clearInterval(myTimer);
				});	
				//鼠标离开图片继续播放
				$("#list").mouseout(function(){
					$("#next").hide();
					$("#prev").hide();					
					myTimer = setInterval(nextImg,3000);
				});
				
				//鼠标进入按钮
				$("#btn span").mouseover(function(){
					clearInterval(myTimer);
					ord = $(this).index();
					nextImg();
				});
				
				//下一张图片
				$("#next").click(function(){				
					nextImg();
				});
				//上一张图片
				$("#prev").click(function(){													
					prevImg();
				});
				
				function nextImg(){
					ord++;
					if(ord>5){
						$("#btn span").eq(0).addClass("active").siblings().removeClass();
					}			
					$(".banner #list").stop(true,true).animate({left:-(ord)*1200},function(){
						if(ord>5){
							$(this).css("left","-1200px");
							ord = 1;
						}
					});
					$("#btn span").eq(ord-1).addClass("active").siblings().removeClass();
				}				
				function prevImg(){
					ord--;					
					$(".banner #list").stop(true,true).animate({left:-(ord)*1200},function(){
						if(ord<1){
							$(this).css("left","-6000px");
							ord = 5;
						}
					});
					$("#btn span").eq(ord-1).addClass("active").siblings().removeClass();
				}
				
				$(".main-top a img").hover(
					function(){
						
						$(this).stop(true,true).animate({"margin-top":"10px"},500);
					},
					function(){
						$(this).stop(true,true).animate({"margin-top":"20px"},500);
					}
				);
				
				$(".footer-list").toggle(
					function(){
						$(".footer-list-hide").show();
						$(this).css("border-bottom","0");
						$(".last-a").css("background","url(img/index_sprite.png) -123px -198px no-repeat");
					},
					function(){
						$(".footer-list-hide").hide();
						$(this).css("border-bottom","1px solid #ccc");
						$(".last-a").css("background","url(img/index_sprite.png) -138px -198px no-repeat");
					}
					
				);
				
				$("#list-nav").children().mouseenter(function(){
					$(this).css("background","#999").siblings().css("background","rgba(0,0,0,0.4)");
					
				});
				
				$(".banner").mouseleave(function(){
					$(".list-aside").hide();
					$("#list-nav").children().css("background","rgba(0,0,0,0.4)");
				});	
				
				
				$("#list-nav li").mouseenter(function(){
					$(".list-aside").hide();
					$(".list-aside").eq($(this).index()).show();
				});
				
				$("#list").mouseenter(function(){
					$(".list-aside").hide();
					$("#list-nav").children().css("background","rgba(0,0,0,0.4)");
				});	
				
				$(".star-item-top-right a").hover(
					function(){
						$(this).children().first().css({"box-shadow":"5px 5px 5px 3px lightgrey"});
						$(this).children().first().stop(true,true).animate({"margin-top":"50px"},500);
					},
					function(){
						$(this).children().first().css({"box-shadow":"none"});
						$(this).children().first().stop(true,true).animate({"margin-top":"30px"},500);
					}
				);
				
				//var cellphone=document.getElementById("cellphone");
				//var cellphoneP=document.getElementById("cellphone-P");
				$("#cellphone").blur(function(){
					var reg=/^1\d{10}$/;
					var str=$("#cellphone").val();
					if(str==""){
						$("#cellphone-p").html("请填写手机号！");
						$("#cellphone-p").css("color","#000");
					}else if(reg.test(str)==false){
						$("#cellphone-p").html("手机号码不正确！");
						$("#cellphone-p").css("color","red");
					}else{
						$.post("register.php",{"userName":$("#cellphone").val(),"pass":$("#pass").val()},function(data){
									//alert(data);
									if(data.indexOf("1")>-1){
										//1、记录cookie;
										$.cookie( "userName" , $("#cellphone").val()  , { path: '/', expires: 7 });
										
										//2、跳转页面；
										$("#cellphone-p").html("该用户已存在");
										$("#cellphone-p").css("color","red");
										
									}else{
										$("#cellphone-p").html("可以注册");
										$("#cellphone-p").css("color","green");
									}
									
								});
						//$("#cellphone-p").html("手机号码格式正确！");
						//$("#cellphone-p").css("color","green");
					}
				});
				
				
				$("#pass").blur(function(){
					var reg=/^([1-9]|[a-z]|[A-Z]){6,20}$/;
					var str=$("#pass").val();
					if(str==""){
						$("#pass-p").html("请设置密码！");
						$("#pass-p").css("color","#000");
					}else if(reg.test(str)==false){
						$("#pass-p").html("密码不正确！");
						$("#pass-p").css("color","red");
					}else{
						$("#pass-p").html("");
					}
				});
				
				$("#confirm").blur(function(){
					if($("#confirm").val()!=$("#pass").val()){
						$("#confirm-p").html("密码与上次不一致！")
						$("#confirm").val("");
					}else{
						$("#confirm-p").html("");
					}
				});
				
				
				$(".price").hover(
					function(){
						$(".price-list").css("display","block");
					},
					function(){
						//$(".price-list").css("display","none");
					}
				);
				$(".recommend").mouseenter(
					function(){
						$(".price-list").css("display","none");
					}
				);
				$(".recommend").mouseleave(
					function(){
						$(".price-list").css("display","none");
					}
				);
				
				$(".page-this").click(function(){
					$("#search-List").show();
					$("#search-List2").hide();
					$(this).css("background","#0093d5");
					$(".page-go").css("background","#fff");
				});
	
				$(".page-go").click(function(){
					$("#search-List2").show();
					$("#search-List").hide();
					$(this).css("background","#0093d5");
					$(".page-this").css("background","#fff");
				});
				
				$(".page-start").click(function(){
					$("#search-List").show();
					$("#search-List2").hide();
					$(".page-this").css("background","#0093d5");
					$(".page-go").css("background","#fff");
				});
				
				$(".page-end").click(function(){
					$("#search-List2").show();
					$("#search-List").hide();
					$(".page-go").css("background","#0093d5");
					$(".page-this").css("background","#fff");
				});
				
				var count=$(".count").val();
				$(".min").click(function(){
					count--;
					if(count<1){
						count=1;
					}
					$(".count").val(count);
					
				});
				
				var repertory=parseInt($(".repertory").html());
				
				$(".plus").click(function(){
					count++;
					if(count>repertory){
						count=repertory;
					}
					$(".count").val(count);	
				});
				
				
				$(".pro-des-nav a").click(
					function(){
						$(this).css({"color":"#0093d5","border-bottom":"2px solid #0093d5"}).siblings().css({"color":"#ccc","border-bottom":"none"});
						var index=$(this).index();
						//console.log(index);
						$(".tab").hide();
						$(".tab").eq(index).show();
					}
				);
				
				$(".top-nav").children("a").click(
					function(){
						$(this).css({"color":"#0093d5","border-bottom":"2px solid #0093d5"}).siblings().css({"color":"#ccc","border-bottom":"none"});
						var index=$(this).index()-1;
						//console.log(index);
						$(".tab").hide();
						$(".tab").eq(index).show();
						
					}
				);
				
				$(".purchase").click(function(){
					$(this).css("border-bottom","none");
				});
				
				$("#detail_floating li").mouseenter(function(){
					$(this).children().eq(0).hide();
					$(this).children().eq(1).show();
					$(this).css("background","rgba(0,0,0,0.4)");
				});
				
				$("#detail_floating li").mouseleave(function(){
					$(this).children().eq(0).show();
					$(this).children().eq(1).hide();
					$(this).css("background","rgba(0,0,0,0.8)");
				});
				
				$(".li-wechat").mouseenter(function(){
					$(".WeChat").show();
					$(this).children().eq(0).show();
				});
				
			});
			
$(window).scroll(function(){
	var top=$(this).scrollTop();
	if(top>900){
		$(".top-nav").slideDown("fast");
	}else{
		$(".top-nav").slideUp("fast");
	}
});

	
	
