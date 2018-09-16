window.onload=function()
{
	function $(id)
	{
		return document.getElementById(id);
	}
	function $1(name)
	{
		return document.getElementsByClassName(name);
	}
	let oUsername=$("username");
	let oHidden1=$1("hidden1")[0];
//	console.log(oHidden1);
	oUsername.onblur=function()
	{
//		if(oUsername.value=="")
//		{
//			alert("用户名不能为空");
//			oHidden1.style.display="none";
//			return ;
//		}
		oHidden1.style.display="block";
	}
}
