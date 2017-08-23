var sp = document.querySelectorAll("#result p span");
var divCar = document.querySelector("#car");
var mes = document.querySelector("#message");
var carUL = document.querySelectorAll("#car ul");//购物车里的商品列表
var buyBtn = document.querySelectorAll("#show .buy a");
var result = document.querySelector("#result");
//计算积分，原价，实价
function add(){
	var allScore = 0;//总积分
	var allnPrice = 0;//总实价
	var alloPrice = 0;//总原价
	var int = document.querySelectorAll("#car input");
	var oprice = document.querySelectorAll("#car .op");
	var nprice = document.querySelectorAll("#car .np");
	var score = document.querySelectorAll("#car .score");
	//遍历计算列表 	
	for(var i=0;i<score.length;i++){
		allScore += score[i].innerHTML*int[i].value;
		allnPrice += nprice[i].innerHTML*int[i].value;
		alloPrice += oprice[i].innerHTML*int[i].value;
	}
	sp[1].innerHTML = allScore;
	sp[2].innerHTML = allnPrice.toFixed(2);
	sp[0].innerHTML = (alloPrice-allnPrice).toFixed(2);
}
add()
//键盘事件
function onkey(){
	int = document.querySelectorAll("#car input");
	for(var i=0;i<int.length;i++){
		int[i].onkeyup = function(){
			if(isNaN(this.value)){
				alert("输错了");
				this.value = 1;
			}else if(this.value<1){
				this.value = 1;
			}else if(this.value>999){
				this.value = 999;
			}
			add();
		}
	}
}
onkey()
//删除事件
function rm(){
	var rmBtn = document.querySelectorAll("#car .rm a")
	for(var i=0;i<rmBtn.length;i++){
		rmBtn[i].onclick = function(){
			divCar.removeChild(this.parentNode.parentNode);
			carUL = document.querySelectorAll("#car ul");
			if(carUL.length<1){
				mes.style.display = "block";
			}
			add();
		}
	}
}
rm()
//添加商品
var modal = carUL[0].cloneNode(true);
function buy(){
	for(var i=0;i<buyBtn.length;i++){
		buyBtn[i].onclick = function(){
			var ul = modal.cloneNode(true)
			var father = this.parentNode;
			var nbprice = father.previousElementSibling;
			var obprice = nbprice.previousElementSibling;
			var pname = obprice.previousElementSibling;
			var children = ul.children;
			children[0].innerHTML = pname.innerHTML;
			children[1].innerHTML = parseInt(nbprice.innerHTML*10);
			children[2].innerHTML = obprice.firstElementChild.innerHTML;
			children[3].innerHTML = nbprice.innerHTML;
			carUL = document.querySelectorAll("#car ul")
			for(var i=0;i<carUL.length;i++){
				if(carUL[i].firstElementChild.innerHTML
					==children[0].innerHTML){
					alert("该商品已添加");
					return;
				}
			}
			divCar.insertBefore(ul,result);
			mes.style.display = "none";
			add()
			onkey()
			rm()
		} 
	}
}
buy()
$("a").attr("href","javascript:void(0);")
$("a").attr("target","_blank")
$(".shop").attr("href","shop.html")
$(".login").attr("href","https://login.tmall.com/")
$(".register").attr("href","https://register.tmall.com")
