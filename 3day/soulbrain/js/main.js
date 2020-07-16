Splitting(); //화면 가서 검사해보면 쪼개져 있음

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//헤더부분
var list = $("#gnb .list > li");
var header = $("#header"); //단순히 치환만 시켜놓음
var btnAll = header.find(".btnAll"); //헤더에서 btnAll이라는 클래스를 찾아서 변수에 넣는다.
var gnbAll = header.find("#gnbAll");
var btnlanguage = header.find(".utilMenu .language > a");
var language = header.find(".utilMenu .language > ul");
//language안에서 a를 찾으면 밑뿐만아니라 그 아랫것도 다 포함된다. 따라서 이렇게쓴다.

list.on("mouseenter", function () {
    header.addClass("on");
});
list.on("mouseleave", function () {
    header.removeClass("on");
});
btnAll.on("click", function (e) {
    //$(this).addClass("on");다시 올라가는키가 안보여서 아래것을 쓴다.
    $(this).toggleClass("on");
    //gnbAll.show()//display:none 나타나게하는것 이건 너무 한번에 나타나서 천천히 나타나게 하려면
    //gnbAll.stop().slideDown();//다시 올라가는게 안된다. 따라서 아래를 쓴다.
    gnbAll.stop().slideToggle();
    //e.preventDefault();//a태그 링크 기능 없애주는 경우 버튼이니 당장은 필요없음
});
btnlanguage.on("click", function (e) {
    language.stop().slideToggle(); //이렇게 두면 a태그이기 떄문에 새로고침을 해버린다. 그래서 그걸 방지하고자 아래와같이 쓴다.
    return false; //새로고침 방지
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//슬라이드
var mainVisual = new Swiper("#mainVisual", { //이렇게 한줄만 적어도 돌아는 감 var 없어도 돌아는 가는데 변수에 넣어서 이름을 정한 것이다.
    effect: "fade", //바뀔때 효과
    autoplay: { //자동기능 css의 transtation 3s 1s 여기서 3은 시간 1은 딜레이값 총 4초가걸림
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: "#mainVisual .btnPrev", //왼쪽버튼 누르면 뭐 쓸것이냐 L임 1아님
        nextEl: "#mainVisual .btnNext",
    },
    pagination: { //몇번째 사진인가 표시해주는 기능
        el: "#mainVisual .bullets", //어디인지
        clickable: true, //클릭가능하게
    },
    on: { //이벤트 (속성으로 쓰는방법), 매개변수로 쓰는방법도 있음(변수.이러케)
        slideChange: function () {
            //txtMotion02.realIndex;
            //console.log(this.realIndex); //0,1,2반복
            var idx = this.realIndex;
            if (idx === 0) {
                txtMotion01.restart();
            } else if (idx === 1) {
                txtMotion02.restart();
            } else if (idx === 2) {
                txtMotion03.restart();
            }
        }
    },
    loop: true,
});

var btnStop = $("#mainVisual .auto .btnStop");
var btnPlay = $("#mainVisual .auto .btnPlay");
btnStop.on("click", function () {
    $(this).hide(); //display:none과 동일
    btnPlay.show();
    mainVisual.autoplay.stop();
});
btnPlay.on("click", function () {
    $(this).hide();
    btnStop.show();
    mainVisual.autoplay.start();
});

/* 왜 쓴거지?
new Swiper("#partners .banner .mask", {
    slidesPerView: "auto", //화면에 몇개를 보이게 하고 싶다. 반드시 css에 넓이 잡아야한다, #partners .mask li 에 적혀있음
    spaceBetween: 20,
    centeredSlides: true, //현재 활성화된애가 가운데로 주로 모바일에서 쓰임
    loop: true,
    navigation: {
        prevEl: "#partners .btnPrev",
        nextEl: "#partners .btnNext",
    },
    autoplay: { //자동기능 css의 transtation 3s 1s 여기서 3은 시간 1은 딜레이값 총 4초가걸림
        delay: 1000,
        //disableOnInteraction: false,
    },
});
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//글자 움직임
gsap.registerPlugin(CSSRulePlugin); //오류뜨는거 고치고 CSSRulePlugin플러그인쓸수있게하려고 인식시키는 것

var txtMotion01 = gsap.timeline();
var txtMotion02 = gsap.timeline({
    paused: true
}); //이러면 글자 안움직임
var txtMotion03 = gsap.timeline({
    paused: true
});
var line0101 = CSSRulePlugin.getRule("#mainVisual .visual01 .txtBox .main p:nth-of-type(1):before"); //get the rule 은 정확한 css값이 있어야만 동작한다.
var line0102 = CSSRulePlugin.getRule("#mainVisual .visual01 .txtBox .main p:nth-of-type(2):before");
var line0201 = CSSRulePlugin.getRule("#mainVisual .visual02 .txtBox .main p:nth-of-type(1):before");
var line0202 = CSSRulePlugin.getRule("#mainVisual .visual02 .txtBox .main p:nth-of-type(2):before");
var line0301 = CSSRulePlugin.getRule("#mainVisual .visual03 .txtBox .main p:nth-of-type(1):before");
var line0302 = CSSRulePlugin.getRule("#mainVisual .visual03 .txtBox .main p:nth-of-type(2):before");

var charMotion = {
    x: 100,
    autoAlpha: 0,
    ease: "back",
    duration: 1,
    stagger: 0.05,
}
var lineMotion = {
    duration: 1,
    cssRule: {
        scaleX: 0
    }
}
var subMotion = {
    x: 100,
    autoAlpha: 0,
    ease: "back",
    duration: 1,
    stagger: 0.02,
}
//.from 처럼 .을 붙히면 그 안에 집어넣는다.
txtMotion01 //#mainVisual안에있는 .visual01의 안에있는 .main의 .char 이미자른뒤 적용이라.char이 있다.
    .from("#mainVisual .visual01 .main p:nth-of-type(1) .char", charMotion)
    .from(line0101, lineMotion, 0.5) //모션 끝난다음에 하는건데 절대치 0.5초에서 움직이라 명령
    .from("#mainVisual .visual01 .main p:nth-of-type(2) .char", charMotion, 1)
    .from(line0102, lineMotion, 1.5)
    .from("#mainVisual .visual01 .sub .char", subMotion, 3);
txtMotion02
    .from("#mainVisual .visual02 .main p:nth-of-type(1) .char", charMotion)
    .from(line0201, lineMotion, "-=1") //앞의 타임라인이 몇초인지 모르겠지만 -=1 (-1초) 앞당겨서 실행하라는 뜻, 위에게 3초만에끝나면 1초앞당겨서 2초에 시작함 ""따옴표는 앞의것 참고하라는뜻?
    .from("#mainVisual .visual02 .main p:nth-of-type(2) .char", charMotion, "-=1")
    .from(line0202, lineMotion, "-=1")
    .from("#mainVisual .visual02 .sub .char", subMotion);
txtMotion03
    .from("#mainVisual .visual03 .main p:nth-of-type(1) .char", charMotion)
    .from(line0301, lineMotion, "+=1") //+는 끝난 시점에서 1초 뒤에 가는것
    .from("#mainVisual .visual03 .main p:nth-of-type(2) .char", charMotion, "+=1")
    .from(line0302, lineMotion, "+=1")
    .from("#mainVisual .visual03 .sub .char", subMotion);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

new fullpage('#main', {
    scrollbar: true,
});