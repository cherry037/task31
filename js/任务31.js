window.onload=function(){
	var aInp=document.getElementsByTagName('input');
	var oDiv1=document.getElementById('div1');
	var oDiv2=document.getElementById('div2');
	var aSel=document.getElementsByTagName('select');
	aInp[0].onclick=function(){
		oDiv2.style.display='none'
		oDiv1.style.display='block';
	};
	aInp[1].onclick=function(){
		oDiv1.style.display='none'
		oDiv2.style.display='block';
	};
	aSel[0].onchange=function(){
	var aOpt=this.getElementsByTagName('option');
		for(var i=0;i<aOpt.length;i++){
			if (aOpt[i].selected) {
				aSel[1].style.display='none';
				aSel[2].style.display='none';
				aSel[3].style.display='none';
				aSel[i%3+1].style.display='block';
			}
		}
	}
};
