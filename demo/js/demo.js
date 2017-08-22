//图片轮播
console.log($(".im li"))
$(".im li").css("listStyle","none")
var i=0;
var n= 5;
$(".im li").each(function(i){
    $(this).css("z-index",n-i)
})
function sh(){
    $(".im li:eq("+i+")").fadeIn(600).siblings().fadeOut(600)
}

function next(){
    i++
    if (i>$(".im li").length) {i=0};
    sh()
}
var timer = setInterval(next,2000)
//列表复制
function add(){
    $(".liebiao>div").append($(".liebiao>div>a").clone());
}
for(var i=0;i<3;i++){
    add()
}
$("a").attr("href","javascript:void(0);")
$("a").attr("target","_blank")
$(".shop").attr("href","shop.html")
$(".goods").attr("href","goods.html")
$(".login").attr("href","https://login.tmall.com/")
$(".register").attr("href","https://register.tmall.com")