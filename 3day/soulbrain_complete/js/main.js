Splitting();

var list = $("#gnb .list > li");
var header = $("#header");
var btnAll = header.find(".btnAll");
var gnbAll = header.find("#gnbAll");
var btnLanguage = header.find(".utilMenu .language > a");
var language = header.find(".utilMenu .language > ul");
list.on("mouseenter",function(){
    header.addClass("on");
});
list.on("mouseleave",function(){
    header.removeClass("on");
});
btnAll.on("click",function(e){
    $(this).toggleClass("on");
    gnbAll.stop().slideToggle();
});
btnLanguage.on("click",function(e) {
    language.stop().slideToggle();
    console.log(e);
    return false;
});
//header 안에 있는 utilMenu language 안에 있는 a 태그를 클릭했을때
//바로 다음에 있는 ul을 슬라이드토글 시켜라....

var mainVisual = new Swiper("#mainVisual",{
    effect:"fade",
    autoplay:{
        delay:6000,
        disableOnInteraction:false
    },
    navigation:{
        prevEl:"#mainVisual .btnPrev",
        nextEl:"#mainVisual .btnNext",
    },
    pagination:{
        el:"#mainVisual .bullets",
        clickable:true,
    },
    on:{
        slideChange:function(){
            //this.realIndex
            //console.log("this.realIndex", this.realIndex);
            //txtMotion02.restart();
            var idx = this.realIndex;
            if(idx===0){
                txtMotion01.restart();
            } else if(idx===1) {
                txtMotion02.restart();
            } else if(idx===2){
                txtMotion03.restart();
            }
        }
    }
});

var btnStop = $("#mainVisual .auto .btnStop");
var btnPlay = $("#mainVisual .auto .btnPlay");
btnStop.on("click",function(){
    $(this).hide();
    btnPlay.show();
    mainVisual.autoplay.stop();
});
btnPlay.on("click",function(){
    $(this).hide();
    btnStop.show();
    mainVisual.autoplay.start();
});

gsap.registerPlugin(CSSRulePlugin);

var txtMotion01 = gsap.timeline();
var txtMotion02 = gsap.timeline({paused:true});
var txtMotion03 = gsap.timeline({paused:true});
var line01 = CSSRulePlugin.getRule("#mainVisual .visual01 .txtBox .main p:before");
var line02 = CSSRulePlugin.getRule("#mainVisual .visual02 .txtBox .main p:before");
var line03 = CSSRulePlugin.getRule("#mainVisual .visual03 .txtBox .main p:before");

txtMotion01.from("#mainVisual .visual01 .main .char",{
    x:100,
    autoAlpha:0,
    ease:"back",
    duration:1,
    stagger:0.05
})
.from(line01, {duration:0.5, ease:"power4", cssRule: {scaleX:0}})
.from("#mainVisual .visual01 .sub .char",{
    x:100,
    autoAlpha:0,
    ease:"back",
    duration:1,
    stagger:0.02
});

txtMotion02.from("#mainVisual .visual02 .main .char",{
    x:100,
    autoAlpha:0,
    ease:"back",
    duration:1,
    stagger:0.05
})
.from(line02, {duration:0.5,ease:"power4", cssRule: {scaleX:0}})
.from("#mainVisual .visual02 .sub .char",{
    x:100,
    autoAlpha:0,
    ease:"back",
    duration:1,
    stagger:0.02
})

txtMotion03.from("#mainVisual .visual03 .main .char",{
    x:100,
    autoAlpha:0,
    ease:"back",
    duration:1,
    stagger:0.05
})
.from(line03, {duration:0.5,ease:"power4", cssRule: {scaleX:0}})
.from("#mainVisual .visual03 .sub .char",{
    x:100,
    autoAlpha:0,
    ease:"back",
    duration:1,
    stagger:0.02
})