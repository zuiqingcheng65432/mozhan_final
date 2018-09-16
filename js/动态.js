window.onload=function()
{
	function $(id)
	{
		return document.getElementById(id);
	}
	var oNav=$("nav");
	var oA=oNav.getElementsByTagName("a");
	var oNewbox=document.getElementsByClassName("newbox")[0];
	var oLi=oNewbox.getElementsByTagName("li");
	var oTime=document.getElementsByClassName("time");
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
	for(let i=0;i<oLi.length;i++)
	{
		oLi[i].index=i;
		oLi[i].onmouseover=function()
		{
			for(var i=0;i<oTime.length;i++)
			{
				oTime[i].style.backgroundColor="";
			}
			oTime[this.index].style.backgroundColor="#530079";
			oTime[this.index].style.color="#fff";
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
			oA[3].className='active';
			
		}
	}
	
	
	
		
}
