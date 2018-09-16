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
	for(let i=0;i<oA.length;i++){
		oA[i].index=i;
		oA[i].onmouseover=function()
		{
			
			for(let i=0;i<oA.length;i++)
			{
				
				oA[i].className="";
			}
			oA[this.index].className='active';
			oA[5].className='active';
			
		}
	}
	
	let oWrap=document.querySelector(".wrap-item");
//	alert(oWrap.offsetWidth);
	let oWrap_box=document.querySelector(".wrap_box");
	let oLi=oWrap_box.querySelectorAll("li");
	console.log(oLi);
	let w1=1140;
	oLi.forEach(function(value,index){
		value.onclick=function(){
			oWrap.style.transform=`translate(${-w1*index}px)`;
		}
	})
//	for(let j=0;j<oLi.length;j++){
//		oLi[j].onclick=function(){
//			oWrap.style.transform=`translate(${-w1*j}px)`;
//		}
//	}
	
	
		
}
