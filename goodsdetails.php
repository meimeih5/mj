<?php
	header("content-type","text/html;charset=utf-8");
			//1、接受客户端的数据（用户输入的数据）
			$goodsName = $_POST['goodsName'];
			$goodsNum = $_POST['goodsNum'];
			//echo "用户名:".$userName;
			
			//2、数据保存在数据库中
			//1）、建立连接（搭桥）
			$conn = mysql_connect("localhost","root","qianfeng");
			
			//2）、选择数据库（找目的地）
			mysql_select_db("shoppingcenter",$conn);
			
			//3）、传输数据（过桥）
			//insert语句
			$sqlstr = "select * from goodsinfo where goodsName like '%".$goodsName."%'" ;
			//echo($sqlstr);
			$result = mysql_query($sqlstr,$conn);
			
			//查询行数
			$query_num =mysql_num_rows($result);
			
			$query_row = mysql_fetch_array($result);
			
			
			$sqlstr1 = "select * from shoppingcart where goodsName like '%".$goodsName."%'" ;
			$result1 = mysql_query($sqlstr1,$conn);
			$query_num1 =mysql_num_rows($result1);
			$query_row1 = mysql_fetch_array($result1);
			
			if($query_num1==0){
				$sqlstr = "insert into shoppingcart(goodsName,goodsImg,goodsnorms,goodsPrice,goodsNum,goodstotalPrice) values('".$query_row[1]."','".$query_row[4]."','".$query_row[6]."','".$query_row[2]."','".$goodsNum."','".$query_row[2]."');";
				mysql_query($sqlstr,$conn);
			}else{
				$sqlstr2="update shoppingcart set goodsNum='".(($query_row1[5]+$goodsNum) * 1)."'where Id='".$query_row1[0]."'";
				mysql_query($sqlstr2,$conn);
			}
			
			
				
			echo $sqlstr1;
			echo $sqlstr2;
			//4）、关闭连接（拆桥）
			mysql_close($conn);
			
			//3、给客户端返回（响应）一个注册成功！
			//echo "1";
			
?>