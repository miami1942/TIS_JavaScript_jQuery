Splitting();

$(document).ready(function () {
  //$(".green").css({ width: 200, height: 200, backgorundColor: "ff33399" });
  //귄장하는 사양은 아니다 권장하는것은 아래다.
  $(".green").addClass("modify");
});
//document 는 쉽게말해서 body 태그이다.
//이렇게 하면 index.html에서 script가 위에 있어도 된다.
$("#red").css({
  width: 300
});
$(".black").css({
  width: 200
});

//$(".green").css({ width: 200 });
//달러그린을 찾아서 css를 바꾸겠다.
//or jQuery(".green") or document.queryselecton(".green");



//이 아래는 잘못적은것 이 메인이 아니라 다른 메인이었다.....
//greensock
var motion01 = gsap.timeline(); //모션하나하나를 하나의 무비클립으로 건다 delay 필요없음
motion01.from("#mainVisual .slogan .main", { //from : 내가적어놓은 css상태로 돌아옴, to = css상태에서 내가 적은 상태로 감
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "bounce", //out이 기본값, inout도 가능
  }) //g sock
  //첫번째신이 끝나고 바로 두번쨰 씬이 이어진다.
  .from("#mainVisual .slogan .sub", { //from : 내가적어놓은 css상태로 돌아옴, to = css상태에서 내가 적은 상태로 감
    x: 200,
    opacity: 0,
    duration: 2,
    ease: "bounce.out", //out이 기본값, inout도 가능
    //delay: 2, //2초후 실행
  }, 1); //g sock ,숫자1은 위에것 기다리지말고 절대시간 1초에 플레이하란 뜻

var motion02 = gsap.timeline();
motion02.from("#mainVisual .slogan .main", { //from : 내가적어놓은 css상태로 돌아옴, to = css상태에서 내가 적은 상태로 감
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "bounce", //out이 기본값, inout도 가능
  })
  .from("#mainVisual .slogan .main .sub", {
    opacity: 0,
    x: 100,
    ease: "back",
    stagger: 0.1,
  })