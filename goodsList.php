<?php
	header("content-type","text/html;charset=utf-8");
//1、建立连接
			$conn = mysql_connect("localhost","root","qianfeng");
			
			//2、选择数据库
			mysql_select_db("shoppingcenter",$conn);
			
			
			//3、执行SQL语句
			$sqlstr = "select * from goodsinfo";
			$result = mysql_query($sqlstr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
			
			//查询列数
			 $query_cols = mysql_num_fields($result);
			 //echo "列数：".$query_cols;
			//查询行数
		    $query_num =mysql_num_rows($result);
		    //echo "行数：".$query_num;
			
			$str="[";
			
			$query_row = mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
			while($query_row){
				$str = $str."{ 'goodsId':'".$query_row[0]."','goodsName':'".$query_row[1]."','goodsPrice':'".$query_row[2]."','goodsCount':'".$query_row[3]."','goodsImg':'".$query_row[4]."','goodsType':'".$query_row[5]."','goodsDesc':'".$query_row[6]."','goodsEval':'".$query_row[7]."'}";
				$query_row = mysql_fetch_array($result);
				if($query_row){
					$str = $str.",";
				}
			}
			$str = $str."]";
			//4、关闭数据库
			mysql_close($conn);
		
			echo $str;
?>