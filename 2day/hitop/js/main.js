//메인,js는 제일 마지막에 실행된다.

Splitting();

$("#gnb .list > li").on("mouseenter", function () {
  $(this).find(".deprh02").stop().slideDown(400);
});
$("#gnb .list > li").on("mouseenter", function () {
  $(this).find(".deprh02").stop().slideUp(400);
});
//물결치는 현상이 발생함 queue라는 곳에 담아두는데 계속 명령이 쌓이니 물결이 치는것
//그것을 방지하기 위해 stop() 을 적어 대기된 명령들을 다 해제하고 slide 한다.

//jqury로 addeventlisner 가 on이다

/*
//모바일경우
$("#gnb .list > li > a").on("click", function () {
  //내꺼 아닌놈들은 닫아야함
  $("#gnb .list > li .depth02").stop().slideUp(200); //열린것 싹다 닫기 or
  $(this).parent().find(".deprh02").stop().slideToggle(400); //parent,children 은 찾아가는 것, 토글은 상태에따라 up, down함
  return false; //모든 함수에서 리턴 밑은 암것도안됨
});
*/

var mainVisual = new Swiper("#mainVisual .mask", {
  speed: 250,
  effect: "fade",
  spaceBetween: 0,
  loop: true, //마지막 갔을 경우 처음으로 돌아가는 기능
  navigation: {
    prevEl: "#mainVisual .btnPrev",
    nextEl: "#mainVisual .btnNext",
  },
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: "#mainVisual .pagination .btns",
    type: "bullets",
    clickable: true,
  },

  //navigation, pagination, autoplay만 알면 왠만한건 된다.
  //direction: 'vertical'
});

//var a = [] 변수
//var a = {} 오브젝트(객체) - 오브젝트는 키값과 매칭할 경우 쓴다. 중괄호 안에있는 것을 변수, 속성이라고도 부른다.

$("#mainVisual .btnPause").on("click", function () { //버튼누르면 자동으로 슬라이드하는 기능
  mainVisual.autoplay.stop();
  $(this).hide();
  $("#mainVisual .btnAuto").show();
});
$("#mainVisual .btnAuto").on("click", function () {
  mainVisual.autoplay.start();
  mainVisual.slideNext();
  $(this).hide();
  $("#mainVisual .btnPause").show();
});

new Swiper("#news .mask", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  navigation: {
    prevEl: "#news .btnPrev",
    nextEl: "#news .btnNext",
  },
  pagination: {
    el: "#news .pagination",
    type: "fraction" //숫자로 표현
  }
});


var motion01 = gsap.timeline(); //모션하나하나를 하나의 무비클립으로 건다 delay 필요없음
motion01.from("#mainVisual .slogan .main .char", { //from : 내가적어놓은 css상태로 돌아옴, to = css상태에서 내가 적은 상태로 감
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "bounce", //out이 기본값, inout도 가능
    stagger: 0.05,
  }) //g sock
  //첫번째신이 끝나고 바로 두번쨰 씬이 이어진다.
  .from("#mainVisual .slogan .sub .char", { //from : 내가적어놓은 css상태로 돌아옴, to = css상태에서 내가 적은 상태로 감
    x: 200,
    opacity: 0,
    duration: 2,
    ease: "bounce.out", //out이 기본값, inout도 가능
    //delay: 2, //2초후 실행
  }); //g sock ,숫자1은 위에것 기다리지말고 절대시간 1초에 플레이하란 뜻