window.onload=function()
{
	function $(id)
	{
		return document.getElementById(id);
	}
	
	var oNav=$("nav");
	let flag=true;
	var oCircle=document.getElementsByClassName("circle")[0];
	var page_box=document.getElementsByClassName("page_box")[0];
	var oA=oNav.getElementsByTagName("a");
	var aLi=page_box.getElementsByTagName("li");
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
			oA[1].className='active';
			
		}
	}
	
	
	
	for(let c=0;c<aLi.length;c++)
	{
		aLi.index=c;
		aLi[c].onmouseover=function()
		{
			for(let j=0;j<aLi.length;j++)
			{
				aLi[j].className="";
			}
			this.className='active1';
		}
	}
	
	let oPagebox=document.querySelector(".page_box");
	let oLi=oPagebox.getElementsByTagName("li");
	let oUl=document.querySelectorAll(".wrap-list");
	let owrap=document.querySelector(".wrap");
	let w1=oUl[0].offsetWidth;
//		alert(w);
//	let times1=0;
	for(let j=0;j<oLi.length;j++){
		oLi[j].onclick=function(){
			owrap.style.transform=`translate(${-w1*j}px)`;
		}
	}
		
}