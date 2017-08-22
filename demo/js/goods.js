$(".q2 img").click(function () {
    $src =$(this).attr("src")
    $(".q1 img").attr("src",$src)
})

$(".q1").on({
    mouseenter:function(){
        $img = $(".q1 img").clone(true)
        $img.css({
            "width" : 3*$(".q1 img").width(),
            "height": 3*$(".q1 img").height(),
        })
        $(".fang b").toggle()
        $(".lag").toggle().append($img)
    },
    mouseleave:function(){
        $(".fang b").toggle()
        $(".lag").toggle()
        $(".lag img").remove()
    },
    mousemove:function(e){
    //判断鼠标位置
        $X = e.pageX-$(this).offset().left-$("b").width()/2
        $Y = e.pageY-$(this).offset().top-$("b").height()/2
        //鼠标在边缘
        if($X<0){$X=0}
        if($Y<0){$Y=0}
        if($X>$(this).width()-$("b").width()){
            $X=$(this).width()-$("b").width()
        }
        if($Y>$(this).height()-$("b").height()){
            $Y=$(this).height()-$("b").height()
        }

        $("b").css({"left":$X+"px","top":$Y+"px"})
        $(".lag img").css({
            "left":-$X*3+"px",
            "top":-$Y*3+"px"
        })
    }
})
//商品属性点击
$(".shang p span>a").click(function () {
    $(this).css({"border":"1.5px solid rgb(254,67,101)"}).parent().siblings().children().css({"border":"1.5px solid gray"})
    console.log($(this).css("border-color"))
})
$(".z1 a:eq(0)").css({"color":"white","background-color":"rgb(242,21,76)"})
$(".z3").css({"display":"none"})
$(".z1 a:eq(0)").click(function () {
    $(this).css({"color":"white","background-color":"rgb(242,21,76)"})
    $(".z1 a:eq(1)").css({"color":"rgb(242,21,76)","background-color":"white"})
    $(".z2").css({"display":"block"})
    $(".z3").css({"display":"none"})
})
$(".z1 a:eq(1)").click(function () {
    $(this).css({"color":"white","background-color":"rgb(242,21,76)"})
    $(".z1 a:eq(0)").css({"color":"rgb(242,21,76)","background-color":"white"})
    $(".z3").css({"display":"block"})
    $(".z2").css({"display":"none"})
})
$("a").attr("href","javascript:void(0);")
$("a").attr("target","_blank")
$(".shop").attr("href","shop.html")
$(".login").attr("href","https://login.tmall.com/")
$(".register").attr("href","https://register.tmall.com")
$(".shang button").click(function () {
    alert("你确定要支付吗")
})
