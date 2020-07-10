//toggle() = show/hide
//slideToggle() = slideUp/slideDown 밀려내려오면서 나타나고 없어진다.
//fadeToggle() = fadeIn/fadeOut 을 동시에 해준다.

$("#header .btnAll").on("click", function () {
  $("body").toggleClass("open");
  $(".cover").fadeToggle();
  $("#gnb > .list > li .depth02").delay(500).slideUp();
  //아래는 토글클래스와 같은것
  /*if ($("body").hasClass("open")) {
        $("body").removeClass("open")
    }
    else {
        $("body").addClass("open")
    }
        //클래스 관련 명령어
        //hasClass -있는지확인
        //addClass - 더하기
        // removeClass -제거
        //toggleClass - 토글
        */
});
$("#gnb .list > li .depth01").on("click", function () {
  //$("#gnb > .list > li .depth02").stop().slideUp(); 또는 아래줄(동일한결과)
  if ($(this).attr("href").trim() === "") {
    //링크가 비어있으면 아래 실행해라 아닐경우(링크) 링크실행 trim은 공백도 지움
    $(this).parent().siblings().find(".depth02").stop().slideUp(); //열린것 닫기,,시블링스는 나를 제외한 다른것
    $(this).parent().find(".depth02").stop().slideToggle(); //parent()는 위로한칸, find는 찾기
    return false; //링크를 없앤다, 본문에서 걸어놔도 안된다.
  }
});