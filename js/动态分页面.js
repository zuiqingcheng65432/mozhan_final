window.onload=function()
{
	function $(id)
	{
		return document.getElementById(id);
	}
	var oNav=$("nav");
	var oA=oNav.getElementsByTagName("a");
	let flag=true;
	var aNav_btn=document.querySelector(".nav_btn");
	var aNav_List=document.querySelector(".nav_active");
	aNav_btn.onclick=function(){
		if (flag)
		{
			aNav_List.style.height="256px";
			flag=false;
		}
		else{
			aNav_List.style.height=0;
			flag=true;
		}
		
	}
	

	
	
		
}
