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
//	var oSpan=oCircle.getElementsByTagName("span");
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
//		oA[i].index=i;
		oA[i].onmouseover=function()
		{
			
			for(let i=0;i<oA.length;i++)
			{
				
				oA[i].className="";
			}
//			oA[this.index].className='active';
			oA[i].className='active';
			oA[0].className='active';
			
		}
	}
	
	
//	for(let j=0;j<oSpan.length;j++)
//	{
//		oSpan.index=j;
//		oSpan[j].onmouseover=function()
//		{
//			for(let j=0;j<oSpan.length;j++)
//			{
//				oSpan[j].className="";
//			}
//			this.className='dot';
//		}
//	}
	for(let c=0;c<aLi.length;c++)
	{
//		aLi.index=c;
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
	let aPrev1=document.querySelectorAll(".leftBtn")[0];
//		console.log(aPrev);
console.log(aPrev1);
	let aNext1=document.querySelectorAll(".rightBtn")[0];
//	console.log(oLi);
	let oUl=document.querySelectorAll(".wrap-list");
	let owrap=document.querySelector(".wrap");
	console.log(oUl);
	let w1=oUl[0].offsetWidth;
//		alert(w);
	let times1=0;
	
	for(let j=0;j<oLi.length;j++){
		oLi[j].onclick=function(){
			owrap.style.transform=`translate(${-w1*j}px)`;
		}
	}
	
	aNext1.onclick=function(){
			times1++;
			if(times1>=4)
			{
				times1=3;
			}
			
			for(let j=0;j<aLi.length;j++)
			{
				oLi[j].className="";
			}
			oLi[times1].className='active1';
			owrap.style.transform=`translate(${-w1*times1}px)`;
			
		}
		aPrev1.onclick=function(){
			times1--;
			if(times1<0)
			{
				times1=0;
			}
			for(let j=0;j<aLi.length;j++)
			{
				oLi[j].className="";
			}
			oLi[times1].className='active1';
			owrap.style.transform=`translate(${-w1*times1}px)`;
			
		}
		
}
