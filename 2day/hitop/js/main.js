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
