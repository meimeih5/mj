
		<?php
			header("content-type","text/html;charset=utf-8");
			//1、接受客户端的数据（用户输入的数据）
			$userName = $_POST['userName'];
			
			//echo "用户名:".$userName;
			
			//2、数据保存在数据库中
			//1）、建立连接（搭桥）
			$conn = mysql_connect("localhost","root","qianfeng");
			
			//2）、选择数据库（找目的地）
			mysql_select_db("shoppingcenter",$conn);
			
			//3）、传输数据（过桥）
			//insert语句
			$sqlstr = "select * from vipinfo where vipName='".$userName."'" ;
			//echo($sqlstr);
			$result = mysql_query($sqlstr,$conn);
			
			//查询行数
			$query_num =mysql_num_rows($result);
			
			//4）、关闭连接（拆桥）
			mysql_close($conn);
			
			//3、给客户端返回（响应）一个注册成功！
			//echo $query_num;
			if($query_num==0){
				echo "0";
			}else{
				echo "1";
			}
			
			

		?>

