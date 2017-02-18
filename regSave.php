<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
		<?php
			//1、接受客户端的数据（用户输入的数据）
			$userName = $_REQUEST['userName'];
			$userPass = $_REQUEST['pass'];
			//echo "用户名:".$userName;
			
			//2、数据保存在数据库中
			//1）、建立连接（搭桥）
			$conn = mysql_connect("localhost","root","qianfeng");
			
			//2）、选择数据库（找目的地）
			mysql_select_db("shoppingcenter",$conn);
			
			//3）、传输数据（过桥）
			//insert语句
			
			//echo($sqlstr);
			
			
			$sqlstr = "select * from vipinfo where vipName='".$userName."' and vipPass='".$userPass."'" ;
			//echo($sqlstr);
			$result = mysql_query($sqlstr,$conn);
			
			//查询行数
			$query_num =mysql_num_rows($result);
			
			if($query_num==0){
				$sqlstr = "insert into vipinfo(vipName,vipPass) values('".$userName."','".$userPass."')";
				mysql_query($sqlstr,$conn);
				echo header("location:login.html");
			}else{
				echo header("location:register.html");
			}
			
			//4）、关闭连接（拆桥）
			mysql_close($conn);
			
			//3、给客户端返回（响应）一个注册成功！
			echo "1";
			
			

		?>
	</body>
</html>
