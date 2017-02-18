var arr=[
			{
				provinceCode:"01",
				provinceName:"北京",
				cityNames:["朝阳","海淀","丰台"]
			},
			{
				provinceCode:"02",
				provinceName:"上海",
				cityNames:["宝山","杨浦","黄浦","闵行"]
			},
			{
				provinceCode:"03",
				provinceName:"广东",
				cityNames:["广州","深圳","东莞","珠海"]
			},
			{
				provinceCode:"04",
				provinceName:"陕西",
				cityNames:["西安","汉中","咸阳","宝鸡"]
			}
		];
		
	window.onload=function(){
		showProvince();
		showCity(getId("provinceId").value);
		getId("provinceId").onchange = function(){		
		showCity(this.value);
	}
	}
		
	function showProvince(){
		for(var i=0;i<arr.length;i++){
			var option=$create("option");
			option.innerHTML=arr[i].provinceName;
			option.value=arr[i].provinceCode;
			getId("provinceId").appendChild(option);
		}
	}
	
	function showCity(code){
		for(var i=0;i<arr.length;i++){
			if(arr[i].provinceCode==code){
				getId("cityId").innerHTML ="";
				 var citys=arr[i].cityNames;
				 for(var j=0;j<citys.length;j++){
					var option=$create("option");
					option.innerHTML=citys[j];
					getId("cityId").appendChild(option);
				 }
				 
				break;
			}
		}
	}
	
	function $create(tagName){
		return document.createElement(tagName);
	}
	function getId(id){
		return document.getElementById(id);
	}