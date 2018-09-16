window.onload=function()
{
	function $(id)
	{
		return document.getElementById(id);
	}
	var oNav=$("nav");
	let flag=true;
	var oA=oNav.getElementsByTagName("a");
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
	for(let i=0;i<oA.length;i++){
		oA[i].index=i;
		oA[i].onmouseover=function()
		{
			
			for(let i=0;i<oA.length;i++)
			{
				
				oA[i].className="";
			}
			oA[this.index].className='active';
			oA[6].className='active';
			
		}
	}
	
	
		
}
